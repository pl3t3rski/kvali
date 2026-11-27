/**
 * Monthly re-verification report: published treks not verified for 24 months,
 * and dead links. Writes the report as Markdown to reverify-report.md; the
 * reverify workflow turns it into one GitHub issue. Writes nothing if all is well.
 *
 *   npm run reverify
 */
import { rmSync, writeFileSync } from 'node:fs';
import { readAllTrekFolders } from '../src/data/treks';
import { checkTrekLinks } from './lib/links';
import { isStale, STALE_AFTER_MONTHS } from './lib/rules';

const REPORT = 'reverify-report.md';
const today = new Date().toISOString().slice(0, 10);
const stale: string[] = [];
const dead: string[] = [];

for (const folder of readAllTrekFolders()) {
  const trek = folder.trek;
  if (!trek || trek.status !== 'published') continue;
  if (isStale(trek.last_verified, today)) {
    stale.push(`- [ ] \`${trek.id}\` (${trek.name}): last verified ${trek.last_verified}`);
  }
  for (const link of await checkTrekLinks(folder)) {
    if (link.state === 'dead') {
      dead.push(`- [ ] \`${trek.id}\` ${link.usedIn.join(', ')}: ${link.url} (${link.detail})`);
    }
  }
}

rmSync(REPORT, { force: true });
if (stale.length === 0 && dead.length === 0) {
  console.log('Nothing to re-verify.');
} else {
  const sections = [
    stale.length > 0 ? `## Not verified for ${STALE_AFTER_MONTHS} months\n\n${stale.join('\n')}` : '',
    dead.length > 0 ? `## Dead links\n\n${dead.join('\n')}` : '',
  ].filter(Boolean);
  writeFileSync(REPORT, `Found on ${today} by the monthly re-verification job.\n\n${sections.join('\n\n')}\n`);
  console.log(`${stale.length} stale trek(s), ${dead.length} dead link(s). Report written to ${REPORT}.`);
}
