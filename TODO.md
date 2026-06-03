# TODO — C&C online

**This is the one place all to-dos live.** Not in your head, not in chat, not in five files.
One list. Claude reads this too, so it always knows what's next.

**Three rules:**
1. New task? It goes here. Finished a task? Move it to **Done**.
2. Sort by priority into **Now / Next / Later** — not by when you thought of it.
3. Tag anything that touches money or customer data with 🔴 — that means *plan it before
   building it* (see the danger map in START-HERE.md). Everything else is 🟢, just build it.

Keep each item short and concrete: a thing you could actually start.

---

## 🔥 Now (this session / next session)
- [ ] 🟢 Polish the look: replace emoji placeholders with real product images
- [ ] 🟢 Update products + prices to the family's actual items (edit `lib/products.ts`)
- [ ] 🟢 Tidy copy on the homepage (real welcome text, what the business sells)

## ⏭️ Next (soon, once "Now" is solid)
- [ ] 🔴 Products from Supabase — move the catalog out of `lib/products.ts` into the database
      (it's a database change → plan first: where data lives, who can read it)
- [ ] 🔴 Customer accounts — sign up / log in (touches personal data → plan first)

## 🌙 Later (real, but not yet)
- [ ] 🔴 Checkout + **Wompi payments** — own dedicated session, official Wompi docs open, plan
      the whole flow first (especially confirming payment via webhook + signature)
- [ ] 🔴 Orders — save each order, show the customer their order history
- [ ] 🔴 Deploy the site so the family can see it live (Vercel) — START-HERE lists deploys as a
      deep zone (backups, "is it down?"), so we plan it
- [ ] 🟢 Admin view: let the family add/edit products without touching code

## ✅ Done
- [x] Next.js app scaffolded and running locally (TS + Tailwind + App Router)
- [x] Repo + git + working docs (CLAUDE / DECISIONS / NOTES / PLAN / TODO)
- [x] Homepage, catalog grid, and single product detail page (404 on unknown product)
- [x] Shopping cart (add, view, change quantities, remove) — browser-only for now
- [x] Site layout: header with logo + live cart count, footer

---

> 💡 When this list starts feeling cramped (lots of items, hard to scan), that's the signal you've
> "leveled up" — *then* you can add more structure (sub-sections per area, etc.). Not before.
> The list grows to fit the project; the project doesn't bend to fit a fancy list.
