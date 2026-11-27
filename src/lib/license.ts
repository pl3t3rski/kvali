/**
 * Photo licences Kvali may use: CC0, CC BY, CC BY-SA and public domain.
 * Anything with a NonCommercial or NoDerivatives clause is refused.
 */
export function isAllowedLicense(raw: string): boolean {
  const license = raw
    .trim()
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ');
  if (/\b(nc|nd)\b/.test(license)) return false;
  return (
    /^cc0\b/.test(license) ||
    /^cc by( sa)?( \d\.\d)?( [a-z]{2,6})?$/.test(license) ||
    /^public domain\b/.test(license) ||
    /^pd\b/.test(license)
  );
}
