"use client";

// Navegador del nivel 2: muestra los productos de UNA categoría, con buscador
// local + filtros DER/IZQ y Marcopolo (donde más sirven). La categoría ya viene
// fijada desde la página; aquí no se cambia de categoría.
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import type { Product } from "@/lib/products";
import type { Linea } from "@/lib/categorias";
import { ProductCard } from "./ProductCard";

export function CategoryBrowser({
  categoria,
  items,
}: {
  categoria: string;
  items: Product[];
}) {
  const [q, setQ] = useState("");
  const [soloMarco, setSoloMarco] = useState(false);
  const [linea, setLinea] = useState<Linea | undefined>(undefined);

  // ¿Esta categoría mezcla bus y camión? Solo entonces mostramos el segmento.
  const hayBus = items.some((p) => p.linea === "Bus");
  const hayCamion = items.some((p) => p.linea === "Camión");
  const mixta = hayBus && hayCamion;

  const filtrados = useMemo(() => {
    const texto = q.trim().toLowerCase();
    return items.filter((p) => {
      if (linea && p.linea !== linea) return false;
      if (soloMarco && !p.marcopolo) return false;
      if (texto) {
        const blob = `${p.codigo} ${p.nombre} ${p.carroceria} ${p.attrs.join(" ")}`.toLowerCase();
        if (!blob.includes(texto)) return false;
      }
      return true;
    });
  }, [q, soloMarco, items, linea]);

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

      {/* Segmento Bus / Camión: solo si la categoría tiene de las dos líneas */}
      {mixta && (
        <div className="seg mb-4">
          <button className={"seg-btn" + (!linea ? " seg-active" : "")} onClick={() => setLinea(undefined)}>
            Todo
          </button>
          <button className={"seg-btn" + (linea === "Bus" ? " seg-active" : "")} onClick={() => setLinea("Bus")}>
            Bus
          </button>
          <button className={"seg-btn" + (linea === "Camión" ? " seg-active" : "")} onClick={() => setLinea("Camión")}>
            Camión
          </button>
        </div>
      )}

      {/* Búsqueda dentro de la categoría */}
      <div className="search mb-4">
        <Search size={18} color="var(--fg3)" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Buscar dentro de ${categoria}…`}
        />
      </div>

      {/* Filtro Marcopolo — solo si la categoría tiene piezas Marcopolo */}
      {items.some((p) => p.marcopolo) && (
        <div className="flex gap-2 flex-wrap items-center mb-6">
          <button
            className={"chip" + (soloMarco ? " chip-active" : "")}
            onClick={() => setSoloMarco((v) => !v)}
          >
            Marcopolo
          </button>
        </div>
      )}

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
