// Tarjeta de un producto en la lista. Al hacer clic, va al detalle.
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatearCOP } from "@/lib/format";

export function ProductCard({ producto }: { producto: Product }) {
  return (
    <Link
      href={`/productos/${producto.id}`}
      className="group block rounded-xl border border-stone-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Imagen de relleno por ahora (un emoji sobre un color). */}
      <div
        className="aspect-square flex items-center justify-center text-6xl"
        style={{ backgroundColor: producto.color }}
      >
        {producto.emoji}
      </div>
      <div className="p-4">
        <h3 className="font-medium group-hover:text-amber-700">{producto.nombre}</h3>
        <p className="text-stone-500 text-sm mt-1 line-clamp-2">{producto.descripcion}</p>
        <p className="mt-2 font-semibold">{formatearCOP(producto.precio)}</p>
      </div>
    </Link>
  );
}
