"use client";

// Barra superior compacta (60px) y fija. Logo + menú (Inicio/Producto/Nosotros)
// + acceso a la cotización con contador. Los menús saltan a las secciones de la
// home (scroll suave); por eso usan rutas con ancla "/#seccion".
import Link from "next/link";
import { FileText } from "lucide-react";
import { useCart } from "./CartProvider";
import { Logo } from "./Logo";

const MENU = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#producto", label: "Producto" },
  { href: "/#nosotros", label: "Nosotros" },
];

export function Header() {
  const { totalItems } = useCart();

  return (
    <header
      className="fixed top-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-b"
      style={{ height: "var(--header-h)", borderColor: "var(--border)" }}
    >
      <div className="container h-full flex items-center justify-between">
        <Link href="/#inicio" aria-label="Inicio">
          <Logo size="sm" />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-5 text-sm">
          {MENU.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-semibold hover:text-[var(--amber-700)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/carrito"
            className="inline-flex items-center gap-2 font-semibold hover:text-[var(--amber-700)]"
            aria-label="Cotización"
          >
            <FileText size={16} />
            <span className="hidden sm:inline">Cotización</span>
            {totalItems > 0 && (
              <span
                className="tech"
                style={{
                  display: "inline-grid",
                  placeItems: "center",
                  minWidth: 20,
                  height: 20,
                  borderRadius: 999,
                  background: "var(--amber-500)",
                  color: "var(--graphite-950)",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "0 5px",
                }}
              >
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
