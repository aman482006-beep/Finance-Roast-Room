# Weighted scoring

For each option, calculate `sum(weight × advisor score) / sum(weights)`. Use Round 3 scores when Round 3 ran; otherwise use the latest completed round. Round to one decimal place and show the arithmetic.

## Verdict bands

| Score | Verdict |
|---|---|
| 7.5–10.0 | GO |
| 6.0–7.4 | GO WITH CONDITIONS |
| 4.5–5.9 | RESHAPE |
| Below 4.5 | DON'T DO IT |

Use WAIT when the preferred option depends on a prerequisite that is not met. State the trigger, deadline and fallback.

## Risk overrides

- Any selected advisor rating ruin risk as likely caps the verdict at RESHAPE unless the resolution contains a mitigation that advisor endorsed.
- For a difficult-to-reverse decision with advisor-score spread of 4 or more, cap at GO WITH CONDITIONS and make the cheapest test a precondition.
- If every advisor's top option is the same and Round 1 scores are within one point, make the strongest unargued alternative a Round 2 crux.

Spread is the highest minus lowest score for the recommended option. Report average confidence and note when disagreement is material. Use dimension labels from `roster.json`; any dimension scoring 4 or below needs a named mitigation.
