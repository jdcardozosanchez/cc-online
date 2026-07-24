"use client";

// Nivel 1 del catálogo (estilo Fredmo): por defecto muestra las CATEGORÍAS como
// tarjetas. El buscador global se conserva: al escribir, cambia a una grilla de
// productos que coinciden (de todas las categorías), con filtros DER/IZQ y Marcopolo.
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { productos } from "@/lib/products";
import { listaCategorias } from "@/lib/categorias";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";

export default function ProductosPage() {
  const [q, setQ] = useState("");
  const [soloMarco, setSoloMarco] = useState(false);

  const categorias = useMemo(() => listaCategorias(), []);

  // Estamos "buscando" si hay texto o algún filtro activo → mostramos productos.
  const buscando = q.trim() !== "" || soloMarco;

  const filtrados = useMemo(() => {
    if (!buscando) return [];
    const texto = q.trim().toLowerCase();
    return productos.filter((p) => {
      if (soloMarco && !p.marcopolo) return false;
      if (texto) {
        const blob = `${p.codigo} ${p.nombre} ${p.carroceria} ${p.attrs.join(" ")}`.toLowerCase();
        if (!blob.includes(texto)) return false;
      }
      return true;
    });
  }, [buscando, q, soloMarco]);

  return (
    <section>
      {/* Búsqueda global de primeras: lo primero que ve quien ya sabe qué pieza quiere */}
      <div className="search">
        <Search size={18} color="var(--fg3)" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por referencia, modelo o pieza…"
        />
      </div>

      <div className="kicker mt-6">Catálogo · {productos.length} referencias</div>
      <h1 className="text-2xl font-extrabold tracking-tight mt-1 mb-5" style={{ color: "var(--fg1)" }}>
        Autopartes para buses
      </h1>

      {/* Filtro Marcopolo (activa la vista de resultados) */}
      <div className="flex gap-2 flex-wrap items-center mb-6">
        <span className="text-sm" style={{ color: "var(--fg3)" }}>Filtrar:</span>
        <button
          className={"chip" + (soloMarco ? " chip-active" : "")}
          onClick={() => setSoloMarco((v) => !v)}
        >
          Marcopolo
        </button>
      </div>

      {!buscando ? (
        /* Vista por defecto: tarjetas de categoría */
        <div className="cat-grid">
          {categorias.map((c) => (
            <CategoryCard key={c.slug} categoria={c} />
          ))}
        </div>
      ) : filtrados.length === 0 ? (
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
