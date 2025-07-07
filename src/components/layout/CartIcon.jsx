'use client'
import Link from "next/link";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";

const CartIcon = () => {
    const { cart } = useCart();
    return (
        <Link className="relative" href='/cart'>
            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute top-[-15px] right-[-10px] bg-red-800">
                {cart.length}
            </Badge>
            <Image
                src={'/images/cart-icon.svg'}
                width={18}
                height={18}
                alt="Cart Icon"
            />
        </Link>
    );
};

export default CartIcon;