/**
 * Photo licences Kvali may use: CC0, CC BY, CC BY-SA, public domain, and the Unsplash licence.
 * Anything with a NonCommercial or NoDerivatives clause is refused.
 * A note in brackets, such as "(also GFDL)", is ignored.
 */
export function isAllowedLicense(raw: string): boolean {
  const license = raw
    .replace(/\([^)]*\)/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (/\b(nc|nd)\b/.test(license)) return false;
  return (
    /^cc0\b/.test(license) ||
    /^cc by( sa)?( \d\.\d)?( [a-z]{2,6})?$/.test(license) ||
    /^public domain\b/.test(license) ||
    /^pd\b/.test(license) ||
    /^unsplash( license| licence)?$/.test(license)
  );
}
