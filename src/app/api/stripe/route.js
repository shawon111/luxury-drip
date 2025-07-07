import { sendEmail } from '@/email/sendEmail';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const coupons = {
  SAVE10: true,
  SHOES40: true,
  WELCOME40: true,
};

// Helpers
function isShoe(item) {
  return item.title &&
    ['shoe', 'sneaker', 'skate', 'jordan', 'j4', 'trainer',
     'cinturino', 'yzy', 'yeezy', 'campus', 'boost'
    ].some(keyword => item.title.toLowerCase().includes(keyword));
}

function isValidCoupon(code) {
  return code && coupons[code.toUpperCase()];
}

function calculateTotal(cart, hasCoupon) {
  let total = 0;

  cart.forEach(item => {
    const price = typeof item.price === 'number' ? item.price : 0;
    const qty = typeof item.quantity === 'number' ? item.quantity : 1;
    const discount = hasCoupon && isShoe(item) ? 0.6 : 1; // 40% off only if coupon valid
    total += price * qty * discount;
  });

  return Math.round(total * 100); // Stripe uses cents
}

export async function POST(request) {
  try {
    const { cart, couponCode, customer } = await request.json();

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return new Response(JSON.stringify({ error: 'Cart is empty' }), { status: 400 });
    }

    if (!customer?.email || !customer?.name) {
      return new Response(JSON.stringify({ error: 'Invalid customer data' }), { status: 400 });
    }

    const hasCoupon = isValidCoupon(couponCode);
    const totalCents = calculateTotal(cart, hasCoupon);

    if (totalCents <= 0) {
      return new Response(JSON.stringify({ error: 'Invalid total' }), { status: 400 });
    }

    // 1. Create Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Your Order',
              description: hasCoupon ? 'Coupon applied: 40% off shoes' : 'No discount',
            },
            unit_amount: totalCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
      customer_email: customer.email,
      metadata: {
        customer_name: customer.name,
        coupon_code: couponCode || '',
        discount_applied: hasCoupon ? 'YES' : 'NO',
      },
    });

    // 2. Prepare email content
    const totalEUR = (totalCents / 100).toFixed(2);

    const plainText = `
New Order from ${customer.name}
Email: ${customer.email}
Total: €${totalEUR}
Coupon: ${hasCoupon ? couponCode : 'None'}

Items:
${cart.map((item, i) =>
  `${i + 1}. ${item.title} x${item.quantity} (€${item.price})`
).join('\n')}
`;

    const html = `
<h2>🛒 New Order</h2>
<p><strong>Name:</strong> ${customer.name}</p>
<p><strong>Email:</strong> ${customer.email}</p>
<p><strong>Total:</strong> €${totalEUR}</p>
<p><strong>Coupon:</strong> ${hasCoupon ? couponCode : 'None'}</p>
<h4>Items:</h4>
<ul>
  ${cart.map(item =>
    `<li>${item.title} x ${item.quantity} (€${item.price})</li>`
  ).join('')}
</ul>
`;

    // 3. Send email to store owner (fail-safe)
    try {
      await sendEmail({
        to: 'you@yourdomain.com',
        subject: `🛍️ New Order - €${totalEUR}`,
        text: plainText,
        html,
      });
    } catch (err) {
      console.error('Failed to email store owner:', err);
    }

    // 4. Send email to customer (fail-safe)
    try {
      await sendEmail({
        to: customer.email,
        subject: `✅ Order Confirmation - €${totalEUR}`,
        text: `Thank you for your order, ${customer.name}!\n\nOrder total: €${totalEUR}`,
        html: `
          <h2>Thank you for your order, ${customer.name}!</h2>
          <p>We received your order of €${totalEUR}. You’ll receive a shipping update soon.</p>
          <h4>Summary:</h4>
          <ul>
            ${cart.map(item =>
              `<li>${item.title} x ${item.quantity} (€${item.price})</li>`
            ).join('')}
          </ul>
        `,
      });
    } catch (err) {
      console.error('Failed to email customer:', err);
    }

    // 5. Return session URL
    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Checkout error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
