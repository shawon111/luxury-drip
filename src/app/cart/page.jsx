import CartPageClient from "@/components/cart/CartPageClient";
import CartWrapper from "@/components/layout/CartWrapper";

export default function CartPage() {
  return (
    <div>
      <CartWrapper>
        <CartPageClient />
      </CartWrapper>
    </div>
  );
}
