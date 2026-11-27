/**
 * Checks every trek folder: the schema and rules for trek.yaml, then the
 * generated files. Exits with an error if anything would break the site.
 * Makes no network requests.
 *
 *   npm run validate
 *   npm run validate -- <id> ...
 */
import { readAllTrekFolders } from '../src/data/treks';
import { error, finish, info, parseArgs, warn } from './lib/report';
import { checkGeneratedFiles } from './lib/rules';

/** Countries that count as "the Caucasus" for the v1 target. */
const CAUCASUS = ['GE', 'AM', 'AZ'];

const { ids } = parseArgs();
const today = new Date().toISOString().slice(0, 10);
const folders = readAllTrekFolders(ids);

for (const folder of folders) {
  info(`${folder.id}${folder.trek ? ` (${folder.trek.status})` : ''}`);
  for (const issue of folder.issues) {
    error(folder.yamlPath, issue.path ? `${issue.path}: ${issue.message}` : issue.message);
  }
  const findings = checkGeneratedFiles(folder, today);
  for (const message of findings.errors) error(folder.yamlPath, message);
  for (const message of findings.warnings) warn(folder.yamlPath, message);
}

const published = folders.flatMap((folder) => (folder.trek?.status === 'published' ? [folder.trek] : []));
const countries = new Set(published.flatMap((trek) => trek.countries));
const caucasus = published.filter((trek) => trek.countries.some((code) => CAUCASUS.includes(code))).length;
info(
  `\n${folders.length} trek folder(s), ${published.length} published. ` +
    `v1 target: ${published.length}/40 treks, ${countries.size}/8 countries, ${caucasus}/1 in the Caucasus.`,
);
finish('validate');
