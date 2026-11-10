---
name: newroaster
description: Add a new finance advisor to the current Finance Roast Room roster, with an evidence-backed knowledge base, agent instructions and compatible portrait assets.
---

# Add a finance advisor

Use this skill only when the user explicitly asks to add a new finance advisor.

1. Confirm the advisor's identity and the finance specialty they contribute.
2. Research public, attributable sources. Keep source notes and distinguish documented views from synthesis.
3. Create the advisor's knowledge base under `.claude/skills/roast-room/brains/<slug>/`.
4. Add matching instructions under `.claude/agents/council-<key>.md`.
5. Update `roster.json`, relevant references and the Antigravity skill if the board changes.
6. Add portrait assets only when they are properly identified, suitable for the room and optimized for the application.

Preserve the current 20-seat council architecture. Do not add retired business-operator personas or duplicate an existing advisor. Do not put API keys, local paths, private prompts or user-specific session data into generated files.
