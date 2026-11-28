/** Small fetch helpers shared by the pipeline scripts. */

/**
 * Sent with every request. OSM and Wikimedia ask automated clients to identify
 * themselves; set KVALI_USER_AGENT to add a contact address.
 */
export const USER_AGENT = process.env.KVALI_USER_AGENT ?? 'trek-site-data-script/0.1';

export class HttpError extends Error {
  constructor(
    public status: number,
    public url: string,
  ) {
    super(`HTTP ${status} for ${url}`);
  }
}

interface FetchOptions extends RequestInit {
  retries?: number;
  timeoutMs?: number;
}

const sleep = (ms: number) => new Promise((done) => setTimeout(done, ms));

/** fetch with a user agent, a timeout, and retries on network errors, 429 and 5xx. */
export async function fetchRetry(url: string, options: FetchOptions = {}): Promise<Response> {
  const { retries = 3, timeoutMs = 60_000, headers, ...init } = options;
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    if (attempt > 0) await sleep(1500 * 2 ** (attempt - 1));
    try {
      const response = await fetch(url, {
        ...init,
        headers: { 'User-Agent': USER_AGENT, ...headers },
        signal: AbortSignal.timeout(timeoutMs),
      });
      if (response.ok) return response;
      lastError = new HttpError(response.status, url);
      if (response.status !== 429 && response.status < 500) break;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

export async function fetchJson<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const response = await fetchRetry(url, { ...options, headers: { Accept: 'application/json', ...options.headers } });
  return (await response.json()) as T;
}

/** Run `task` over `items`, at most `limit` at a time. Results keep the order of `items`. */
export async function mapLimit<T, R>(items: T[], limit: number, task: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const results = new Array<R>(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await task(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}
