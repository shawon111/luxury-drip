'use client'

import { useCart } from '@/contexts/CartContext';
import { parseEuroPrice } from '@/lib/parseEuroPrice';
import Link from 'next/link';
import React from 'react';

const CartPageClient = () => {
    const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div className="p-6 text-center min-h-[60vh] flex items-center justify-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                    <p>Start adding some products!</p>
                </div>
            </div>
        );
    }
    return (
        <div className="p-6 max-w-3xl mx-auto min-h-[60vh]">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

            <div className="space-y-6">
                {cart.map((item) => (
                    <div
                        key={item.productId}
                        className="flex items-center justify-between border p-4 rounded-lg shadow"
                    >
                        <div className="flex items-center space-x-4">
                            {item.image && (
                                <img src={item.featuredImages[0]} alt={item.title} className="w-16 h-16 object-cover rounded" />
                            )}
                            <div>
                                <h2 className="font-semibold text-lg">{item.title}</h2>
                                <p className="text-gray-600">€{item.price}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <input
                                type="number"
                                min={1}
                                value={item.quantity}
                                onChange={(e) =>
                                    updateQuantity(item.productId, parseInt(e.target.value) || 1)
                                }
                                className="w-16 px-2 py-1 border rounded"
                            />
                            <button
                                onClick={() => removeFromCart(item.productId)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-right">
                <h3 className="text-xl font-semibold mb-2">Subtotal: €{subtotal.toFixed(2)}</h3>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={clearCart}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Clear Cart
                    </button>
                    <Link href='/checkout'>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                        >
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPageClient;