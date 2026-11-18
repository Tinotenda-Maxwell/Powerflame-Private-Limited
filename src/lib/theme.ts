import 'server-only';
import fs from 'node:fs';
import path from 'node:path';

let tokens: Map<string, string> | undefined;

/**
 * Reads a design token from src/styles/theme.css at build time, so values
 * such as the browser theme-color and the web manifest colours always match
 * the single source of truth.
 */
export function getThemeToken(name: `--${string}`): string {
  if (!tokens) {
    tokens = new Map();
    const css = fs.readFileSync(path.join(process.cwd(), 'src/styles/theme.css'), 'utf8');
    for (const match of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
      const [, key, value] = match;
      if (key && value && !tokens.has(key)) tokens.set(key, value.trim());
    }
  }
  const value = tokens.get(name);
  if (!value) throw new Error(`Design token ${name} not found in theme.css`);
  return value;
}
