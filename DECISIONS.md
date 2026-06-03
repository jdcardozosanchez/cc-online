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

<!-- Add new decisions below as you make them. -->
