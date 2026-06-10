"use client";

// Cotización = lo que el cliente quiere pedir. Sin precios: el botón final arma
// el mensaje con todas las piezas y lo abre en el WhatsApp de ventas.
import Link from "next/link";
import { Send, X, MessageCircle } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { enlaceWhatsAppPedido } from "@/lib/config";
import { CategoryIcon } from "@/components/CategoryIcon";

export default function CotizacionPage() {
  const { items, quitar, cambiarCantidad, vaciar, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <section className="text-center py-16">
        <h1 className="text-2xl font-extrabold" style={{ color: "var(--fg1)" }}>
          Su cotización está vacía
        </h1>
        <p className="mt-2" style={{ color: "var(--fg3)" }}>
          Agregue las piezas que necesita y envíelas por WhatsApp.
        </p>
        <Link href="/productos" className="btn btn-primary mt-6 inline-flex">
          Ver catálogo
        </Link>
      </section>
    );
  }

  return (
    <section>
      <div className="kicker">Cotización · {totalItems} piezas</div>
      <h1 className="text-2xl font-extrabold tracking-tight mt-1 mb-6" style={{ color: "var(--fg1)" }}>
        Su cotización
      </h1>

      <ul style={{ borderTop: "1px solid var(--border)" }}>
        {items.map(({ producto, cantidad }) => (
          <li
            key={producto.id}
            className="flex items-center gap-4 py-4"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div
              className="w-16 h-16 rounded-lg grid place-items-center shrink-0"
              style={{
                background:
                  "radial-gradient(80px 50px at 50% 40%, rgba(255,158,0,0.12), transparent 70%), var(--gray-100)",
                color: "var(--gray-300)",
              }}
            >
              <CategoryIcon categoria={producto.categoria} size={26} strokeWidth={1.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="tech text-xs" style={{ color: "var(--fg3)" }}>
                {producto.codigo}
              </p>
              <p className="font-semibold leading-snug uppercase text-sm" style={{ color: "var(--fg1)" }}>
                {producto.nombre}
              </p>
            </div>
            <label className="text-sm" style={{ color: "var(--fg3)" }}>
              Cant.
              <input
                type="number"
                min={1}
                value={cantidad}
                onChange={(e) => cambiarCantidad(producto.id, Number(e.target.value))}
                className="tech ml-2 w-16 text-center"
                style={{ border: "1px solid var(--border)", borderRadius: 8, padding: "6px 8px" }}
              />
            </label>
            <button
              onClick={() => quitar(producto.id)}
              aria-label={`Quitar ${producto.nombre}`}
              style={{ color: "var(--gray-300)" }}
              className="hover:text-[var(--stop-500)]"
            >
              <X size={18} />
            </button>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8">
        <button
          onClick={vaciar}
          className="text-sm self-start hover:text-[var(--stop-500)]"
          style={{ color: "var(--fg3)" }}
        >
          Vaciar cotización
        </button>
        <a
          href={enlaceWhatsAppPedido(items)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-wa"
        >
          <Send size={18} />
          Enviar por WhatsApp
        </a>
      </div>

      <p
        className="mt-6 inline-flex items-center gap-2 tech text-xs"
        style={{ color: "var(--fg3)" }}
      >
        <MessageCircle size={14} color="var(--whatsapp)" />
        Le atendemos por WhatsApp para confirmar disponibilidad, precio y envío.
      </p>
    </section>
  );
}
