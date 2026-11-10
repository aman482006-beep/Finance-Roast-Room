# Finance Roast Room

This repository contains a 20-advisor finance council and its local visual room.

## Claude Code workflow

- Use `/roast-room` for investment, trading, valuation, macro or capital-allocation decisions.
- The source of truth for active seats is `.claude/skills/roast-room/roster.json`.
- Advisor instructions live in `.claude/agents/`; their knowledge bases live in `.claude/skills/roast-room/brains/`.
- Follow `.claude/skills/roast-room/SKILL.md` and the references in its `references/` folder.

## Local viewer

Run `npm start` and open `http://localhost:4730`. The viewer watches `sessions/` and plays the council files as they are written.

## Repository hygiene

- Keep real user prompts, investment amounts, private decision briefs and session outputs local. Only the sample sessions are tracked.
- Keep API keys in the ignored `.env` file or environment variables. Never commit credentials.
- Do not add editor settings, MCP configuration, machine paths, local caches or databases to the repository.
