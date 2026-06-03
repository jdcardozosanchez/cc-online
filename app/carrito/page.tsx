"use client";

// Carrito = lista de lo que el cliente quiere. NO hay precios ni pago en el sitio:
// el botón final arma un mensaje con todo el pedido y lo abre en el WhatsApp de ventas.
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { enlaceWhatsAppPedido } from "@/lib/config";

export default function CarritoPage() {
  const { items, quitar, cambiarCantidad, vaciar } = useCart();

  // Carrito vacío: mensaje amable y enlace para seguir comprando.
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
      <h1 className="text-2xl font-bold mb-6">Tu pedido</h1>

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
              <p className="text-xs font-mono text-stone-400">{producto.codigo}</p>
              <p className="font-medium leading-snug">{producto.nombre}</p>
            </div>
            <label className="text-sm text-stone-500">
              Cant.
              <input
                type="number"
                min={1}
                value={cantidad}
                onChange={(e) => cambiarCantidad(producto.id, Number(e.target.value))}
                className="ml-2 w-16 rounded border border-stone-300 px-2 py-1 text-center"
              />
            </label>
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

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8">
        <button
          onClick={vaciar}
          className="text-sm text-stone-500 hover:text-red-600 self-start"
        >
          Vaciar carrito
        </button>

        {/* El cierre de la venta: abre WhatsApp con todo el pedido escrito. */}
        <a
          href={enlaceWhatsAppPedido(items)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-600 text-white px-8 py-3 font-medium text-center hover:bg-green-700 transition-colors"
        >
          Enviar pedido por WhatsApp
        </a>
      </div>

      <p className="text-sm text-stone-400 mt-6 text-right">
        Te atenderemos por WhatsApp para confirmar disponibilidad, precio y envío.
      </p>
    </section>
  );
}
