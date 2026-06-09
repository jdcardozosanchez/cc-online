// Utilidades de categorías para el catálogo en dos niveles (lista → categoría).
// Vive aparte porque `products.ts` es auto-generado y no se edita a mano.
import { productos, categorias } from "./products";
import type { Product } from "./products";

// Nombre de categoría → slug seguro para URL (sin acentos, minúsculas).
// Ej.: "Pistón" → "piston", "Cerrajería" → "cerrajeria".
export function categoriaSlug(cat: string): string {
  return cat
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // quita acentos (marcas diacríticas)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Slug → nombre de categoría. undefined si el slug no corresponde a ninguna.
export function categoriaPorSlug(slug: string): string | undefined {
  return categorias.find((c) => categoriaSlug(c) === slug);
}

// Todos los productos de una categoría, en el orden del catálogo.
export function productosDeCategoria(cat: string): Product[] {
  return productos.filter((p) => p.categoria === cat);
}

// Lista de categorías con su slug y su número de referencias (para las tarjetas
// del nivel 1). Respeta el orden de `categorias`.
export type CategoriaInfo = { nombre: string; slug: string; total: number };

export function listaCategorias(): CategoriaInfo[] {
  return categorias.map((nombre) => ({
    nombre,
    slug: categoriaSlug(nombre),
    total: productos.filter((p) => p.categoria === nombre).length,
  }));
}
