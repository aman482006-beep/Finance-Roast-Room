# Three-round council prompts

Use these shapes consistently. The Chair keeps each advisor focused on their specialist lens and requires evidence, assumptions and a concrete decision.

## Round 1 — Opening position

For each selected advisor, write:

```text
SEAT: <Advisor> (<specialty>)
STANCE: Strong yes | Yes | Conditional yes | No | Strong no
OPTION SCORES: A n/10 · B n/10 · C n/10
PILLAR SCORE: n/10
CONFIDENCE: n/5
RUIN RISK: none | possible | likely
DOOR: one-way | two-way

THE CALL: <recommended option and one-sentence conclusion>
WHY:
1. <framework or principle, with knowledge-base source id>
2. <evidence and arithmetic>
3. <key trade-off>
THE RISK I SEE: <largest downside>
WHAT WOULD CHANGE MY MIND: <specific fact or number>
WHAT I'D DO NEXT: <one concrete action>
QUESTION FOR THE INVESTOR: <the key missing fact>
```

Challenge unsupported assumptions. Never invent current prices, facts, personal holdings or private opinions. Mark estimates as assumptions.

## Round 2 — Fault-line debate

The Chair identifies one to three underlying disagreements from Round 1. Each advisor responds:

```text
SEAT: <Advisor>
I DISAGREE MOST WITH: <seat and strongest opposing claim>
MY REBUTTAL: <evidence, reasoning and arithmetic>
I CONCEDE: <strongest point against my view, and what it changes>
ON THE CRUXES: <answer each crux directly>
STANCE: <updated position>
OPTION SCORES: A n/10 · B n/10 · C n/10
CONFIDENCE: n/5
RUIN RISK: none | possible | likely
MOVED: no | yes, from X to Y, because ...
MY CONDITIONS FOR YES: <up to three checkable conditions>
```

Do not manufacture disagreement. If a seat has no strong counterargument, say so.

## Round 3 — Vote on the resolution

The Chair writes a draft resolution with a recommended option, conditions, next steps, cheapest test and kill criteria. Each advisor votes:

```text
SEAT: <Advisor>
VOTE: Endorse | Endorse with amendment | Dissent
OPTION SCORES: A n/10 · B n/10 · C n/10
FINAL SCORE: n/10
FINAL PILLAR SCORE: n/10
AMENDMENT OR DISSENT: <one or two sentences, blank if endorsing>
ONE LINE FOR THE INVESTOR: <the key point from this advisor's specialty>
```

## Chair's verdict

Summarise the majority view and meaningful minority view, calculate weighted scores using `scoring.md`, apply risk overrides, and give the investor a clear action plan. State what evidence would change the verdict.
