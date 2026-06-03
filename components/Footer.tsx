import { Logo } from "./Logo";

// Pie grafito — bloque de realce del design system ("LUZ OFICIAL" sobre base oscura).
export function Footer() {
  return (
    <footer style={{ background: "var(--graphite-900)" }} className="mt-16">
      <div className="container py-10">
        <Logo light />
        <p className="mt-4 max-w-md text-sm" style={{ color: "var(--gray-300)" }}>
          Importador directo y distribuidor autorizado de repuestos para buses y
          carrocerías de transporte de pasajeros. Cotice por WhatsApp.
        </p>
        <p className="mt-6 tech text-xs" style={{ color: "var(--gray-400)" }}>
          © {new Date().getFullYear()} Cabinas y Conjuntos SAS · Bogotá, Colombia
        </p>
      </div>
    </footer>
  );
}
