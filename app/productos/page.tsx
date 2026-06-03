"use client";

// Catálogo con búsqueda + filtros (categoría / lado DER-IZQ / Marcopolo).
// El lado es eje de filtrado obligatorio del design system (muchas piezas vienen en par).
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { productos, categorias } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function ProductosPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [lado, setLado] = useState<string | null>(null);
  const [soloMarco, setSoloMarco] = useState(false);

  const filtrados = useMemo(() => {
    const texto = q.trim().toLowerCase();
    return productos.filter((p) => {
      if (cat && p.categoria !== cat) return false;
      if (lado && p.lado !== lado) return false;
      if (soloMarco && !p.marcopolo) return false;
      if (texto) {
        const blob = `${p.codigo} ${p.nombre} ${p.carroceria} ${p.attrs.join(" ")}`.toLowerCase();
        if (!blob.includes(texto)) return false;
      }
      return true;
    });
  }, [q, cat, lado, soloMarco]);

  return (
    <section>
      <div className="kicker">Catálogo · {productos.length} referencias</div>
      <h1 className="text-2xl font-extrabold tracking-tight mt-1 mb-5" style={{ color: "var(--fg1)" }}>
        Autopartes para buses
      </h1>

      {/* Búsqueda */}
      <div className="search mb-4">
        <Search size={18} color="var(--fg3)" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por referencia, modelo o pieza…"
        />
      </div>

      {/* Filtros */}
      <div className="flex gap-2 flex-wrap items-center mb-2">
        <span className="chip chip-active">
          <SlidersHorizontal size={14} /> Filtros
        </span>
        <button className={"chip" + (!cat ? " chip-active" : "")} onClick={() => setCat(null)}>
          Todas
        </button>
        {categorias.map((c) => (
          <button
            key={c}
            className={"chip" + (cat === c ? " chip-active" : "")}
            onClick={() => setCat(cat === c ? null : c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap items-center mb-6">
        {(["DER", "IZQ"] as const).map((l) => (
          <button
            key={l}
            className={"chip chip-side" + (lado === l ? " chip-on" : "")}
            onClick={() => setLado(lado === l ? null : l)}
          >
            {l}
          </button>
        ))}
        <button
          className={"chip" + (soloMarco ? " chip-active" : "")}
          onClick={() => setSoloMarco((v) => !v)}
        >
          Marcopolo
        </button>
      </div>

      {/* Resultados */}
      {filtrados.length === 0 ? (
        <p className="py-12 text-center" style={{ color: "var(--fg3)" }}>
          No encontramos referencias con esos filtros. Pruebe otra búsqueda o cotice por WhatsApp.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtrados.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      )}
    </section>
  );
}
