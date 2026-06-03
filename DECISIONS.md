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

## 2026-MM-DD — Tech stack
**Decision:** Next.js for the site, Supabase for database/accounts/storage, Wompi for payments.
**Why:** Next.js + Supabase are popular and well-documented, so Claude is a reliable guide on them.
Wompi because the business already banks with Bancolombia.
**Alternatives considered:** Stripe (more familiar to Claude, but not a fit for a Colombian
business / Bancolombia relationship). Note: because Wompi is less common, always work from its
official docs, never from Claude's memory.

<!-- Add new decisions below as you make them. -->
