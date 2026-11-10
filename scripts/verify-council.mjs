import fs from 'fs';
import path from 'path';
import { loadRoster, defaultBoard, SEATS, systemFor } from '../app/lib/seats.mjs';
import * as watch from '../app/lib/watch.mjs';

console.log('--- 1. Testing Roster & Registration ---');
const seats = loadRoster();
console.log(`Total active seats registered: ${seats.length}`);
if (seats.length !== 20) {
  throw new Error(`Expected 20 seats, got ${seats.length}`);
}

const expectedSlugs = [
  'warren-buffett', 'benjamin-graham', 'charlie-munger', 'radhakishan-damani',
  'rakesh-jhunjhunwala', 'raamdeo-agrawal', 'vijay-kedia', 'sanjay-bakshi',
  'parag-parikh', 'mohnish-pabrai', 'peter-lynch', 'howard-marks',
  'george-soros', 'ray-dalio', 'aswath-damodaran', 'stanley-druckenmiller',
  'paul-tudor-jones', 'mark-minervini', 'william-oneil', 'jesse-livermore'
];

for (const slug of expectedSlugs) {
  const found = seats.find(s => s.slug === slug);
  if (!found) throw new Error(`Missing expected persona: ${slug}`);
}
console.log('✓ All 20 expected finance personas are registered.');

console.log('--- 2. Verifying Single Warren Buffett ---');
const buffettSeats = seats.filter(s => s.name.toLowerCase().includes('buffett'));
console.log(`Buffett seats found: ${buffettSeats.length} (${buffettSeats[0].name})`);
if (buffettSeats.length !== 1) throw new Error('Expected exactly 1 Warren Buffett');
console.log('✓ Exactly one Warren Buffett persona exists.');

console.log('--- 3. Verifying Benjamin Graham vs Paul Graham ---');
const paulGraham = seats.find(s => s.name.toLowerCase().includes('paul graham') || s.slug === 'paul-graham');
const benGraham = seats.find(s => s.name === 'Benjamin Graham' || s.slug === 'benjamin-graham');
if (paulGraham) throw new Error('Paul Graham should NOT be in active seats!');
if (!benGraham) throw new Error('Benjamin Graham must be in active seats!');
console.log(`✓ Benjamin Graham is registered (key: ${benGraham.key}), Paul Graham is removed from active council.`);

console.log('--- 4. Verifying No Non-Finance Advisors in Active Council ---');
const nonFinance = ['bezos', 'hormozi', 'martell', 'garyvee', 'wickman', 'naval', 'sanchez', 'blakely', 'leila', 'musk'];
for (const nf of nonFinance) {
  if (seats.find(s => s.key === nf)) throw new Error(`Non-finance advisor ${nf} found in active seats!`);
}
console.log('✓ All original non-finance advisors removed from active council.');

console.log('--- 5. Verifying All Knowledge File Paths & System Prompts ---');
for (const s of seats) {
  const sys = systemFor(s.key);
  if (!sys || !sys[0] || sys[0].text.length < 500) {
    throw new Error(`Knowledge base for ${s.name} (${s.key}) failed to load properly! Length: ${sys?.[0]?.text?.length}`);
  }
}
console.log('✓ Knowledge bases and agent prompts load for all 20 personas.');

console.log('--- 6. Verifying Antigravity Configuration Files ---');
if (!fs.existsSync('AGENTS.md')) throw new Error('Missing root AGENTS.md');
if (!fs.existsSync('.agents/skills/finance-council/SKILL.md')) throw new Error('Missing .agents/skills/finance-council/SKILL.md');
console.log('✓ AGENTS.md and .agents/skills/finance-council/SKILL.md are in place.');

console.log('\nALL VERIFICATIONS PASSED SUCCESSFULLY!');
