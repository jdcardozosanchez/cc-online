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

// --- Configuración por categoría: prefijo de código + nombre legible.
// (El ícono visual lo pone la UI con Lucide; aquí no usamos emojis — design system.)
const CATEGORIAS = {
  FAROL: { pre: "FAR", nombre: "Farol" },
  STOP: { pre: "STP", nombre: "Stop" },
  TERCER: { pre: "STP", nombre: "Stop" },
  CONJUNTO: { pre: "STP", nombre: "Stop" },
  LUZ: { pre: "LUZ", nombre: "Luz" },
  ESQUINERO: { pre: "ESQ", nombre: "Esquinero" },
  ESPEJO: { pre: "ESP", nombre: "Espejo" },
  EXPLORADORA: { pre: "EXP", nombre: "Exploradora" },
  DIRECCIONAL: { pre: "DIR", nombre: "Direccional" },
  CONECTOR: { pre: "CON", nombre: "Conector" },
  ALETA: { pre: "ALE", nombre: "Aleta" },
  CERRADURA: { pre: "CER", nombre: "Cerrajería" },
  CHAPA: { pre: "CER", nombre: "Cerrajería" },
  LLAVE: { pre: "CER", nombre: "Cerrajería" },
  MANIJA: { pre: "MAN", nombre: "Manija" },
  PISTON: { pre: "PIS", nombre: "Pistón" },
  REFLECTIVO: { pre: "REF", nombre: "Reflectivo" },
  // Categorías de la línea de CAMIÓN (Hino, Isuzu, Chevrolet, JMC, Canter…).
  FARO: { pre: "FAR", nombre: "Farol" }, // variante de "FAROL"
  PUNTERA: { pre: "FAR", nombre: "Farol" }, // puntera de farol → va con Faroles
  BOMPER: { pre: "BOM", nombre: "Bómper" },
  PERSIANA: { pre: "PER", nombre: "Persiana" },
  ESTRIBO: { pre: "EST", nombre: "Estribo" },
  PANEL: { pre: "PAN", nombre: "Panel" },
  PEDAL: { pre: "PED", nombre: "Pedal" },
};

// Vehículos de CAMIÓN (la lista nueva). El orden importa: los más específicos
// primero ("Hino Dutro 300" antes que "Hino 300"). Ninguno es Marcopolo.
const CAMIONES = [
  { match: "HINO DUTRO 300", label: "Hino Dutro 300" },
  { match: "HINO 500 FC", label: "Hino 500 FC" },
  { match: "HINO 500", label: "Hino 500" },
  { match: "HINO 300", label: "Hino 300" },
  { match: "ISUZU NPR", label: "Isuzu NPR" },
  { match: "CHEVROLET REWARD", label: "Chevrolet Reward" },
  { match: "REWARD", label: "Chevrolet Reward" },
  { match: "CHEVROLET F", label: "Chevrolet FRR" },
  { match: "JMC", label: "JMC" },
  { match: "CANTER", label: "Mitsubishi Canter" },
  { match: "FRR", label: "Isuzu FRR" },
];

// Detecta el vehículo de camión en la descripción cruda (en MAYÚSCULAS).
function detectarCamion(crudo) {
  const u = crudo.toUpperCase();
  for (const c of CAMIONES) if (u.includes(c.match)) return c;
  return null;
}

// Carrocerías reconocibles (orden importa: "New G7" antes que "G7").
// Cada una con su forma de visualización. Las de Marcopolo Superpolo se marcan.
const CARROCERIAS = [
  { match: "NEW G7", label: "New G7", marcopolo: true },
  { match: "G8", label: "G8", marcopolo: true },
  { match: "G7", label: "G7", marcopolo: true },
  { match: "G6", label: "G6", marcopolo: true },
  { match: "PARADISO", label: "Paradiso", marcopolo: true },
  { match: "ANDARE", label: "Andare", marcopolo: true },
  { match: "SENIOR", label: "Senior", marcopolo: true },
  { match: "TORINO", label: "Torino (BRT)", marcopolo: true },
  { match: "AUDACE", label: "Audace", marcopolo: false },
  { match: "ATLANTIS", label: "Atlantis", marcopolo: false },
  { match: "ORION", label: "Orion", marcopolo: false },
  { match: "MAXI IBIZA", label: "Maxi Ibiza", marcopolo: false },
  { match: "IBIZA", label: "Ibiza", marcopolo: false },
  { match: "FASCCINO", label: "Fasccino", marcopolo: false },
  { match: "MAJESTIC", label: "Majestic", marcopolo: false },
  { match: "MODASA", label: "Modasa", marcopolo: false },
  { match: "SIGMA", label: "Sigma", marcopolo: false },
  { match: "YUTONG", label: "Yutong", marcopolo: false },
  { match: "INVICAR", label: "Invicar", marcopolo: false },
  { match: "INCONCAR", label: "Inconcar", marcopolo: false },
  { match: "BUSSCAR", label: "Busscar", marcopolo: false },
  { match: "EUROCITY", label: "Eurocity", marcopolo: false },
  { match: "MEGABUSES", label: "Megabuses", marcopolo: false },
];

