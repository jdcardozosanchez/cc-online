# Learning Log

When something confused you and then **clicked**, write the click down here. This is how the
picture in your head gets built — one "aha" at a time. Future-you will thank you, and so will
Claude (it reads this for context).

Don't overthink the format. A few lines is plenty.

Format:
```
## YYYY-MM-DD — What I figured out
**Was confused about:** ...
**Now I understand:** ... (in your own words — that's the point)
**The trap / gotcha:** (optional) what tripped me up.
```

---

## Example (delete once you have real ones)

## 2026-MM-DD — How a Wompi payment actually completes
**Was confused about:** I thought the payment was "done" when the customer's card went through on
Wompi's page.
**Now I understand:** The real confirmation comes when Wompi sends my server a webhook (a little
message saying "this payment succeeded"). My site has to verify that message is genuinely from
Wompi before marking the order as paid. The customer's screen is NOT the source of truth.
**The trap:** If you trust only the redirect back to your site, someone could fake "paid" without
paying. The webhook + signature check is what makes it safe.

<!-- Add your real notes below. -->
