# Finance council seats

The authoritative roster is `roster.json`. Active advisors must have an agent instruction in `.claude/agents/` and a knowledge base in `brains/`.

| Advisor | Key | Perspective | Knowledge base |
|---|---|---|---|
| **Warren Buffett** | `buffett` | Long-term value & capital allocation | `.claude/skills/roast-room/brains/warren-buffett/` |
| **Benjamin Graham** | `bgraham` | Security analysis & defensive value | `.claude/skills/roast-room/brains/benjamin-graham/` |
| **Charlie Munger** | `munger` | Multidisciplinary mental models & inversion | `.claude/skills/roast-room/brains/charlie-munger/` |
| **Radhakishan Damani** | `damani` | Indian value & retail economics | `.claude/skills/roast-room/brains/radhakishan-damani/` |
| **Rakesh Jhunjhunwala** | `jhunjhunwala` | Indian growth & market trends | `.claude/skills/roast-room/brains/rakesh-jhunjhunwala/` |
| **Raamdeo Agrawal** | `agrawal` | Quality-growth investing (QGLP) | `.claude/skills/roast-room/brains/raamdeo-agrawal/` |
| **Vijay Kedia** | `kedia` | Small-cap growth & emerging sectors | `.claude/skills/roast-room/brains/vijay-kedia/` |
| **Sanjay Bakshi** | `bakshi` | Behavioural finance & moat architecture | `.claude/skills/roast-room/brains/sanjay-bakshi/` |
| **Parag Parikh** | `parikh` | Behavioural investing & contrarian discipline | `.claude/skills/roast-room/brains/parag-parikh/` |
| **Mohnish Pabrai** | `pabrai` | Concentrated value & Dhandho | `.claude/skills/roast-room/brains/mohnish-pabrai/` |
| **Peter Lynch** | `lynch` | Fundamental growth & PEG valuation | `.claude/skills/roast-room/brains/peter-lynch/` |
| **Howard Marks** | `marks` | Credit cycles, risk control & second-level thinking | `.claude/skills/roast-room/brains/howard-marks/` |
| **George Soros** | `soros` | Global macro & reflexivity | `.claude/skills/roast-room/brains/george-soros/` |
| **Ray Dalio** | `dalio` | Macroeconomic debt cycles & risk parity | `.claude/skills/roast-room/brains/ray-dalio/` |
| **Aswath Damodaran** | `damodaran` | Corporate finance & intrinsic DCF valuation | `.claude/skills/roast-room/brains/aswath-damodaran/` |
| **Stanley Druckenmiller** | `druckenmiller` | Macro liquidity & asymmetric sizing | `.claude/skills/roast-room/brains/stanley-druckenmiller/` |
| **Paul Tudor Jones** | `ptj` | Macro trading & capital preservation | `.claude/skills/roast-room/brains/paul-tudor-jones/` |
| **Mark Minervini** | `minervini` | Momentum & growth trading (SEPA/VCP) | `.claude/skills/roast-room/brains/mark-minervini/` |
| **William O'Neil** | `oneil` | CAN SLIM momentum & volume breakouts | `.claude/skills/roast-room/brains/william-oneil/` |
| **Jesse Livermore** | `livermore` | Speculation, tape reading & pivotal points | `.claude/skills/roast-room/brains/jesse-livermore/` |

## Weights
- **3:** The decision is primarily in this advisor's specialty.
- **2:** The specialty is materially affected.
- **1:** The specialty is relevant at the edges.

Use 4–7 relevant seats by default. Include a downside-risk perspective and a credible challenger. The saved default board is Buffett, Benjamin Graham, Munger, Damodaran, Lynch, Marks and Dalio.
