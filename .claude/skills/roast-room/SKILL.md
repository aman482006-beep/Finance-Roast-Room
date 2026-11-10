---
name: roast-room
description: Run a structured finance council for investment, trading, valuation, macro or capital-allocation decisions. Use when the user asks to take a decision to the Roast Room, convene finance advisors, compare investment choices or asks for a scored finance verdict.
argument-hint: "[decision and context] [--quick | --all | --seats key,key,...]"
---

# Finance Roast Room

Run a disciplined three-round council. The advisor roster and each advisor's knowledge base are the source of truth.

- Roster/default board: `roster.json`
- Active agent instructions: `../../agents/council-<key>.md`
- Advisor knowledge: `brains/<slug>/`
- Round/scoring references: `references/`
- Live room file contract: `references/live-room.md`

There are 20 active finance advisors. The default board is Buffett, Benjamin Graham, Munger, Damodaran, Lynch, Marks and Dalio. Do not use retired business-operator personas or invent extra seats.

## Choose the board

Recommend 4–7 seats based on the decision. Include a downside/risk perspective and a credible challenger.

- Indian equities: Buffett, Damani, Jhunjhunwala, Agrawal, Bakshi, Kedia.
- Valuation and fundamentals: Damodaran, Graham, Buffett, Lynch, Pabrai.
- Momentum and technical trading: Minervini, O'Neil, Livermore, PTJ.
- Macro, rates and currency: Dalio, Soros, Druckenmiller, Marks, PTJ.
- Special situations: Pabrai, Munger, Bakshi, Graham, Damodaran.

Use `--quick` for a reversible low-stakes decision, `--all` to include all 20, or `--seats` to specify seats.

## Build the brief

Capture only information needed to decide: the decision and realistic options, asset/business context, time horizon, supplied numbers, constraints, success criteria and key uncertainty. Ask only for missing information that could materially change the result. Never invent personal financial details, portfolio holdings, income, account identifiers or risk limits. Mark assumptions clearly.

## Three-round deliberation

1. **Opening positions:** each advisor independently assesses the options, scores them, states confidence and identifies the biggest risk.
2. **Fault lines and debate:** the Chair identifies the main disagreements; advisors challenge opposing arguments and state what would change their minds.
3. **Resolution and votes:** the Chair drafts a conditional resolution; advisors endorse, amend or dissent.

Calculate weighted scores using `references/scoring.md`. Explain spread, confidence, downside risks and overrides. The final verdict includes the call, reasoning, conditions, next steps, cheapest test and kill criteria.

## Live room

Run `npm start` in another terminal. The viewer listens at `http://localhost:4730`. Write the files specified by `references/live-room.md` under `sessions/YYYY-MM-DD-<slug>/` as each stage completes.

## Privacy

- New session folders are ignored by Git. Do not force-add user-specific prompts, briefs, financial amounts or verdicts.
- Only the three labelled sample sessions should be tracked.
- Keep API keys in local environment variables or the ignored `.env` file.
- Never commit credentials, local databases, MCP/editor configuration, computer paths, logs or other machine-specific metadata.

All advisors are educational simulations based on public work, not the actual people or individualized financial advice.
