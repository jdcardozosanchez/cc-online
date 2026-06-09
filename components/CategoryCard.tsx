// Tarjeta de categoría del nivel 1 del catálogo. Ícono de la categoría sobre el
// fondo de marca + nombre + nº de referencias. Enlaza a la página de la categoría.
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryIcon } from "./CategoryIcon";
import type { CategoriaInfo } from "@/lib/categorias";

export function CategoryCard({ categoria }: { categoria: CategoriaInfo }) {
  return (
    <Link href={`/productos/categoria/${categoria.slug}`} className="cat-card">
      <div className="cat-ico">
        <CategoryIcon categoria={categoria.nombre} size={40} strokeWidth={1.4} />
      </div>
      <div className="cat-body">
        <div className="cat-name">{categoria.nombre}</div>
        <div className="cat-count tech">{categoria.total} referencias</div>
      </div>
      <ArrowRight size={18} className="cat-arrow" />
    </Link>
  );
}
