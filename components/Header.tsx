"use client";

// Barra superior: logo + navegación. Muestra cuántos productos hay en el carrito.
import Link from "next/link";
import { useCart } from "./CartProvider";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          C&amp;C <span className="text-amber-700">online</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/productos" className="hover:text-amber-700">
            Productos
          </Link>
          <Link href="/carrito" className="relative hover:text-amber-700">
            Carrito
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-5 bg-amber-700 text-white text-xs rounded-full px-1.5 py-0.5">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
