"use client";

// "Agregar a cotización" → lo añade y abre un diálogo:
//   • Ir a la cotización  → va al carrito para enviarlo por WhatsApp.
//   • Seguir buscando     → cierra y se queda navegando el catálogo.
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Check } from "lucide-react";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/products";

export function AddToCartButton({ producto }: { producto: Product }) {
  const { agregar } = useCart();
  const router = useRouter();
  const [abierto, setAbierto] = useState(false);

  function onAgregar() {
    agregar(producto);
    setAbierto(true);
  }

  return (
    <>
      <button onClick={onAgregar} className="btn btn-outline btn-full">
        <Plus size={18} />
        Agregar a cotización
      </button>

      {abierto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(14,16,19,0.6)" }}
          onClick={() => setAbierto(false)}
        >
          <div
            className="bg-white p-6 w-full max-w-sm"
            style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="inline-flex items-center gap-2 text-lg font-bold" style={{ color: "var(--fg1)" }}>
              <Check size={20} color="var(--success-500)" /> Agregado a la cotización
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--fg3)" }}>
              {producto.nombre}
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <button onClick={() => router.push("/carrito")} className="btn btn-primary btn-full">
                Ir a la cotización
              </button>
              <button onClick={() => setAbierto(false)} className="btn btn-ghost btn-full">
                Seguir buscando
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
