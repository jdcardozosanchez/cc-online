// generate-sitemap.js
// Corre con: node generate-sitemap.js
// Genera public/sitemap.xml a partir de las páginas en out/

const fs = require("fs");
const path = require("path");

const SITE_URL = "https://cabinasyconjuntos.com";
const OUT_DIR = path.join(__dirname, "out");
const OUTPUT_FILE = path.join(__dirname, "public", "sitemap.xml");

// Páginas a excluir del sitemap
const EXCLUDE = new Set(["404", "_not-found"]);

function getPages(dir, base = "") {
  const pages = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      // Ignorar carpetas internas de Next.js
      if (entry.name.startsWith("_next")) continue;
      pages.push(...getPages(path.join(dir, entry.name), `${base}/${entry.name}`));
    } else if (entry.name.endsWith(".html")) {
      // Este build exporta archivos planos (productos.html, far-001.html),
      // no carpetas con index.html. Derivamos la ruta del nombre del archivo.
      const name = entry.name.replace(/\.html$/, "");
      // "index" representa la home de su carpeta; el resto es un segmento más.
      const route = name === "index" ? base || "/" : `${base}/${name}`;
      const segment = route === "/" ? "index" : route.split("/").pop();
      if (!EXCLUDE.has(segment)) {
        pages.push(route);
      }
    }
  }
  return pages;
}

// Prioridad según profundidad/tipo de ruta
function getPriority(route) {
  if (route === "/") return "1.0";
  if (route === "/productos") return "0.9";
  if (route.startsWith("/productos/categoria/")) return "0.8";
  if (route.startsWith("/productos/")) return "0.7";
  return "0.5";
}

function getChangefreq(route) {
  if (route === "/" || route === "/productos") return "weekly";
  if (route.startsWith("/productos/categoria/")) return "weekly";
  return "monthly";
}

const pages = getPages(OUT_DIR).sort();
const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

// Crear carpeta public si no existe
if (!fs.existsSync(path.join(__dirname, "public"))) {
  fs.mkdirSync(path.join(__dirname, "public"));
}

fs.writeFileSync(OUTPUT_FILE, xml, "utf-8");
console.log(`✅ Sitemap generado con ${pages.length} URLs → ${OUTPUT_FILE}`);
console.log(`\nURLs incluidas:`);
pages.forEach((p) => console.log(`  ${SITE_URL}${p}`));
