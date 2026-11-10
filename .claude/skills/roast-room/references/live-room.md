# Live room file contract

The local viewer at `http://localhost:4730` watches `sessions/` and plays the council as files appear. Write these files in order, using plain JSON without comments or trailing commas.

## File order

| Stage | File |
|---|---|
| Brief and board setup | `council.json` and `brief.md` |
| Round 1 complete | `round-1.md` |
| Chair's fault lines | `cruxes.json` |
| Round 2 complete | `round-2.md` |
| Draft resolution | `draft.json` and `draft-resolution.md` |
| Round 3 complete | `round-3.md` |
| Final verdict | `verdict.json` and `verdict.md` |
| Optional compiled playback | `events.json` |

## council.json

```json
{
  "title": "Example company: buy, wait or pass",
  "decision": "Decide whether to buy at today's valuation, wait for a better entry, or pass.",
  "mode": "full",
  "options": [
    { "id": "A", "label": "Buy at current valuation" },
    { "id": "B", "label": "Wait for a better entry" },
    { "id": "C", "label": "Pass" }
  ],
  "weights": {
    "damodaran": { "weight": 3, "reason": "Intrinsic value and valuation are central" },
    "kedia": { "weight": 2, "reason": "Growth runway and market opportunity matter" },
    "buffett": { "weight": 2, "reason": "Downside and capital allocation" }
  },
  "seats": ["damodaran", "kedia", "buffett"],
  "brief": "A concise, factual summary of the company and decision.",
  "assumptions": ["Future growth estimates are assumptions until verified."]
}
```

The viewer accepts advisor keys or display names. Every selected advisor needs a relevance weight from 1 to 3.

## cruxes.json

```json
{
  "cruxes": [
    {
      "question": "Does the growth outlook justify the current valuation?",
      "sides": [
        { "position": "Yes, if execution meets the plan", "seats": ["Damodaran", "Kedia"] },
        { "position": "No, the margin of safety is inadequate", "seats": ["Buffett"] }
      ]
    }
  ],
  "unanimous": false,
  "note": "The central disagreement is growth versus entry price."
}
```

Use one to three cruxes. Keep questions and positions short.

## draft.json

```json
{
  "option": "B",
  "label": "WAIT",
  "recommendation": "Wait for the valuation or execution trigger before committing.",
  "conditions": ["Revisit after the next reported quarter."],
  "next_steps": ["Track the operating metric and valuation monthly."],
  "cheapest_test": "Build a downside/base/upside valuation range.",
  "kill_criteria": "Pass if execution weakens while the multiple remains elevated."
}
```

## verdict.json

```json
{
  "label": "WAIT",
  "call": "Wait for the stated trigger; do not confuse a good business with a good entry price.",
  "recommended": "B",
  "why": [
    { "point": "The base-case cash flows do not yet support the price.", "seat": "Damodaran", "framework": "Intrinsic valuation" }
  ],
  "minority": { "seat": "Kedia", "quote": "A representative line from the advisor card.", "would_have_to_be_true": "Execution accelerates without margin pressure." },
  "next_steps": [{ "when": "Next results", "action": "Update the operating assumptions and valuation." }],
  "kill_criteria": "Pass if the thesis weakens.",
  "conditions": ["Use verified filings and current market data."],
  "fights": [],
  "amendments": [],
  "cheapest_test": "Refresh the valuation with current inputs.",
  "revisit": "After the next results.",
  "override_note": ""
}
```

Use verdict labels `GO`, `GO WITH CONDITIONS`, `RESHAPE`, `WAIT` or `DON'T DO IT`. The viewer computes scores and votes from the advisor cards.
