import 'server-only';
import fs from 'node:fs';
import path from 'node:path';

const publicDir = path.join(process.cwd(), 'public');
const cache = new Map<string, boolean>();

/**
 * Checks at build time whether a file exists in /public.
 * Used so that missing photos and videos fall back to branded placeholders
 * instead of broken images.
 */
export function publicFileExists(src: string | undefined): boolean {
  if (!src) return false;
  const cached = cache.get(src);
  if (cached !== undefined) return cached;
  const exists = fs.existsSync(path.join(publicDir, src.replace(/^\//, '')));
  cache.set(src, exists);
  return exists;
}

/** Returns the first path in the list that exists in /public */
export function firstExisting(...sources: string[]): string | undefined {
  return sources.find((src) => publicFileExists(src));
}
