---
name: finance-council
description: Activates the 20-person Finance Council for investment, trading, valuation, macro and capital-allocation decisions.
---

# Finance Council

Use the 20-seat council described in `AGENTS.md`.

- Roster: `.claude/skills/roast-room/roster.json`
- Agent instructions: `.claude/agents/council-<key>.md`
- Knowledge bases: `.claude/skills/roast-room/brains/<slug>/`
- Deliberation/scoring: `.claude/skills/roast-room/SKILL.md` and its references.
- Visual viewer: `npm start`, then open `http://localhost:4730`.

Choose 4–7 relevant advisors, include a downside perspective and a credible challenger, and run opening positions, fault-line debate, then a vote on the draft resolution. Explain weighted scores and label assumptions.

New session folders are Git-ignored by default. Never force-add personal prompts, private capital amounts, credentials, account information or machine-specific configuration. All advisor personas are educational simulations based on public work, not the actual people or individualized financial advice.
