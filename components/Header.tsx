"use client";

// Barra superior compacta (60px) y fija. Logo + navegación + contador de cotización.
import Link from "next/link";
import { FileText } from "lucide-react";
import { useCart } from "./CartProvider";
import { Logo } from "./Logo";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header
      className="fixed top-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-b"
      style={{ height: "var(--header-h)", borderColor: "var(--border)" }}
    >
      <div className="container h-full flex items-center justify-between">
        <Link href="/" aria-label="Inicio">
          <Logo size="sm" />
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/productos" className="font-semibold hover:text-[var(--amber-700)]">
            Catálogo
          </Link>
          <Link
            href="/carrito"
            className="inline-flex items-center gap-2 font-semibold hover:text-[var(--amber-700)]"
          >
            <FileText size={16} />
            Cotización
            {totalItems > 0 && (
              <span className="wa-fab-count tech" style={{ display: "inline-grid", placeItems: "center", minWidth: 20, height: 20, borderRadius: 999, background: "var(--amber-500)", color: "var(--graphite-950)", fontSize: 11, fontWeight: 700, padding: "0 5px" }}>
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
