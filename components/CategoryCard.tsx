// Tarjeta de categoría del nivel 1 del catálogo. Cabecera grafito con el ícono
// (concepto "LUZ OFICIAL": halo ámbar) + cuerpo blanco con nombre y nº de
// referencias. Enlaza a la página de la categoría.
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryIcon } from "./CategoryIcon";
import type { CategoriaInfo } from "@/lib/categorias";

export function CategoryCard({ categoria }: { categoria: CategoriaInfo }) {
  return (
    <Link href={`/productos/categoria/${categoria.slug}`} className="cat-card">
      <div className="cat-head">
        <CategoryIcon categoria={categoria.nombre} size={40} strokeWidth={1.4} />
      </div>
      <div className="cat-body">
        <div className="cat-name">{categoria.nombre}</div>
        <div className="cat-foot">
          <span className="cat-count tech">{categoria.total} referencias</span>
          <ArrowRight size={16} className="cat-arrow" />
        </div>
      </div>
    </Link>
  );
}
