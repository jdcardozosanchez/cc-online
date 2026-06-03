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

<!-- Add new decisions below as you make them. -->
