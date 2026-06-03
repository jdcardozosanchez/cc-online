"use client";

// Página del carrito. Lee todo del hook useCart() (que a su vez lee del navegador).
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatearCOP } from "@/lib/format";

export default function CarritoPage() {
  const { items, total, quitar, cambiarCantidad, vaciar } = useCart();

  // Carrito vacío: mensaje amable y un enlace para seguir comprando.
  if (items.length === 0) {
    return (
      <section className="text-center py-16">
        <h1 className="text-2xl font-bold">Tu carrito está vacío</h1>
        <Link
          href="/productos"
          className="inline-block mt-6 text-amber-700 hover:underline"
        >
          Ver productos
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Tu carrito</h1>

      <ul className="divide-y divide-stone-200 border-y border-stone-200">
        {items.map(({ producto, cantidad }) => (
          <li key={producto.id} className="flex items-center gap-4 py-4">
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl shrink-0"
              style={{ backgroundColor: producto.color }}
            >
              {producto.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{producto.nombre}</p>
              <p className="text-sm text-stone-500">
                {formatearCOP(producto.precio)} c/u
              </p>
            </div>
            <input
              type="number"
              min={1}
              value={cantidad}
              onChange={(e) => cambiarCantidad(producto.id, Number(e.target.value))}
              className="w-16 rounded border border-stone-300 px-2 py-1 text-center"
            />
            <p className="w-28 text-right font-medium">
              {formatearCOP(producto.precio * cantidad)}
            </p>
            <button
              onClick={() => quitar(producto.id)}
              className="text-stone-400 hover:text-red-600"
              aria-label={`Quitar ${producto.nombre}`}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={vaciar}
          className="text-sm text-stone-500 hover:text-red-600"
        >
          Vaciar carrito
        </button>
        <p className="text-xl font-bold">Total: {formatearCOP(total)}</p>
      </div>

      {/* Recordatorio honesto: el pago real llega en una fase próxima (Wompi). */}
      <p className="text-sm text-stone-400 mt-8 text-right">
        El pago en línea llegará en una fase próxima (Wompi).
      </p>
    </section>
  );
}
