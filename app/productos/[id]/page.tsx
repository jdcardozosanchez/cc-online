import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getProducto, productos } from "@/lib/products";
import { enlaceWhatsAppProducto } from "@/lib/config";
import { AddToCartButton } from "@/components/AddToCartButton";
import { CategoryIcon } from "@/components/CategoryIcon";

// En modo estático, Next necesita saber de antemano TODAS las páginas de
// producto que debe generar. Aquí le pasamos el id de los 170 productos.
export function generateStaticParams() {
  return productos.map((producto) => ({ id: producto.id }));
}

// Ficha de producto. params llega como promesa en Next 16.
export default async function ProductoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const producto = getProducto(id);
  if (!producto) notFound();

  return (
    <article className="grid sm:grid-cols-2 gap-8 items-start">
      {/* Foto-placeholder honesta (aún sin fotos reales) */}
      <div
        className="prod-photo rounded-xl"
        style={{ height: 320, borderRadius: 14 }}
      >
        <div className="prod-badges">
          {producto.marcopolo && <span className="badge badge-marco">Marcopolo</span>}
        </div>
        <CategoryIcon categoria={producto.categoria} size={64} strokeWidth={1.25} />
        <span className="photo-tag">Foto de producto</span>
      </div>

      <div>
        <Link
          href="/productos"
          className="inline-flex items-center gap-1 text-sm"
          style={{ color: "var(--fg3)" }}
        >
          <ArrowLeft size={15} /> Volver al catálogo
        </Link>

        <div className="tech mt-3 text-sm" style={{ color: "var(--fg3)" }}>
          {producto.codigo} · {producto.categoria}
        </div>
        <h1
          className="text-2xl font-extrabold tracking-tight mt-1 uppercase"
          style={{ color: "var(--fg1)" }}
        >
          {producto.nombre}
        </h1>

        {/* Metadatos técnicos como badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {producto.carroceria && <span className="badge badge-side">{producto.carroceria}</span>}
          {producto.attrs.map((a) => (
            <span key={a} className="badge badge-led">
              {a}
            </span>
          ))}
        </div>

        <div className="prod-status q mt-4">
          <span className="sdot" />
          Consultar disponibilidad
        </div>

        <p className="mt-4" style={{ color: "var(--fg2)" }}>
          {producto.descripcion}
        </p>

        {producto.marcopolo && (
          <div className="marco-seal mt-5">
            <span className="dot" />
            <span>
              <span className="t">Distribuidor Autorizado Marcopolo Superpolo</span>
              <br />
              <span className="s">Paradiso · G7 · G8 · Torino · Senior · Andare</span>
            </span>
          </div>
        )}

        {/* Acciones: Cotizar (WhatsApp) primario + Agregar a cotización */}
        <div className="mt-8 flex flex-col gap-3">
          <a
            href={enlaceWhatsAppProducto(producto)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa btn-full"
          >
            <MessageCircle size={18} />
            Cotizar por WhatsApp
          </a>
          <AddToCartButton producto={producto} />
        </div>
      </div>
    </article>
  );
}
