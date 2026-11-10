import fs from 'fs';
import path from 'path';

export const PERSONA_CONFIG = [
  { key: 'buffett', slug: 'warren-buffett', name: 'Warren Buffett', short: 'Buffett', initials: 'WB', pillar: 'Long-term value investing and capital allocation', question: 'What does this do to owner earnings, durability, risk of ruin and intrinsic value?', dimension: 'Moat and capital allocation', color: '#4c6a92' },
  { key: 'bgraham', slug: 'benjamin-graham', name: 'Benjamin Graham', short: 'Graham', initials: 'BG', pillar: 'Security analysis and defensive value investing', question: 'What is the asset-backed or conservatively estimated value, and where is the margin of safety?', dimension: 'Asset value and margin of safety', color: '#5c6b73' },
  { key: 'munger', slug: 'charlie-munger', name: 'Charlie Munger', short: 'Munger', initials: 'CM', pillar: 'Multidisciplinary investing and inversion', question: 'How does this invert, and what cognitive biases, edge-of-competence risks, or misincentives are at play?', dimension: 'Inversion and mental models', color: '#2b4c7e' },
  { key: 'damani', slug: 'radhakishan-damani', name: 'Radhakishan Damani', short: 'Damani', initials: 'RD', pillar: 'Indian value investing and patient ownership', question: 'What are the structural unit economics, competitive advantages, and long-term runway?', dimension: 'Retail economics and patient compounding', color: '#2a7b62' },
  { key: 'jhunjhunwala', slug: 'rakesh-jhunjhunwala', name: 'Rakesh Jhunjhunwala', short: 'Jhunjhunwala', initials: 'RJ', pillar: 'Indian growth investing and market momentum', question: 'What is the mega-trend, earnings inflection, and market perception mismatch?', dimension: 'Trend inflection and Indian equity growth', color: '#d35400' },
  { key: 'agrawal', slug: 'raamdeo-agrawal', name: 'Raamdeo Agrawal', short: 'Agrawal', initials: 'RA', pillar: 'Quality-growth investing (QGLP)', question: 'Does this business satisfy QGLP: Quality, Growth, Longevity, and Price?', dimension: 'QGLP and compounding longevity', color: '#8e44ad' },
  { key: 'kedia', slug: 'vijay-kedia', name: 'Vijay Kedia', short: 'Kedia', initials: 'VK', pillar: 'Small-cap growth and emerging sectors', question: 'Does this follow SMILE: Small in size, Medium in experience, Large in aspiration, Extra-large in market potential?', dimension: 'Small-cap turnaround and market size', color: '#16a085' },
  { key: 'bakshi', slug: 'sanjay-bakshi', name: 'Sanjay Bakshi', short: 'Bakshi', initials: 'SB', pillar: 'Behavioural finance, moats and Indian value', question: 'What behavioural hazards, moat dynamics, and non-linear risks exist here?', dimension: 'Behavioural moats and ethical management', color: '#2980b9' },
  { key: 'parikh', slug: 'parag-parikh', name: 'Parag Parikh', short: 'Parikh', initials: 'PP', pillar: 'Value investing and behavioural finance', question: 'What behavioural biases, herd mentality, or mental errors are distorting this situation?', dimension: 'Behavioural bias and disciplined holding', color: '#27ae60' },
  { key: 'pabrai', slug: 'mohnish-pabrai', name: 'Mohnish Pabrai', short: 'Pabrai', initials: 'MP', pillar: 'Concentrated value investing and Dhandho', question: "Heads I win, tails I don't lose much: where is the asymmetric low-risk upside?", dimension: 'Asymmetric upside and low downside', color: '#e67e22' },
  { key: 'lynch', slug: 'peter-lynch', name: 'Peter Lynch', short: 'Lynch', initials: 'PL', pillar: 'Fundamental growth investing and stock research', question: 'What category of stock is this (stalwart, fast grower, cyclical) and does PEG justify it?', dimension: 'Product story and PEG valuation', color: '#1abc9c' },
  { key: 'marks', slug: 'howard-marks', name: 'Howard Marks', short: 'Marks', initials: 'HM', pillar: 'Credit, cycles, risk control and second-level thinking', question: 'Where are we in the cycle, what is priced in, and what is second-level risk?', dimension: 'Cycle position and risk asymmetry', color: '#34495e' },
  { key: 'soros', slug: 'george-soros', name: 'George Soros', short: 'Soros', initials: 'GS', pillar: 'Global macro and reflexivity', question: 'How does market participant bias alter the underlying fundamentals (reflexivity)?', dimension: 'Reflexivity and macro disequilibrium', color: '#7f8c8d' },
  { key: 'dalio', slug: 'ray-dalio', name: 'Ray Dalio', short: 'Dalio', initials: 'RD', pillar: 'Macroeconomic machines and portfolio risk', question: 'Where are we in the debt cycle, and how does the economic machine allocate liquidity?', dimension: 'Debt cycles and balanced risk', color: '#3498db' },
  { key: 'damodaran', slug: 'aswath-damodaran', name: 'Aswath Damodaran', short: 'Damodaran', initials: 'AD', pillar: 'Corporate finance, DCF valuation and narrative-to-numbers', question: 'What is the intrinsic DCF value, narrative bridge, and cost of capital?', dimension: 'Intrinsic DCF valuation and cost of capital', color: '#e74c3c' },
  { key: 'druckenmiller', slug: 'stanley-druckenmiller', name: 'Stanley Druckenmiller', short: 'Druckenmiller', initials: 'SD', pillar: 'Macro investing, liquidity and asymmetric positioning', question: 'What is central bank liquidity doing, and what is the 18-month earnings catalyst?', dimension: 'Liquidity drivers and conviction sizing', color: '#95a5a6' },
  { key: 'ptj', slug: 'paul-tudor-jones', name: 'Paul Tudor Jones', short: 'PTJ', initials: 'PTJ', pillar: 'Macro trading, technical analysis and capital preservation', question: 'Where is the 200-day moving average, 5:1 risk/reward ratio, and stop loss?', dimension: '5:1 risk/reward and capital preservation', color: '#1f3a52' },
  { key: 'minervini', slug: 'mark-minervini', name: 'Mark Minervini', short: 'Minervini', initials: 'MM', pillar: 'Momentum and growth-stock trading (SEPA/VCP)', question: 'Is it in a Stage 2 uptrend with Volatility Contraction Pattern (VCP) and tight stop?', dimension: 'VCP pattern and trend template', color: '#c0392b' },
  { key: 'oneil', slug: 'william-oneil', name: 'William O\'Neil', short: 'O\'Neil', initials: 'WO', pillar: 'Growth-stock momentum and CAN SLIM', question: 'Does it satisfy CAN SLIM criteria and cup-with-handle breakout on high volume?', dimension: 'CAN SLIM criteria and volume breakouts', color: '#e65100' },
  { key: 'livermore', slug: 'jesse-livermore', name: 'Jesse Livermore', short: 'Livermore', initials: 'JL', pillar: 'Speculation, tape reading and trend trading', question: 'What is the line of least resistance, and where is the pivotal point?', dimension: 'Pivotal points and tape reading', color: '#7e5109' }
];

