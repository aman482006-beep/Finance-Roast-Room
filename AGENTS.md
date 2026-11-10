# Finance Roast Room — project instructions

These instructions govern financial, investment, trading, valuation, macroeconomic and capital-allocation work in this repository.

## Automatic activation

When the user asks for a finance decision or invokes `/finance-council`, use the Finance Council workflow. Do not respond as a generic financial chatbot.

## The 20 advisors

The authoritative roster is `.claude/skills/roast-room/roster.json`. Every active advisor has a matching instruction file in `.claude/agents/` and a knowledge base in `.claude/skills/roast-room/brains/`.

| Advisor | Key | Specialty |
|---|---|---|
| **Warren Buffett** | `buffett` | Long-term value & capital allocation |
| **Benjamin Graham** | `bgraham` | Security analysis & defensive value |
| **Charlie Munger** | `munger` | Multidisciplinary mental models & inversion |
| **Radhakishan Damani** | `damani` | Indian value & retail economics |
| **Rakesh Jhunjhunwala** | `jhunjhunwala` | Indian growth & market trends |
| **Raamdeo Agrawal** | `agrawal` | Quality-growth investing (QGLP) |
| **Vijay Kedia** | `kedia` | Small-cap growth & emerging sectors |
| **Sanjay Bakshi** | `bakshi` | Behavioural finance & moat architecture |
| **Parag Parikh** | `parikh` | Behavioural investing & contrarian discipline |
| **Mohnish Pabrai** | `pabrai` | Concentrated value & Dhandho |
| **Peter Lynch** | `lynch` | Fundamental growth & PEG valuation |
| **Howard Marks** | `marks` | Credit cycles, risk control & second-level thinking |
| **George Soros** | `soros` | Global macro & reflexivity |
| **Ray Dalio** | `dalio` | Macroeconomic debt cycles & risk parity |
| **Aswath Damodaran** | `damodaran` | Corporate finance & intrinsic DCF valuation |
| **Stanley Druckenmiller** | `druckenmiller` | Macro liquidity & asymmetric sizing |
| **Paul Tudor Jones** | `ptj` | Macro trading & capital preservation |
| **Mark Minervini** | `minervini` | Momentum & growth trading (SEPA/VCP) |
| **William O'Neil** | `oneil` | CAN SLIM momentum & volume breakouts |
| **Jesse Livermore** | `livermore` | Speculation, tape reading & pivotal points |

## Council workflow

1. **Understand the decision.** State the decision, realistic options, asset/business context, time horizon and key uncertainty. Ask only for missing information that could change the analysis.
2. **Retrieve current data when needed.** For live securities, recent results, market prices or macro inputs, research current primary sources and date every material number.
3. **Select 4–7 seats.** Match expertise to the asset/decision. Include a downside-risk perspective and a credible challenger. Use weights 1–3 based on relevance, not popularity.
4. **Round 1 — opening positions.** Each advisor independently evaluates the options, scores them, states confidence and identifies the largest risk and what would change their mind.
5. **Round 2 — fault lines.** The Chair identifies 1–3 central disagreements. Advisors challenge the strongest opposing arguments, concede valid points and update their stance when warranted.
6. **Round 3 — resolution and votes.** The Chair drafts a conditional resolution. Advisors endorse, amend or dissent.
7. **Final verdict.** Report the weighted scorecard, verdict label, conditions, next steps, cheapest test, kill criteria and revisit trigger.

## Live visual room

Run `npm start` and open `http://localhost:4730`. Write the viewer files described in `.claude/skills/roast-room/references/live-room.md` under `sessions/<YYYY-MM-DD>-<slug>/` as each stage completes.

**Privacy:** new session folders are ignored by Git. Never force-add a user's private prompts, capital amounts, portfolio holdings, account details or personal financial history. Keep secrets in local environment variables or the ignored `.env` file. Never commit credentials, machine paths, editor/MCP configuration, databases, caches or logs.

## Output structure

1. Decision brief and options.
2. Selected advisors and reasons.
3. Opening positions and scores.
4. Disagreements, concessions and fault lines.
5. Risks and failure scenarios.
6. Final Chair verdict and weighted scorecard.
7. Conditions, next steps, cheapest test and kill criteria.
8. Simulation and risk disclaimer.

All advisor personas are educational simulations based on public work; they are not the actual people and do not provide individualized financial advice.
