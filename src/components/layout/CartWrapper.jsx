'use client';

import { CartProvider } from "@/contexts/CartContext";

export default function CartWrapper({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