// Detecta la carrocería en la descripción cruda (en MAYÚSCULAS).
function detectarCarroceria(crudo) {
  const u = crudo.toUpperCase();
  for (const c of CARROCERIAS) if (u.includes(c.match)) return c;
  return null;
}

// Detecta atributos técnicos para los metadatos / badges de la ficha.
function detectarAttrs(crudo) {
  const u = crudo.toUpperCase();
  const attrs = [];
  if (u.includes("FULL LED")) attrs.push("Full LED");
  else if (/\bLED\b/.test(u)) attrs.push("LED");
  if (/24\s?V/.test(u)) attrs.push("24V");
  else if (/12\s?V/.test(u)) attrs.push("12V");
  if (u.includes("CALEFACCION")) attrs.push("Calefacción");
  if (u.includes("ELECTRICO")) attrs.push("Eléctrico");
  if (u.includes("GENERICO") || u.includes("GENERICA")) attrs.push("Genérico");
  return attrs;
}

// Tokens que deben quedar en MAYÚSCULA tal cual (modelos, tecnología, voltaje…).
const MAYUS = new Set([
  "G6", "G7", "G8", "LED", "24V", "12V", "JGB", "BRT", "AGA", "URB",
  // Modelos, siglas y unidades de la línea de camión.
  "FC", "NPR", "FRR", "JMC", "N/F", "MM", "CM", "MAX", "SUP", "X",
]);

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
  BOMPER: "Bómper", // el Excel lo escribe sin tilde
};

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

  const salida = [];
  for (const palabra of s.split(" ")) {
    const up = palabra.toUpperCase();
    // Retiramos el lado del nombre: la tienda ya no distingue DER/IZQ (una sola referencia).
    if (["DER", "DERECHO", "DERECHA", "DCHO", "IZQ", "IZQUIERDO", "IZQUIERDA"].includes(up)) {
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

  return salida.join(" ").replace(/\s+/g, " ").trim();
}

// --- Leer el CSV.
const filas = readFileSync(new URL("../data/productos-origen.csv", import.meta.url), "utf8")
  .trim()
  .split("\n")
  .slice(1); // saltar encabezado

const contador = {}; // para numerar los códigos por prefijo
const productos = [];
const nombresVistos = new Set(); // una sola referencia por nombre (fusiona los antiguos DER/IZQ)

for (const fila of filas) {
  const col = fila.split(";");
  let desc = (col[2] || "").trim();
  if (!desc) continue;

  const primera = desc.split(/\s+/)[0].toUpperCase();
  const cat = CATEGORIAS[primera] || { pre: "GEN", nombre: "General" };

  const nombre = limpiarNombre(desc);

  // Antes cada pieza venía dos veces (lado derecho e izquierdo). Ahora queremos UNA
  // referencia por nombre: si ya la vimos, saltamos este duplicado.
  const clave = nombre.toUpperCase();
  if (nombresVistos.has(clave)) continue;
  nombresVistos.add(clave);

  contador[cat.pre] = (contador[cat.pre] || 0) + 1;
  const codigo = `${cat.pre}-${String(contador[cat.pre]).padStart(3, "0")}`;

  // Primero buscamos carrocería de bus; si no hay, un vehículo de camión.
  const carro = detectarCarroceria(desc);
  const camion = carro ? null : detectarCamion(desc);
  const attrs = detectarAttrs(desc);

  // El campo `carroceria` guarda la etiqueta del vehículo (bus o camión).
  let vehiculo = "";
  let dondeVa = " para carrocería de bus";
  if (carro) {
    vehiculo = carro.label;
    dondeVa = ` para carrocería ${carro.label}`;
  } else if (camion) {
    vehiculo = camion.label;
    dondeVa = ` para camión ${camion.label}`;
  }
  const descripcion = `${cat.nombre}${dondeVa}. Repuesto disponible por unidad. Referencia ${codigo}.`;

  productos.push({
    id: codigo.toLowerCase(),
    codigo,
    nombre,
    descripcion,
    categoria: cat.nombre,
    carroceria: vehiculo,
    attrs,
    marcopolo: carro ? carro.marcopolo : false,
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
  categoria: string;   // p. ej. "Farol", "Stop" (define el ícono y el filtro)
  carroceria: string;  // p. ej. "G8", "Paradiso" o "" si no aplica
  attrs: string[];     // metadatos técnicos: ["Full LED", "24V", ...]
  marcopolo: boolean;  // pertenece a una carrocería Marcopolo Superpolo
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
