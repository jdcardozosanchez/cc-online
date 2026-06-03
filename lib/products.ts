// ─────────────────────────────────────────────────────────────────────────────
// Productos de la tienda — POR AHORA SON INVENTADOS (datos de mentira).
// Viven en este archivo a propósito: son fáciles de leer, cambiar y BORRAR
// cuando lleguemos a la Fase 2 (productos reales en Supabase).
// No hay base de datos todavía. Cero riesgo.
// ─────────────────────────────────────────────────────────────────────────────

export type Product = {
  id: string;          // identificador corto y único (va en la URL: /productos/cafe)
  nombre: string;
  precio: number;      // en pesos colombianos (COP), sin decimales
  descripcion: string;
  emoji: string;       // imagen de relleno por ahora (luego serán fotos reales)
  color: string;       // color de fondo de la tarjeta (relleno visual)
};

export const productos: Product[] = [
  {
    id: "cafe",
    nombre: "Café de origen (libra)",
    precio: 28000,
    descripcion: "Café 100% colombiano, tostado artesanalmente. Notas a caramelo y panela.",
    emoji: "☕",
    color: "#e7d8c4",
  },
  {
    id: "panela",
    nombre: "Panela orgánica (kg)",
    precio: 8000,
    descripcion: "Panela pura de trapiche, sin químicos. Endulza con sabor de verdad.",
    emoji: "🟫",
    color: "#e3cdb0",
  },
  {
    id: "miel",
    nombre: "Miel de abejas (500 ml)",
    precio: 22000,
    descripcion: "Miel pura cosechada en finca propia. Sin azúcares añadidos.",
    emoji: "🍯",
    color: "#f3e2b3",
  },
  {
    id: "chocolate",
    nombre: "Chocolate de mesa (500 g)",
    precio: 15000,
    descripcion: "Chocolate para preparar a la taza, con un toque de canela.",
    emoji: "🍫",
    color: "#d8c0a8",
  },
  {
    id: "mermelada-mora",
    nombre: "Mermelada de mora (300 g)",
    precio: 12000,
    descripcion: "Hecha en casa con mora fresca de la región. Poca azúcar, mucho sabor.",
    emoji: "🫐",
    color: "#d9c9e0",
  },
  {
    id: "arequipe",
    nombre: "Arequipe artesanal (250 g)",
    precio: 14000,
    descripcion: "Arequipe cremoso cocido a fuego lento. El de toda la vida.",
    emoji: "🍮",
    color: "#ecd9c0",
  },
];

// Busca un producto por su id. Devuelve undefined si no existe.
export function getProducto(id: string): Product | undefined {
  return productos.find((p) => p.id === id);
}
