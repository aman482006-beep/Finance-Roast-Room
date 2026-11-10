import fs from 'fs';
import path from 'path';
import * as watch from '../app/lib/watch.mjs';
import { SESSIONS_DIR } from '../app/lib/env.mjs';

const sessionId = process.argv[2];
if (!sessionId) {
  console.log('Usage: node scripts/compile-session.mjs <session-folder-name>');
  process.exit(1);
}

const sessionDir = path.join(SESSIONS_DIR, sessionId);
if (!fs.existsSync(sessionDir)) {
  console.error(`Session directory not found: ${sessionDir}`);
  process.exit(1);
}

const s = watch.getLive(sessionId);
if (!s) {
  console.error(`Could not parse session: ${sessionId}`);
  process.exit(1);
}

const eventsData = {
  id: s.id,
  title: s.title || sessionId,
  prompt: s.st?.decision || '',
  mode: s.mode || 'full',
  status: s.status || 'done',
  events: s.events
};

const eventsPath = path.join(sessionDir, 'events.json');
fs.writeFileSync(eventsPath, JSON.stringify(eventsData, null, 2), 'utf8');
console.log(`Compiled ${s.events.length} events into ${eventsPath}`);
