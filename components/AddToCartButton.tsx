"use client";

// Acciones de compra en el detalle de un producto:
//  1. "Añadir al carrito"  → lo agrega y abre un diálogo preguntando qué hacer:
//        • Seguir comprando   → cierra el diálogo y se queda navegando.
//        • Ir a facturar      → va al carrito para enviar el pedido por WhatsApp.
//  2. "Comprar por WhatsApp" → atajo directo: escribe a ventas por ese solo producto.

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartProvider";
import { enlaceWhatsAppProducto } from "@/lib/config";
import type { Product } from "@/lib/products";

export function AddToCartButton({ producto }: { producto: Product }) {
  const { agregar } = useCart();
  const router = useRouter();
  const [abierto, setAbierto] = useState(false);

  function onAgregar() {
    agregar(producto);
    setAbierto(true); // mostrar el diálogo de "¿qué deseas hacer?"
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={onAgregar}
        className="rounded-full bg-amber-700 text-white px-6 py-3 font-medium hover:bg-amber-800 transition-colors"
      >
        Añadir al carrito
      </button>

      <a
        href={enlaceWhatsAppProducto(producto)}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-green-600 text-green-700 px-6 py-3 font-medium text-center hover:bg-green-50 transition-colors"
      >
        Comprar por WhatsApp
      </a>

      {/* Diálogo que aparece al añadir al carrito */}
      {abierto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setAbierto(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg font-semibold">✓ Añadido al carrito</p>
            <p className="text-stone-600 mt-1 text-sm">{producto.nombre}</p>
            <div className="flex flex-col gap-3 mt-6">
              <button
                onClick={() => router.push("/carrito")}
                className="rounded-full bg-amber-700 text-white px-6 py-3 font-medium hover:bg-amber-800 transition-colors"
              >
                Ir a facturar
              </button>
              <button
                onClick={() => setAbierto(false)}
                className="rounded-full border border-stone-300 px-6 py-3 font-medium hover:bg-stone-50 transition-colors"
              >
                Seguir comprando
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
