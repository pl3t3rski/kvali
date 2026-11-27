/**
 * Research output → draft trek folders (pipeline step 2).
 *
 * A research file holds one YAML document per trek, separated by `---`. Each becomes
 * data/treks/<id>/trek.yaml with `status: draft`. Empty (null) values are dropped, since
 * the schema treats a missing fact as "not known". The research file, and the report
 * next to it if there is one, are copied to research/raw/ for audit.
 *
 *   npm run import:research -- <file.yaml>
 *   npm run import:research -- <file.yaml> --overwrite   replace trek.yaml files that exist
 *
 * An existing trek.yaml is never replaced without --overwrite: it may have been reviewed.
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { parseAllDocuments, stringify } from 'yaml';
import { treksDir } from '../src/data/treks';
import { publishBlockers, trekSchema } from '../src/schema/trek';
import { error, finish, info, parseArgs, warn } from './lib/report';

/** Drop null values, and the keys that held them, all the way down. */
function withoutNulls(value: unknown): unknown {
  if (Array.isArray(value)) return value.filter((item) => item !== null).map(withoutNulls);
  if (value && typeof value === 'object' && !(value instanceof Date)) {
    const entries = Object.entries(value)
      .filter(([, item]) => item !== null)
      .map(([key, item]) => [key, withoutNulls(item)] as const)
      // An object left with nothing in it says nothing.
      .filter(([, item]) => !(item && typeof item === 'object' && !Array.isArray(item) && Object.keys(item).length === 0));
    return Object.fromEntries(entries);
  }
  return value;
}

/**
 * Small repairs for things research files get wrong in a regular way:
 *   - a signal with a colon in it, which YAML reads as a key and a value instead of a sentence
 *   - a source written as a note with the address inside it
 */
function repaired(trek: Record<string, unknown>, note: (message: string) => void): Record<string, unknown> {
  const result = { ...trek };
  if (Array.isArray(result.establishment_signals)) {
    result.establishment_signals = result.establishment_signals.map((signal) =>
      signal && typeof signal === 'object'
        ? Object.entries(signal).map(([key, value]) => `${key}: ${value}`).join(', ')
        : signal,
    );
  }
  if (result.sources && typeof result.sources === 'object') {
    const sources: Record<string, unknown> = {};
    for (const [field, value] of Object.entries(result.sources)) {
      if (typeof value === 'string' && !/^https?:\/\/\S+$/.test(value.trim())) {
        const address = value.match(/https?:\/\/[^\s"')]+/)?.[0];
        if (address) sources[field] = address;
        else note(`sources.${field} holds no web address and was left out: "${value}"`);
      } else {
        sources[field] = value;
      }
    }
    result.sources = sources;
  }
  return result;
}

const { ids: files, flags } = parseArgs();
if (files.length === 0) {
  console.error('Give the research file: npm run import:research -- <file.yaml>');
  process.exit(1);
}

for (const file of files) {
  const documents = parseAllDocuments(readFileSync(file, 'utf8'));
  const treks = documents
    .flatMap((document) => {
      for (const problem of document.errors) error(file, `YAML: ${problem.message}`);
      const content = document.toJS();
      return Array.isArray(content) ? content : [content];
    })
    .filter((trek) => trek && typeof trek === 'object');
  info(`${basename(file)}: ${treks.length} trek(s)`);

  for (const raw of treks) {
    const { id, ...rest } = withoutNulls(raw) as Record<string, unknown>;
    if (typeof id !== 'string') {
      error(file, 'A trek has no id; skipped');
      continue;
    }
    const target = join(treksDir(), id, 'trek.yaml');
    if (existsSync(target) && !flags.has('overwrite')) {
      info(`  ${id}: kept the existing trek.yaml`);
      continue;
    }
    const trek = { id, status: 'draft', ...repaired(rest, (message) => warn(target, message)) };
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, stringify(trek, { lineWidth: 0 }));

    const result = trekSchema.safeParse(trek);
    if (!result.success) {
      for (const issue of result.error.issues) error(target, `${issue.path.join('.')}: ${issue.message}`);
    } else {
      const blockers = publishBlockers(result.data);
      info(`  ${id}: imported as a draft, ${blockers.length} thing(s) to settle before publishing`);
    }
  }

  // Keep the raw research for audit.
  const rawDir = join(process.cwd(), 'research', 'raw');
  mkdirSync(rawDir, { recursive: true });
  copyFileSync(file, join(rawDir, basename(file)));
  for (const report of [file.replace(/\.yaml$/, '.md'), file.replace(/\.yaml$/, '_report.md')]) {
    if (report !== file && existsSync(report)) copyFileSync(report, join(rawDir, basename(report)));
  }
}
if (files.length === 0) warn('research', 'Nothing imported');
finish('import-research');
