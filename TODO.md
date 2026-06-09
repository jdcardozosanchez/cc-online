# TODO — C&C online

**This is the one place all to-dos live.** Not in your head, not in chat, not in five files.
One list. Claude reads this too, so it always knows what's next.

**Three rules:**
1. New task? It goes here. Finished a task? Move it to **Done**.
2. Sort by priority into **Now / Next / Later** — not by when you thought of it.
3. Tag anything that touches money or customer data with 🔴 — that means *plan it before
   building it* (see the danger map in START-HERE.md). Everything else is 🟢, just build it.

Keep each item short and concrete: a thing you could actually start.

> ℹ️ **Cambio de rumbo (2026-06-03):** la tienda es un **catálogo** sin precios; las ventas se
> cierran por **WhatsApp**. Eso elimina pagos en línea (Wompi), cuentas y pedidos en BD. Con ello
> casi no quedan zonas 🔴: el proyecto se volvió mucho más simple.

---

## 🔥 Now (this session / next session)
- [ ] 🟢 Revisar el catálogo en pantalla y avisar si algún nombre quedó raro tras la limpieza.
- [ ] 🟢 Probar el flujo completo: añadir al carrito → "Ir a facturar" / "Seguir comprando" →
      enviar pedido por WhatsApp.

## ⏭️ Next (soon, once "Now" is solid)
- [ ] 🟢 Fotos reales de los productos (hoy hay un placeholder con ícono por categoría).
- [ ] 🟢 Deploy en **Cloudflare Pages** (sitio estático) para que la familia y los clientes lo vean
      en vivo. El export ya funciona (`output: "export"` → carpeta `out/`); falta conectar el repo en
      Cloudflare con build `npm run build` y output `out`.
- [ ] 🟢 Logo definitivo: el chat de diseño quedó iterando el símbolo (faro/farola). Hoy uso el
      isotipo creciente del kit; confirmar la pieza final cuando se decida.

## 🌙 Later (real, but not yet)
- [ ] 🟢 Panel para que la familia edite el catálogo sin tocar código (o seguir vía CSV + script).
- [ ] 🟢 Mover el catálogo a Supabase si el CSV se queda corto (muchos cambios, varias personas).
- [ ] ⏸️ Pagos en línea con Wompi — **descartado por ahora** (se vende por WhatsApp). Retomar solo
      si el negocio lo pide; sería 🔴 y con sesión dedicada + docs oficiales.

## ✅ Done
- [x] Número real de WhatsApp de ventas configurado en `lib/config.ts` (`573142976606`). El canal
      usa enlaces wa.me (click-to-chat): NO requiere API de Meta ni verificación de empresa.
- [x] Next.js app scaffolded and running locally (TS + Tailwind + App Router)
- [x] Repo + git + working docs (CLAUDE / DECISIONS / NOTES / PLAN / TODO)
- [x] Homepage, catalog grid, and single product detail page (404 on unknown product)
- [x] Shopping cart (add, view, change quantities, remove) — browser-only
- [x] Site layout: header with logo + live cart count, footer
- [x] Catálogo real cargado: 170 autopartes desde el Excel → `data/productos-origen.csv` +
      `scripts/generar-productos.mjs` → `lib/products.ts` (con códigos y nombres profesionales)
- [x] Tienda SIN precios + flujo de venta por WhatsApp (botón por producto y envío del carrito)
- [x] **Design system de marca aplicado** (Cabinas y Conjuntos): paleta grafito + ámbar señal
      ("LUZ OFICIAL"), tipografía Archivo + Spline Sans Mono, header fijo + logo/isotipo, footer
      grafito, FAB de WhatsApp, tarjetas de producto, sellos (Marcopolo/DER/IZQ), íconos Lucide
      (reemplazan emojis) y registro "usted". Referencia en `design-system/`.
- [x] Buscar y filtrar el catálogo (texto + categoría + lado DER/IZQ + Marcopolo)

---

> 💡 When this list starts feeling cramped (lots of items, hard to scan), that's the signal you've
> "leveled up" — *then* you can add more structure (sub-sections per area, etc.). Not before.
> The list grows to fit the project; the project doesn't bend to fit a fancy list.
