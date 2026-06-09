import { notFound } from "next/navigation";
import { categorias } from "@/lib/products";
import {
  categoriaSlug,
  categoriaPorSlug,
  productosDeCategoria,
} from "@/lib/categorias";
import { CategoryBrowser } from "@/components/CategoryBrowser";

// En modo estático, pre-generamos una página por cada categoría.
export function generateStaticParams() {
  return categorias.map((c) => ({ slug: categoriaSlug(c) }));
}

// Página del nivel 2: productos de una categoría. params llega como promesa en Next 16.
export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoria = categoriaPorSlug(slug);
  if (!categoria) notFound();

  return (
    <CategoryBrowser categoria={categoria} items={productosDeCategoria(categoria)} />
  );
}
