# Plan — C&C online

> El mapa del edificio. Arriba, la forma completa (para que como arquitecto veas el todo).
> Abajo, el detalle del **primer tramo**, que es lo único que construimos ahora.
> Regla: planeamos lo irreversible (🔴), y solo construimos. Lo reversible (🟢) lo construyo y lo juzgas en pantalla.

---

> 🔄 **Cambio de rumbo (2026-06-03):** el negocio decidió que la tienda es un **catálogo sin
> precios** y las ventas se cierran por **WhatsApp**. Eso **elimina pagos en línea (Wompi),
> cuentas de clientes y pedidos en BD**. El edificio quedó mucho más pequeño y casi sin zonas 🔴.

## El edificio completo (revisado tras el cambio de rumbo)

| Fase | Qué | Zona | Estado / nota |
|------|-----|------|------------------------|
| 0 | **Cimientos**: repo + git + documentos de trabajo | 🟢 | ✅ hecho |
| 1 | **Esqueleto en pantalla**: tienda navegable | 🟢 | ✅ hecho |
| 2 | **Catálogo real** (170 autopartes desde Excel/CSV, sin precios) | 🟢 | ✅ hecho |
| 3 | **Ventas por WhatsApp**: botón por producto + envío del carrito como pedido | 🟢 | ✅ hecho (falta el número real) |
| 4 | **Buscar/filtrar** el catálogo + **fotos reales** | 🟢 | siguiente |
| 5 | **Despliegue** (Vercel) para verlo en vivo | 🟢 | pendiente |
| 6 | **Panel de catálogo** para la familia (o seguir vía CSV) | 🟢 | más adelante |
| — | ~~Pagos con Wompi~~ / cuentas / pedidos en BD | ⏸️ | **descartado por ahora** (se vende por WhatsApp) |

> No agregamos tests, sistemas de tareas ni abstracciones hasta sentir el dolor que los justifique.

---

## 🟢 Tramo 1 — Esqueleto en pantalla (lo que construimos AHORA)

**Meta:** que abras el navegador y veas una tienda real navegable —inicio, lista de productos, detalle de un producto y un carrito básico— **con productos inventados a mano**. Sin base de datos, sin cuentas, sin pagos. Todo reversible.

**Decisiones técnicas que propongo (todas "aburridas" y estándar, para que yo sea mejor guía):**
- **Next.js** con App Router + **TypeScript** (lo estándar hoy).
- **Tailwind CSS** para estilos (rápido y muy documentado).
- Datos de productos en un archivo local (ej. `lib/products.ts`) — falsos, fáciles de borrar luego.
- Carrito guardado solo en el navegador por ahora (sin servidor).

### Pasos (cada uno termina en un commit)

1. **Crear la app Next.js** dentro del repo (TypeScript + Tailwind + App Router).
   → Verificás: `npm run dev` levanta y ves la página de bienvenida de Next.
2. **Página de inicio** simple con el nombre **C&C online**, un encabezado y un pie.
   → Verificás en pantalla.
3. **Catálogo**: 4–6 productos inventados (nombre, precio en COP, foto de relleno) en `lib/products.ts`, y una **página de lista** que los muestre como tarjetas.
   → Verificás: ves la grilla de productos.
4. **Página de detalle** de un producto (al hacer clic en una tarjeta).
   → Verificás: navegás de la lista al detalle y vuelves.
5. **Carrito básico** (en el navegador): botón "Agregar", contador en la barra, página de carrito con total.
   → Verificás: agregás productos y el total cuadra. Probamos romperlo (cantidad negativa, etc.).

**Al terminar el tramo:** anoto en `DECISIONS.md` el stack elegido y, si algo te hizo "clic", lo registramos en `NOTES.md`.

### Lo que este tramo NO toca (a propósito)
- ❌ Nada de Wompi / pagos.
- ❌ Nada de cuentas ni datos personales.
- ❌ Nada de base de datos todavía (productos son de mentira).
- ❌ Nada de despliegue.

---

## Tu decisión, arquitecto
¿Apruebas construir el **Tramo 1** tal como está? Si sí, arranco por el **Paso 1** (crear la app) y te voy mostrando en pantalla. Si quieres cambiar el orden, el alcance o el stack, dime y ajusto el plan antes de tocar código.
