/**
 * Console output for the pipeline scripts. On GitHub Actions, warnings and
 * errors also become annotations on the pull request and lines in the job summary.
 */
import { appendFileSync } from 'node:fs';
import { relative } from 'node:path';

const onGitHub = process.env.GITHUB_ACTIONS === 'true';
let errorCount = 0;
let warningCount = 0;

const short = (file: string) => relative(process.cwd(), file) || file;
const escape = (text: string) => text.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');

function summary(line: string): void {
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${line}\n`);
}

export function error(file: string, message: string): void {
  errorCount++;
  console.error(`  ✖ ${short(file)}: ${message}`);
  if (onGitHub) console.log(`::error file=${short(file)}::${escape(message)}`);
  summary(`- ❌ \`${short(file)}\`: ${message}`);
}

export function warn(file: string, message: string): void {
  warningCount++;
  console.warn(`  ⚠ ${short(file)}: ${message}`);
  if (onGitHub) console.log(`::warning file=${short(file)}::${escape(message)}`);
  summary(`- ⚠️ \`${short(file)}\`: ${message}`);
}

export function info(message: string): void {
  console.log(message);
}

export const counts = () => ({ errors: errorCount, warnings: warningCount });

/** Print the totals and set the exit code: 1 if there were errors. */
export function finish(label: string): void {
  console.log(`\n${label}: ${errorCount} error(s), ${warningCount} warning(s)`);
  if (errorCount > 0) process.exitCode = 1;
}

/** Trek ids and flags from the command line: `script.ts [id ...] [--flag]`. */
export function parseArgs(argv = process.argv.slice(2)): { ids: string[]; flags: Set<string> } {
  const ids = argv.filter((arg) => !arg.startsWith('--'));
  const flags = new Set(argv.filter((arg) => arg.startsWith('--')).map((arg) => arg.slice(2)));
  return { ids, flags };
}
