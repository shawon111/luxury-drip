'use client';

import { useCart } from '@/contexts/CartContext';
import { useEffect, useState } from 'react';

export default function CheckoutPageClient() {
    const { cart, clearCart } = useCart();

    const [customer, setCustomer] = useState({ name: '', email: '', address: '' });
    const [coupon, setCoupon] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [currentCart, setCurrentCart] = useState(cart)

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    useEffect(()=>{
        setCurrentCart(cart)
    }, [cart])

    const handleChange = (e) => {
        setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!cart.length) {
            setMessage('Your cart is empty.');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            const res = await fetch('/api/stripe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cart: currentCart,
                    couponCode: coupon.trim(),
                    customer,
                }),
            });

            const data = await res.json();

            if (data.url) {
                clearCart();
                window.location.href = data.url;
            } else {
                setMessage(data.error || 'Something went wrong.');
            }
        } catch (err) {
            setMessage(err.message);
        }

        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>

            <h2 className="mb-2">Order Summary</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="mb-4">
                    {cart.map((item) => (
                        <li key={item.productId} className="flex justify-between">
                            <span>
                                {item.title} x {item.quantity}
                            </span>
                            <span>€{(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                    <li className="font-bold flex justify-between mt-2">
                        <span>Total</span>
                        <span>€{total.toFixed(2)}</span>
                    </li>
                </ul>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={customer.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={customer.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <textarea
                    name="address"
                    placeholder="Address"
                    value={customer.address}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                    rows={3}
                />
                <input
                    type="text"
                    placeholder="Coupon code (optional)"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    disabled={loading || cart.length === 0}
                    className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50 cursor-pointer"
                >
                    {loading ? 'Redirecting...' : 'Pay with Stripe'}
                </button>
            </form>

            {message && <p className="mt-4 text-center text-red-600">{message}</p>}
        </div>
    );
}
