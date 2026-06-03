# Project: C&C online — Family Business Online Store

> This file tells Claude Code how to work on this project. It's read automatically every session.
> Keep it SHORT. A bloated CLAUDE.md gets ignored. Delete anything that stops being true.

## What we're building
An online store (ecommerce) for the family business. The owner is **new to coding** and is the
architect/product owner — they understand the project at a high level and approve direction, but
do not read every line.

## Stack
- **Next.js** — the website (frontend + backend).
- **Supabase** — database, customer accounts/auth, file storage.
- **Wompi** — payment processing (Colombian, by Bancolombia).

## How to work with me
- **Teach, don't just type.** When you write non-trivial code, explain at a high level what it
  does, why this approach, and what could break. Assume I'm new — no unexplained jargon.
- **Plan before the risky stuff.** For payments, accounts/auth, orders, or database changes:
  show me a step-by-step plan and wait for my approval BEFORE writing code.
- **Commit small and often.** After each working change, make a clean git commit. Always commit
  before attempting anything risky.
- **Prefer boring, standard, well-documented patterns** over clever or trendy ones.
- **Keep `DECISIONS.md` and `NOTES.md` updated** when we make a real choice or learn something
  that wasn't obvious.

## 🔴 Deep-understanding zones — NEVER black-box these
These touch real money or real customer data. Go slow, explain fully, propose a plan first:
- **Payments (Wompi)** — the full flow, and especially confirming payments via webhooks +
  verifying the signature (proving a payment is real and came from Wompi).
- **Customer accounts & personal data** — who can access what; where data lives.
- **Orders & inventory** — an order must never be silently lost or duplicated.

### ⚠️ Wompi-specific rule
You have limited and partly-unreliable knowledge of Wompi's API. **Do not write Wompi code from
memory.** Ask me to paste the relevant official Wompi documentation, and work only from that.
If I haven't given you docs for a Wompi feature, ask for them instead of guessing.

## 🟢 Just build these — don't over-explain
Layout, styling, colors, animations, form boilerplate, component structure, copy. I'll judge
these by looking at the result on screen.

## Don't add yet
No automated test suites, no complex task systems, no premature abstractions — unless I explicitly
ask. We add process when we hit the pain that justifies it, not before.
