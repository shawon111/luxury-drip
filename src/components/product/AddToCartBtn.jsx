'use client'
import { Button } from '../ui/button';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const AddToCartBtn = ({ product }) => {
    const { addToCart } = useCart();
    return (
        <div className="flex items-center justify-between mt-[20px]">
            <Button className="uppercase bg-transparent border-0 text-[#111111] shadow-none hover:bg-transparent hover:text-[#111111] hover:shadow-none hover:border-0 p-0 text-[16px] font-[500] leading-[1em] cursor-pointer" onClick={(e)=> addToCart(product)}>
                Add to Cart
            </Button>
            <Link href={`/products/${product.productId}`}><Eye className="w-4 h-4" /></Link>
        </div>
    );
};

export default AddToCartBtn;