const agentsDir = path.resolve('.claude/agents');
const finDir = path.resolve('finance-roast-room-personas');

for (const p of PERSONA_CONFIG) {
  const agentFile = path.join(agentsDir, `council-${p.key}.md`);
  const finAgentSrc = path.join(finDir, p.slug, 'agent.md');
  let body = '';
  if (fs.existsSync(finAgentSrc)) {
    body = fs.readFileSync(finAgentSrc, 'utf8').trim();
  }
  
  const content = `---
name: council-${p.key}
description: The ${p.pillar} seat on the Finance Council. Reasons, decides, and talks with the investment philosophy and discipline of ${p.name}.
tools: Read, Grep, Glob
maxTurns: 12
---

${body}
`;
  fs.writeFileSync(agentFile, content, 'utf8');
}
console.log('Created/updated 20 council agent files in .claude/agents');

const rosterData = {
  board: 'ask',
  default: ['buffett', 'bgraham', 'munger', 'damodaran', 'lynch', 'marks', 'dalio'],
  seats: PERSONA_CONFIG
};

const rosterPath = path.resolve('.claude/skills/roast-room/roster.json');
fs.writeFileSync(rosterPath, JSON.stringify(rosterData, null, 2), 'utf8');
console.log('Updated .claude/skills/roast-room/roster.json with exactly 20 finance advisors');

const finRosterPath = path.resolve('finance-roast-room-personas/roster.json');
fs.writeFileSync(finRosterPath, JSON.stringify(rosterData, null, 2), 'utf8');
console.log('Updated finance-roast-room-personas/roster.json');
