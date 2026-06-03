# Building Your First Real Project with Claude Code

Welcome. You're about to build something real — an online store for the family business — and you're going to do it with Claude Code as your build partner. This guide is everything I wish someone had told me before I started.

Read it once, all the way through. It's short on purpose. Come back to the **Cheat Sheet** at the bottom whenever you're stuck.

---

## The one mental shift

You are **the architect.** Claude is **the builder.**

You don't need to know how to lay every brick. You need to know what the building looks like, where the load-bearing walls are, and when something looks wrong. Claude can write more code in an hour than you could read in a day — and that's exactly the danger. If you let it build everything while you understand nothing, the first weird bug becomes a brick wall, because there's no picture in your head to debug against.

So the goal isn't "understand every line." It's **"understand the shape, deeply, in the few places that matter — and let go everywhere else."**

That's the whole philosophy. The rest of this doc is just how to do that on purpose.

---

## Spend your "understanding budget" unevenly

You have a limited amount of attention. The instinct is to spread it evenly across the whole project. **Don't.** Spread it evenly and you end up shallow everywhere — including the places that can hurt you.

Instead, go **deep** on a few things and **zero** on the rest. Here's the map for an online store:

### 🔴 Understand deeply — never let Claude black-box these

| Area | Why it's dangerous | What "understand" means |
|------|-------------------|------------------------|
| **Payments (Wompi)** | Real money. A bug here = lost sales, double charges, or fraud. | You can explain the full flow: customer clicks pay → goes to Wompi → comes back → how you *confirm* the payment really happened. |
| **Customer accounts & data** | A leak can be legal trouble, not just embarrassing. | You know who can see what, and where personal data is stored. |
| **Orders & inventory** | The source of truth for "did we get paid, do we owe them a product." | You can trace one order from "placed" to "fulfilled" and know it can't get lost or duplicated. |
| **Deploying & "is it down?"** | A store that's down during a sale is lost money. | You can ship a fix, take a backup, and you'd *notice* if the site broke. |

### 🟢 Let Claude fully cook — don't spend a single brain cell

- Page layouts, styling, colors, animations
- Form boilerplate, buttons, loading spinners
- Product card design, the navbar, footer copy

For these, you review the **result on the screen**, not the code. If it looks right and works, it's right. Move on.

> **The whole skill is knowing which list a task belongs to.** Master that and you're ahead of 90% of beginners.

---

## Your stack — and the one trap in it

You're building on **Next.js + Supabase + Wompi.** Great choices, with one asterisk.

**Next.js and Supabase are "boring" in the best possible way.** Millions of people use them, so Claude has seen them a million times and will be an excellent, reliable tutor on both. Boring, well-trodden tools quietly make Claude *smarter* — fewer hallucinations, better answers. This is a feature, not a compromise. Resist any urge to pick something trendy or exotic; you'll just make Claude dumber and blame yourself.

**Wompi is the exception.** It's a Colombian processor (Bancolombia) — solid, but Claude has seen it far less than something like Stripe. That means:

> ⚠️ **For anything Wompi, do NOT trust Claude's memory.** It will confidently write Wompi code that's subtly wrong. Open the official Wompi docs, paste the relevant page into the chat, and tell Claude: *"Use only this documentation, don't guess."*

The most important part to get exactly right is **confirming payments via Wompi's webhooks and verifying the signature** — that's the step that proves a payment is real and actually came from Wompi. A hallucinated shortcut there is a fraud hole. Slow down, use the real docs, and make Claude explain how it knows a payment is legitimate.

---

## How to work with Claude, day to day

### Make it teach, not just type
Don't accept a big chunk of code silently. Ask:
- *"Explain what this does at a high level, like I'm new."*
- *"Why this approach and not another? What are the tradeoffs?"*
- *"What could break here, and how would I notice?"*

You're not trying to understand every line — you're trying to understand the **shape and the risks.** If Claude can't explain it simply, that's a yellow flag.

### Plan before the scary stuff
For anything on the 🔴 list — payments, accounts, database changes — ask Claude to **make a plan first** before writing code:

> *"Before you write anything, walk me through your plan step by step. I'll approve it, then you build."*

(In Claude Code you can also press **Shift+Tab** to enter Plan Mode, which does this automatically.) Plans are cheap to change; code is expensive to undo. Plan the irreversible things; just-build the reversible ones.

### Commit small, commit often
`git` is your safety net and your superpower as a beginner. After every small working change, commit it:

> *"Commit this with a clear message."*

This makes everything reversible, which kills the fear that makes beginners freeze or blindly trust. If Claude breaks something, you can always go back one step. **Commit before you try anything risky.**

### Let it run and watch it break
The best way to verify something works isn't reading the code — it's **running it and looking.** Ask Claude to run the app, click through the flow yourself, and break it on purpose ("what if I enter a negative quantity?"). You learn more from one broken checkout than from reading 500 lines.

---

## The four habits to start with (and what to ignore)

You don't need a fancy system. Start with exactly these four. They take five minutes each and they compound.

1. **`CLAUDE.md`** — a short file in your project that tells Claude how to behave (it reads this automatically every session). A starter version is in this kit. Keep it *short* — a bloated CLAUDE.md gets ignored.
2. **`DECISIONS.md`** — one line every time you make a real choice: *what* you decided and *why.* "We use Wompi for payments because the business already banks with Bancolombia." This is your high-level understanding, made permanent. When Claude later suggests something that contradicts a decision, you'll catch it.
3. **`NOTES.md`** — your learning log. When something confused you and then *clicked*, write down the click. This is how the picture in your head gets built.
4. **Commit often** with `git` (see above).

**Ignore for now:** automated tests, fancy task-tracking systems, complex folder structures, anything that feels like "real engineer process." You haven't hit the pain those solve yet. Adding them now is just ceremony that you'll abandon. They come later — see below.

---

## When to level up

Don't add machinery before you feel its pain. Here's how to know it's time:

| You feel this pain... | ...then add this |
|----------------------|------------------|
| "I keep manually clicking through checkout to make sure I didn't break it" | **Automated tests** for the payment + order flow (start with just those). |
| "I have 12 things to do and keep forgetting them / Claude forgets context" | A simple **`TODO.md`** as your single to-do list. |
| "Claude keeps re-introducing a bug we already fixed" | Write the fix + *why* into `NOTES.md` or `CLAUDE.md` so it stops happening. |
| "I have no idea if the live site is healthy" | Basic monitoring / error alerts (Supabase + Vercel both have built-in dashboards). |

That's it. The machinery arrives *with* the pain, never before. This is exactly how experienced teams build their process too — one earned lesson at a time.

---

## Cheat Sheet

**Before you start a task, ask: is this 🔴 (deep) or 🟢 (let it cook)?**

- 🔴 Payments, accounts, orders, deploys → plan first, make Claude explain, go slow, use real docs (especially for Wompi).
- 🟢 Layout, styling, copy, boilerplate → let Claude build, judge it on screen, move on.

**Every session:**
- Commit small and often. Commit *before* anything risky.
- Make Claude explain the shape and the risks, not every line.
- Plan the irreversible; just-build the reversible.
- Log real decisions in `DECISIONS.md`; log "aha" moments in `NOTES.md`.

**Golden rules:**
1. You're the architect, Claude is the builder.
2. Understand deeply where money or data lives; let go everywhere else.
3. Boring stack = smarter Claude. Wompi is your one exotic piece — feed it the real docs.
4. If Claude can't explain it simply, slow down.
5. `git commit` is your undo button. Use it constantly.

You've got this. Build something the family is proud of. 🚀
