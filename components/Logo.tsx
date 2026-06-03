import { Isotipo } from "./Isotipo";

// Lockup de marca: isotipo + wordmark "Cabinas y Conjuntos".
// Copy corregido del chat: "Distribuidores autorizados" (no "repuestos oficiales").
export function Logo({ light = false, size = "md" }: { light?: boolean; size?: "sm" | "md" }) {
  const s = size === "sm" ? { iso: 26, name: 15 } : { iso: 32, name: 18 };
  return (
    <span className="logo">
      <Isotipo size={s.iso} />
      <span>
        <span
          className="logo-name"
          style={{ fontSize: s.name, color: light ? "#fff" : "var(--fg1)", display: "block" }}
        >
          Cabinas <span style={{ color: "var(--amber-500)" }}>y</span> Conjuntos
        </span>
        <span className="logo-desc" style={{ display: "block" }}>
          Distribuidores autorizados · Buses
        </span>
      </span>
    </span>
  );
}
