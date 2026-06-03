"use client";

// Botón "Agregar al carrito". Da una confirmación visual breve al hacer clic.
import { useState } from "react";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/products";

export function AddToCartButton({ producto }: { producto: Product }) {
  const { agregar } = useCart();
  const [agregado, setAgregado] = useState(false);

  function onClick() {
    agregar(producto);
    setAgregado(true);
    // El "✓ Agregado" vuelve a su texto normal después de 1.5 s.
    setTimeout(() => setAgregado(false), 1500);
  }

  return (
    <button
      onClick={onClick}
      className="rounded-full bg-amber-700 text-white px-6 py-3 font-medium hover:bg-amber-800 transition-colors"
    >
      {agregado ? "✓ Agregado" : "Agregar al carrito"}
    </button>
  );
}
