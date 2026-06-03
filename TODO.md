# TODO — C&C online

> Única fuente de verdad de las tareas. Simple a propósito.
> 🔴 = toca dinero, cuentas o pedidos → planear antes de construir.
> El mapa completo del proyecto vive en `PLAN.md`; aquí está lo accionable.

## Ahora (lo siguiente a decidir)
- [ ] Arquitecto revisa el Tramo 1 en pantalla (http://localhost:3000) y da visto bueno.
- [ ] Decidir el próximo paso: **(a)** pulir el aspecto/textos/productos, o **(b)** empezar Fase 2.

## Próximo
- [ ] 🔴 **Fase 2 — Productos reales en Supabase** (base de datos, solo lectura). Reemplaza
      `lib/products.ts`. Planear antes: dónde viven los datos, quién puede leerlos.

## Más adelante (por fase, en orden)
- [ ] 🔴 **Fase 3 — Cuentas de clientes** (Supabase Auth): quién ve qué, dónde viven los datos.
- [ ] 🔴 **Fase 4 — Pedidos e inventario**: un pedido nunca se pierde ni se duplica.
- [ ] 🔴🔴 **Fase 5 — Pagos con Wompi**: SOLO con la doc oficial pegada. Webhook + verificación
      de firma = corazón antifraude.
- [ ] 🔴 **Fase 6 — Despliegue** (Vercel) + monitoreo básico.

## Hecho
- [x] Fase 0 — Repo + git + documentos de trabajo.
- [x] Tramo 1 — Esqueleto en pantalla: inicio, catálogo, detalle (404 en id inexistente),
      carrito en el navegador con tope de cantidad ≥ 1. Productos de prueba en `lib/products.ts`.
