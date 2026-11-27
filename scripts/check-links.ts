/**
 * Dead-link check for the sources, trip reports and official links of every trek.
 * A dead link is an error; a link that could not be checked is a warning.
 *
 *   npm run check:links
 *   npm run check:links -- <id> ...
 *   npm run check:links -- --no-fail    report only, never exit with an error
 */
import { readAllTrekFolders } from '../src/data/treks';
import { checkTrekLinks } from './lib/links';
import { error, finish, info, parseArgs, warn } from './lib/report';

const { ids, flags } = parseArgs();
for (const folder of readAllTrekFolders(ids)) {
  if (!folder.trek) continue;
  const results = await checkTrekLinks(folder);
  info(`${folder.id}: ${results.length} link(s)`);
  for (const link of results) {
    const where = `${link.usedIn.join(', ')}: ${link.url}`;
    if (link.state === 'dead') error(folder.yamlPath, `Dead link (${link.detail}) in ${where}`);
    if (link.state === 'unknown') warn(folder.yamlPath, `Could not check (${link.detail}) ${where}`);
  }
}
finish('check-links');
if (flags.has('no-fail')) process.exitCode = 0;
