import Link from "next/link";
import { notFound } from "next/navigation";
import { getProducto } from "@/lib/products";
import { formatearCOP } from "@/lib/format";
import { AddToCartButton } from "@/components/AddToCartButton";

// Detalle de un producto. El "id" viene de la URL: /productos/cafe
// En Next.js 16, "params" llega como una promesa, por eso usamos "await".
export default async function ProductoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const producto = getProducto(id);

  // Si el id no existe, mostramos la página 404 estándar de Next.
  if (!producto) notFound();

  return (
    <article className="grid sm:grid-cols-2 gap-8 items-start">
      <div
        className="aspect-square rounded-xl flex items-center justify-center text-8xl"
        style={{ backgroundColor: producto.color }}
      >
        {producto.emoji}
      </div>
      <div>
        <Link href="/productos" className="text-sm text-stone-500 hover:text-amber-700">
          ← Volver a productos
        </Link>
        <h1 className="text-3xl font-bold mt-2">{producto.nombre}</h1>
        <p className="text-2xl font-semibold mt-2">{formatearCOP(producto.precio)}</p>
        <p className="text-stone-600 mt-4">{producto.descripcion}</p>
        <div className="mt-8">
          <AddToCartButton producto={producto} />
        </div>
      </div>
    </article>
  );
}
