// Tarjeta de un producto en la lista. Al hacer clic, va al detalle.
// Sin precio: la tienda es un catálogo (se cotiza/compra por WhatsApp).
import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ producto }: { producto: Product }) {
  return (
    <Link
      href={`/productos/${producto.id}`}
      className="group block rounded-xl border border-stone-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Imagen de relleno por ahora (un emoji sobre un color por categoría). */}
      <div
        className="aspect-square flex items-center justify-center text-6xl"
        style={{ backgroundColor: producto.color }}
      >
        {producto.emoji}
      </div>
      <div className="p-4">
        <span className="text-xs font-mono text-stone-400">{producto.codigo}</span>
        <h3 className="font-medium group-hover:text-amber-700 leading-snug">
          {producto.nombre}
        </h3>
        <span className="inline-block mt-2 text-xs bg-stone-100 text-stone-600 rounded-full px-2 py-0.5">
          {producto.categoria}
        </span>
      </div>
    </Link>
  );
}
