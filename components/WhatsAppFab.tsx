"use client";

// Botón flotante de WhatsApp, siempre accesible (canal central del negocio).
// Lleva a la cotización; muestra cuántas piezas hay acumuladas.
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useCart } from "./CartProvider";

export function WhatsAppFab() {
  const { totalItems } = useCart();
  return (
    <Link href="/carrito" className="wa-fab" aria-label="Ir a la cotización">
      <MessageCircle size={24} />
      Cotizar
      {totalItems > 0 && <span className="count tech">{totalItems}</span>}
    </Link>
  );
}
