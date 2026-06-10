# Decisions Log — C&C online

One entry every time we make a real choice. Keep it short: **what** we decided and **why**.
This is your high-level understanding, made permanent — and Claude reads it so it won't
quietly contradict past choices.

Format:
```
## YYYY-MM-DD — Short title
**Decision:** what we chose.
**Why:** the reason, in plain language.
**Alternatives considered:** (optional) what we said no to, and why.
```

---

## 2026-06-03 — Tech stack
**Decision:** Next.js for the site, Supabase for database/accounts/storage, Wompi for payments.
**Why:** Next.js + Supabase are popular and well-documented, so Claude is a reliable guide on them.
Wompi because the business already banks with Bancolombia.
**Alternatives considered:** Stripe (more familiar to Claude, but not a fit for a Colombian
business / Bancolombia relationship). Note: because Wompi is less common, always work from its
official docs, never from Claude's memory.

## 2026-06-03 — Detalles del stack del Tramo 1 (esqueleto)
**Decision:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + React 19. Productos de
prueba en un archivo local (`lib/products.ts`). Carrito guardado en el navegador (`localStorage`),
sin servidor todavía.
**Why:** Opciones estándar y muy documentadas → Claude es mejor guía. Datos y carrito locales nos
dejan ver la tienda en pantalla sin tocar base de datos ni dinero (todo reversible).
**Alternatives considered:** Guardar el carrito en el servidor desde ya (lo aplazamos hasta tener
Pedidos/Pagos; por ahora es complejidad innecesaria).

## 2026-06-03 — La tienda es un catálogo; las ventas se cierran por WhatsApp
**Decision:** El sitio NO muestra precios ni cobra en línea. Es un catálogo de autopartes; el
carrito arma un mensaje con los productos (código, nombre, cantidad) y lo envía al WhatsApp de
ventas para cerrar ahí. El número se configura en un solo lugar: `lib/config.ts`.
**Why:** Así lo quiere el negocio: la atención y el cierre son personales por WhatsApp. Esto
**elimina Wompi/pagos en línea** y, con ello, toda la zona de mayor riesgo (fraude de pagos),
además de cuentas de clientes y pedidos en base de datos (por ahora innecesarios).
**Alternatives considered:** Pagos en línea con Wompi (descartado por ahora; se puede retomar más
adelante si el negocio lo pide).

## 2026-06-03 — Catálogo real generado desde el Excel del negocio
**Decision:** 170 autopartes (iluminación/carrocería de bus) cargadas. Datos crudos en
`data/productos-origen.csv`; un script (`scripts/generar-productos.mjs`) limpia los nombres a
forma profesional, corrige typos, asigna un código por categoría (FAR/STP/LUZ/…) y genera
`lib/products.ts`. Para actualizar el catálogo se edita el CSV y se vuelve a correr el script.
**Why:** Mantener una sola fuente de verdad (el CSV) y una generación repetible y revisable, en
vez de editar 170 productos a mano.
**Pendiente:** filas 99/100 y 119/120 venían duplicadas en el Excel; el dueño confirmó que es una
derecha y una izquierda, ya corregidas en el generador.

## 2026-06-03 — Identidad de marca y design system "Cabinas y Conjuntos"
**Decision:** Se adoptó el design system de marca recibido desde Claude Design (handoff
"cabinas-y-conjuntos-design-system"). La marca es **Cabinas y Conjuntos** (C&C). Concepto visual
**"LUZ OFICIAL"**: base grafito + acento ámbar señal; tipografía **Archivo** (sans) + **Spline
Sans Mono** (datos técnicos); registro **usted**; **sin emojis** en UI (íconos **Lucide**); CTA
dominante **"Cotizar por WhatsApp"**; filtros **DER/IZQ** obligatorios; **sin precios**. Copy:
**"Distribuidores autorizados"** (NO "repuestos oficiales"). Tokens y componentes en `app/globals.css`;
referencia del kit en `design-system/`.
**Why:** El negocio encargó la identidad; implementarla da una tienda profesional y coherente.
**Pendiente:** el logo definitivo seguía en iteración en el chat de diseño (símbolo faro/farola);
hoy se usa el isotipo creciente del kit hasta que se fije la pieza final.

