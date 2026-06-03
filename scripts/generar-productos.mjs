// ─────────────────────────────────────────────────────────────────────────────
// Generador del catálogo.
// Lee  data/productos-origen.csv  (los datos crudos del Excel) y escribe
// lib/products.ts  (el catálogo que usa la tienda).
//
// La tienda NO maneja precios → aquí IGNORAMOS a propósito las columnas de precio.
//
// Para regenerar tras cambiar el CSV:   node scripts/generar-productos.mjs
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, writeFileSync } from "node:fs";

// --- Configuración por categoría: prefijo de código, nombre legible, emoji y color.
const CATEGORIAS = {
  FAROL: { pre: "FAR", nombre: "Farol", emoji: "🔦", color: "#dfe7f0" },
  STOP: { pre: "STP", nombre: "Stop", emoji: "🛑", color: "#f3d9d9" },
  TERCER: { pre: "STP", nombre: "Stop", emoji: "🛑", color: "#f3d9d9" },
  CONJUNTO: { pre: "STP", nombre: "Stop", emoji: "🛑", color: "#f3d9d9" },
  LUZ: { pre: "LUZ", nombre: "Luz", emoji: "💡", color: "#f6efcf" },
  ESQUINERO: { pre: "ESQ", nombre: "Esquinero", emoji: "📐", color: "#e3e0d8" },
  ESPEJO: { pre: "ESP", nombre: "Espejo", emoji: "🪞", color: "#dce8e8" },
  EXPLORADORA: { pre: "EXP", nombre: "Exploradora", emoji: "🔆", color: "#eee2cf" },
  DIRECCIONAL: { pre: "DIR", nombre: "Direccional", emoji: "➡️", color: "#e8ddf0" },
  CONECTOR: { pre: "CON", nombre: "Conector", emoji: "🔌", color: "#dfe9df" },
  ALETA: { pre: "ALE", nombre: "Aleta", emoji: "🛞", color: "#e9e4d6" },
  CERRADURA: { pre: "CER", nombre: "Cerrajería", emoji: "🔑", color: "#e6ddd2" },
  CHAPA: { pre: "CER", nombre: "Cerrajería", emoji: "🔑", color: "#e6ddd2" },
  LLAVE: { pre: "CER", nombre: "Cerrajería", emoji: "🔑", color: "#e6ddd2" },
  MANIJA: { pre: "MAN", nombre: "Manija", emoji: "🚪", color: "#e0e0e0" },
  PISTON: { pre: "PIS", nombre: "Pistón", emoji: "⚙️", color: "#dcdcdc" },
  REFLECTIVO: { pre: "REF", nombre: "Reflectivo", emoji: "🔶", color: "#f2e3cf" },
};

// Tokens que deben quedar en MAYÚSCULA tal cual (modelos, tecnología, voltaje…).
const MAYUS = new Set(["G6", "G7", "G8", "LED", "24V", "12V", "JGB", "BRT", "AGA", "URB"]);

// Palabras de enlace que en español van en minúscula (nunca son la primera palabra aquí).
const MINUS = new Set(["Y", "DE", "CON", "SIN", "A", "PARA", "LA", "EL", "LOS", "LAS", "DEL", "EN", "POR", "O", "U"]);

// Correcciones de errores de digitación del archivo original (palabra → palabra).
const TYPOS = {
  POCICION: "Posición",
  FONTAL: "Frontal",
  PEQÑA: "Pequeña",
  GENERICO: "Genérico",
  GENERICA: "Genérica",
  ELECTRICO: "Eléctrico",
  CALEFACCION: "Calefacción",
  DIA: "Día",
  CARROCERIA: "Carrocería",
  PEQUEÑO: "Pequeño",
};

// Correcciones del lado para los duplicados que el dueño confirmó (por número de fila):
// 99/100 esquinero G8 y 119/120 exploradora G7 → uno derecho y uno izquierdo.
const LADO_FORZADO = { 100: "izq", 120: "izq" };

function titleCase(palabra) {
  if (palabra.length === 0) return palabra;
  return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
}

