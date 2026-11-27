import { createHash } from 'node:crypto';
import type { RouteFeature } from '../../src/data/types';

/** Short hash of a route's geometry. stats.json stores it so stale stats can be detected. */
export function routeHash(route: RouteFeature): string {
  return createHash('sha1').update(JSON.stringify(route.geometry)).digest('hex').slice(0, 16);
}