## 2026-06-08 — Despliegue: Cloudflare Pages como sitio estático (no Vercel)
**Decision:** Publicar la tienda en **Cloudflare Pages** como **export 100% estático**
(`output: "export"` en `next.config.ts` → `next build` genera la carpeta `out/`). Para que el
export funcione, la ruta dinámica `app/productos/[id]/page.tsx` ahora declara
`generateStaticParams` (lista los 170 `id` para pre-generar una página por producto).
**Why:** El sitio hoy no tiene base de datos, ni rutas de servidor, ni "server actions" — es un
catálogo estático con el carrito en el navegador. Así que no necesita servidor encendido: se puede
servir como archivos planos, lo más barato, rápido y difícil de romper. El dueño prefiere la red de
Cloudflare. Vercel era solo "cero configuración por ser de los creadores de Next", no un requisito.
**Config de Cloudflare Pages (al conectar el repo):** Build command `npm run build`; Output
directory `out`. No se sube `out/` al repo (ya está en `.gitignore`); Cloudflare lo reconstruye.
**Aclaración importante:** Supabase NO es un hosting; es la base de datos. No compite con Vercel/
Cloudflare. Se deja para la Fase 6 (panel para que la familia edite el catálogo), no para el deploy.
**Alternatives considered:** Vercel (descartado por preferencia de red Cloudflare); Cloudflare con
adaptador OpenNext (innecesario hoy: sin funciones de servidor, el export estático sobra).

## 2026-06-09 — Catálogo en dos niveles (navegación por categorías, estilo Fredmo)
**Decision:** `/productos` ya no es una grilla plana de las 170 referencias. Ahora es un catálogo
en **dos niveles**: el nivel 1 (`/productos`) muestra **tarjetas de categoría** (13) y el nivel 2
(`/productos/categoria/[slug]`) muestra solo los productos de esa categoría, con filtros DER/IZQ y
Marcopolo. Se **conserva el buscador global** en el nivel 1: sin texto se ven las categorías; al
escribir (o activar un filtro) cambia a una grilla de resultados de todas las categorías.
**Why:** Mejor experiencia para el tipo de usuario (comprador de autopartes con intención clara,
mucho móvil): no abruma con 170 productos de golpe, páginas más livianas, y refleja cómo busca la
gente ("voy a Faroles"). Referencia visual: fredmo.com/productos. El buscador global evita el clic
extra para quien ya sabe la referencia exacta.
**Detalles técnicos:** ayudantes de categoría en `lib/categorias.ts` (slug sin acentos, conteo) —
aparte porque `lib/products.ts` es auto-generado; componentes `CategoryCard` (nivel 1) y
`CategoryBrowser` (nivel 2). El export estático genera las 13 páginas de categoría vía
`generateStaticParams`.
**Alternatives considered:** una sola página con secciones por categoría (más scroll, más pesada en
móvil); híbrido con índice + secciones. Se eligió dos niveles por claridad y rendimiento.

## 2026-06-09 — Home de una sola tira (scroll) + menú Inicio/Producto/Nosotros
**Decision:** La home pasa a ser una **página de una sola tira** con tres secciones que se
recorren bajando: `#inicio` (hero), `#producto` (las 13 categorías/clusters como tarjetas) y
`#nosotros` (quiénes somos). El header tiene un **menú** (Inicio · Producto · Nosotros) que salta a
cada sección con scroll suave (rutas con ancla `/#seccion`); se conserva el acceso a Cotización.
**Why:** El dueño quería más menús (estilo Fredmo) y una experiencia de "ir deslizando hacia
abajo". La sección Producto muestra los clusters (no los 170 productos sueltos) para no recargar la
página en móvil; cada cluster abre sus productos en su página (catálogo en dos niveles, intacto).
**Bonus:** la sección Nosotros publica datos reales del negocio (razón social, NIT, sede, sello
Marcopolo) tomados de `design-system/brief-marca.md` — útil además para la verificación de empresa
en Meta (que exige un sitio web creíble con datos del negocio).
**Técnico:** `scroll-behavior: smooth` + `scroll-margin-top` para compensar el header fijo.

<!-- Add new decisions below as you make them. -->

## 2026-06-10 — Una sola referencia por nombre (sin lado DER/IZQ)
**Decision:** El catálogo deja de distinguir lado derecho/izquierdo. Las piezas que venían cargadas
dos veces (una DER y una IZQ) se fusionan en **una sola referencia con solo el nombre**. Se quitó el
campo `lado` del producto, los filtros DER/IZQ (catálogo y categoría) y los sellos de lado. Total:
**170 → 112 referencias**. Como hay menos piezas, los **códigos se renumeraron**.
**Why:** El dueño no quiere duplicar cada pieza por lado; se atiende el lado al cotizar por WhatsApp.
Menos ruido en el catálogo y más fácil de mantener.
**Técnico:** La fusión la hace el generador (`scripts/generar-productos.mjs`): limpia el lado del
nombre y descarta nombres repetidos (un `Set`). Para regenerar: `node scripts/generar-productos.mjs`.
