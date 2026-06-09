// ─────────────────────────────────────────────────────────────────────────────
// Configuración del canal de ventas por WhatsApp.
// 👉 ESTE ES EL ÚNICO LUGAR para cambiar el número. Reemplaza el de ejemplo por
//    el real, en formato internacional y SOLO dígitos: 57 + número (sin + ni espacios).
//    Ejemplo Colombia: 57 300 123 4567  ->  "573001234567"
// ─────────────────────────────────────────────────────────────────────────────

import type { Product } from "./products";

export const WHATSAPP_VENTAS = "573142976606"; // Número real de ventas (Colombia)

type LineaCarrito = { producto: Product; cantidad: number };

// Arma el enlace de WhatsApp con TODO el pedido del carrito escrito como mensaje.
export function enlaceWhatsAppPedido(items: LineaCarrito[]): string {
  const lineas = items.map(
    ({ producto, cantidad }) =>
      `• [${producto.codigo}] ${producto.nombre} — Cantidad: ${cantidad}`,
  );
  const mensaje =
    "¡Hola! Estoy interesado/a en estas autopartes:\n\n" +
    lineas.join("\n") +
    "\n\n¿Me ayudan con disponibilidad y precio? Gracias.";
  return `https://wa.me/${WHATSAPP_VENTAS}?text=${encodeURIComponent(mensaje)}`;
}

// Enlace de WhatsApp para UN solo producto (botón directo en el detalle).
export function enlaceWhatsAppProducto(producto: Product): string {
  const mensaje = `Buen día. Quiero cotizar: [${producto.codigo}] ${producto.nombre}. ¿Disponibilidad y precio?`;
  return `https://wa.me/${WHATSAPP_VENTAS}?text=${encodeURIComponent(mensaje)}`;
}

// Enlace de WhatsApp general (hero / contacto, sin producto específico).
export function enlaceWhatsAppGeneral(): string {
  const mensaje = "Buen día. Quiero cotizar autopartes para bus.";
  return `https://wa.me/${WHATSAPP_VENTAS}?text=${encodeURIComponent(mensaje)}`;
}