// Convierte la descripción "a mano" en un nombre profesional y limpio.
function limpiarNombre(crudo) {
  let s = " " + crudo.trim().replace(/\s+/g, " ") + " ";

  // Arreglos de varias palabras / símbolos.
  s = s.replace(/\bC\/\s?LUZ\b/gi, "con luz");
  s = s.replace(/\bS\/\s?LUZ\b/gi, "sin luz");
  s = s.replace(/\bF\s+GRIS\b/gi, "fondo gris");
  s = s.replace(/IZQ\/DO/gi, "IZQ");
  s = s.replace(/\*/g, " ");
  s = s.replace(/\s+/g, " ").trim();

  let lado = "";
  const salida = [];
  for (const palabra of s.split(" ")) {
    const up = palabra.toUpperCase();
    // Detectar y retirar el lado (lo agregamos al final como frase).
    if (["DER", "DERECHO", "DERECHA", "DCHO"].includes(up)) {
      lado = "der";
      continue;
    }
    if (["IZQ", "IZQUIERDO", "IZQUIERDA"].includes(up)) {
      lado = "izq";
      continue;
    }
    if (MAYUS.has(up)) {
      salida.push(up);
    } else if (MINUS.has(up)) {
      salida.push(palabra.toLowerCase());
    } else if (TYPOS[up]) {
      salida.push(TYPOS[up]);
    } else if (/^\d/.test(palabra) || /mm$/i.test(palabra)) {
      // Medidas y números: dejar como están (p. ej. 155, 552, mm, 85).
      salida.push(palabra.toLowerCase() === "mm" ? "mm" : palabra);
    } else {
      salida.push(titleCase(palabra));
    }
  }

  let nombre = salida.join(" ").replace(/\s+/g, " ").trim();
  return { nombre, lado };
}

const ladoFrase = { der: " — Lado derecho", izq: " — Lado izquierdo", "": "" };
const ladoTexto = { der: "lado derecho", izq: "lado izquierdo", "": "" };

// --- Leer el CSV.
const filas = readFileSync(new URL("../data/productos-origen.csv", import.meta.url), "utf8")
  .trim()
  .split("\n")
  .slice(1); // saltar encabezado

const contador = {}; // para numerar los códigos por prefijo
const productos = [];

for (const fila of filas) {
  const col = fila.split(";");
  const num = Number(col[0]);
  let desc = (col[2] || "").trim();
  if (!desc) continue;

  const primera = desc.split(/\s+/)[0].toUpperCase();
  const cat = CATEGORIAS[primera] || {
    pre: "GEN",
    nombre: "General",
    emoji: "📦",
    color: "#e5e5e5",
  };

  let { nombre, lado } = limpiarNombre(desc);
  if (LADO_FORZADO[num]) lado = LADO_FORZADO[num]; // corregir duplicados confirmados

  const nombreFinal = nombre + ladoFrase[lado];

  contador[cat.pre] = (contador[cat.pre] || 0) + 1;
  const codigo = `${cat.pre}-${String(contador[cat.pre]).padStart(3, "0")}`;

  const ladoStr = ladoTexto[lado] ? ` (${ladoTexto[lado]})` : "";
  const descripcion = `${cat.nombre} para carrocería de bus${ladoStr}. Repuesto disponible por unidad. Referencia ${codigo}.`;

  productos.push({
    id: codigo.toLowerCase(),
    codigo,
    nombre: nombreFinal,
    descripcion,
    categoria: cat.nombre,
    emoji: cat.emoji,
    color: cat.color,
  });
}

// --- Escribir lib/products.ts
const categoriasUnicas = [...new Set(productos.map((p) => p.categoria))];

const cuerpo = `// ─────────────────────────────────────────────────────────────────────────────
// ARCHIVO AUTO-GENERADO — no editar a mano.
// Fuente: data/productos-origen.csv   |   Generador: scripts/generar-productos.mjs
// Para actualizar el catálogo: cambia el CSV y corre  node scripts/generar-productos.mjs
//
// La tienda es un CATÁLOGO: aquí NO hay precios (las ventas se cierran por WhatsApp).
// ─────────────────────────────────────────────────────────────────────────────

export type Product = {
  id: string;          // va en la URL (= código en minúscula)
  codigo: string;      // código visible, p. ej. FAR-001
  nombre: string;
  descripcion: string;
  categoria: string;
  emoji: string;       // imagen de relleno por ahora (luego, fotos reales)
  color: string;       // color de fondo de la tarjeta
};

export const categorias: string[] = ${JSON.stringify(categoriasUnicas)};

export const productos: Product[] = ${JSON.stringify(productos, null, 2)};

// Busca un producto por su id (= código en minúscula). undefined si no existe.
export function getProducto(id: string): Product | undefined {
  return productos.find((p) => p.id === id);
}
`;

writeFileSync(new URL("../lib/products.ts", import.meta.url), cuerpo, "utf8");
console.log(`✅ Generados ${productos.length} productos en lib/products.ts`);
console.log(`   Categorías: ${categoriasUnicas.join(", ")}`);
