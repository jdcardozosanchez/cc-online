"use client";

// Nivel 1 del catálogo (estilo Fredmo): por defecto muestra las CATEGORÍAS como
// tarjetas. El buscador global se conserva: al escribir, cambia a una grilla de
// productos que coinciden (de todas las categorías), con filtros DER/IZQ y Marcopolo.
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { productos } from "@/lib/products";
import { listaCategorias, type Linea } from "@/lib/categorias";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";

export default function ProductosPage() {
  const [q, setQ] = useState("");
  const [soloMarco, setSoloMarco] = useState(false);
  const [linea, setLinea] = useState<Linea | undefined>(undefined); // undefined = todas

  const categorias = useMemo(() => listaCategorias(linea), [linea]);

  // Estamos "buscando" si hay texto o algún filtro activo → mostramos productos.
  const buscando = q.trim() !== "" || soloMarco;

  const filtrados = useMemo(() => {
    if (!buscando) return [];
    const texto = q.trim().toLowerCase();
    return productos.filter((p) => {
      if (linea && p.linea !== linea) return false;
      if (soloMarco && !p.marcopolo) return false;
      if (texto) {
        const blob = `${p.codigo} ${p.nombre} ${p.carroceria} ${p.attrs.join(" ")}`.toLowerCase();
        if (!blob.includes(texto)) return false;
      }
      return true;
    });
  }, [buscando, q, soloMarco, linea]);

  // Cuántas referencias hay en la línea elegida (para el subtítulo).
  const totalLinea = useMemo(
    () => (linea ? productos.filter((p) => p.linea === linea).length : productos.length),
    [linea]
  );

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

      {/* Segmento Bus / Camión: separa las dos líneas del catálogo */}
      <div className="seg mt-6">
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

      <div className="kicker mt-4">Catálogo · {totalLinea} referencias</div>
      <h1 className="text-2xl font-extrabold tracking-tight mt-1 mb-5" style={{ color: "var(--fg1)" }}>
        {linea === "Camión"
          ? "Autopartes para camiones"
          : linea === "Bus"
          ? "Autopartes para buses"
          : "Autopartes para buses y camiones"}
      </h1>

      {/* Filtro Marcopolo (solo aplica a buses) */}
      {linea !== "Camión" && (
        <div className="flex gap-2 flex-wrap items-center mb-6">
          <span className="text-sm" style={{ color: "var(--fg3)" }}>Filtrar:</span>
          <button
            className={"chip" + (soloMarco ? " chip-active" : "")}
            onClick={() => setSoloMarco((v) => !v)}
          >
            Marcopolo
          </button>
        </div>
      )}

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
