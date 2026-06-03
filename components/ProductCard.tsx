// Tarjeta de producto del design system: foto-placeholder honesta + sellos + meta
// técnica en mono + CTA "Cotizar por WhatsApp". Sin precio (catálogo).
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/products";
import { enlaceWhatsAppProducto } from "@/lib/config";
import { CategoryIcon } from "./CategoryIcon";

export function ProductCard({ producto }: { producto: Product }) {
  const meta = [producto.carroceria, ...producto.attrs].filter(Boolean).slice(0, 3);
  return (
    <article className="prod-card">
      <Link href={`/productos/${producto.id}`} className="prod-link">
        <div className="prod-photo">
          <div className="prod-badges">
            {producto.marcopolo && <span className="badge badge-marco">Marcopolo</span>}
            {producto.lado && <span className="badge badge-side">{producto.lado}</span>}
          </div>
          <CategoryIcon categoria={producto.categoria} size={34} strokeWidth={1.5} />
          <span className="photo-tag">Foto de producto</span>
        </div>
        <div className="prod-body">
          <span className="prod-code">{producto.codigo}</span>
          <div className="prod-name">{producto.nombre}</div>
          <div className="prod-meta">
            {meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
          <div className="prod-status q">
            <span className="sdot" />
            Consultar disponibilidad
          </div>
        </div>
      </Link>
      <div className="prod-foot">
        <a
          href={enlaceWhatsAppProducto(producto)}
          target="_blank"
          rel="noopener noreferrer"
          className="prod-wa"
        >
          <MessageCircle size={16} />
          Cotizar por WhatsApp
        </a>
      </div>
    </article>
  );
}
