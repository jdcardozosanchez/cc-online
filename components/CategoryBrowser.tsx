"use client";

// Navegador del nivel 2: muestra los productos de UNA categoría, con buscador
// local + filtros DER/IZQ y Marcopolo (donde más sirven). La categoría ya viene
// fijada desde la página; aquí no se cambia de categoría.
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import type { Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function CategoryBrowser({
  categoria,
  items,
}: {
  categoria: string;
  items: Product[];
}) {
  const [q, setQ] = useState("");
  const [lado, setLado] = useState<string | null>(null);
  const [soloMarco, setSoloMarco] = useState(false);

  const filtrados = useMemo(() => {
    const texto = q.trim().toLowerCase();
    return items.filter((p) => {
      if (lado && p.lado !== lado) return false;
      if (soloMarco && !p.marcopolo) return false;
      if (texto) {
        const blob = `${p.codigo} ${p.nombre} ${p.carroceria} ${p.attrs.join(" ")}`.toLowerCase();
        if (!blob.includes(texto)) return false;
      }
      return true;
    });
  }, [q, lado, soloMarco, items]);

  return (
    <section>
      <Link
        href="/productos"
        className="inline-flex items-center gap-1 text-sm"
        style={{ color: "var(--fg3)" }}
      >
        <ArrowLeft size={15} /> Volver al catálogo
      </Link>

      <div className="kicker mt-3">Categoría · {items.length} referencias</div>
      <h1
        className="text-2xl font-extrabold tracking-tight mt-1 mb-5 uppercase"
        style={{ color: "var(--fg1)" }}
      >
        {categoria}
      </h1>

      {/* Búsqueda dentro de la categoría */}
      <div className="search mb-4">
        <Search size={18} color="var(--fg3)" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Buscar dentro de ${categoria}…`}
        />
      </div>

      {/* Filtros DER/IZQ + Marcopolo */}
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
