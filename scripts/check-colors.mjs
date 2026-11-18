#!/usr/bin/env node
/**
 * npm run check:colors
 *
 * Fails if any colour literal (hex, rgb(), hsl(), oklch(), named colours, …)
 * appears in /src outside src/styles/theme.css. All colours must come from
 * design tokens: var(--color-…).
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const srcDir = path.join(root, 'src');
const allowed = new Set([path.join(srcDir, 'styles', 'theme.css')]);
const extensions = new Set(['.css', '.ts', '.tsx', '.js', '.jsx', '.mjs', '.mdx']);

const namedColors = [
  'white',
  'black',
  'red',
  'green',
  'blue',
  'yellow',
  'orange',
  'purple',
  'pink',
  'brown',
  'gray',
  'grey',
  'gold',
  'silver',
  'navy',
  'teal',
  'maroon',
  'olive',
  'lime',
  'aqua',
  'cyan',
  'magenta',
  'fuchsia',
  'crimson',
  'coral',
  'salmon',
  'tomato',
  'beige',
  'ivory',
  'khaki',
  'tan',
  'chocolate',
  'firebrick',
  'darkred',
  'indigo',
  'violet',
  'orchid',
];
const colorProps =
  '(?:color|background(?:-color)?|border(?:-(?:top|right|bottom|left))?(?:-color)?|outline(?:-color)?|fill|stroke|stop-color|box-shadow|text-shadow|caret-color|accent-color|text-decoration-color|column-rule-color)';

const checks = [
  {
    name: 'hex colour',
    regex: /(?<![\w&/-])#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})(?![\w-])/g,
  },
  { name: 'rgb()/rgba()', regex: /\brgba?\s*\(/gi },
  { name: 'hsl()/hsla()', regex: /\bhsla?\s*\(/gi },
  { name: 'hwb()/lab()/lch()/oklab()/oklch()', regex: /\b(?:hwb|lab|lch|oklab|oklch)\s*\(/gi },
  {
    name: 'named colour in CSS property',
    regex: new RegExp(`${colorProps}\\s*:[^;{}]*\\b(?:${namedColors.join('|')})\\b`, 'gi'),
    cssOnly: true,
  },
  {
    name: 'named colour in SVG/JSX attribute',
    regex: new RegExp(
      `\\b(?:fill|stroke|stopColor|stop-color|color)\\s*=\\s*["'{](?:${namedColors.join('|')})["'}]`,
      'gi',
    ),
  },
];

/** Strip comments so documentation examples do not trigger false positives */
const stripComments = (text, ext) => {
  let out = text.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
  // token names such as var(--color-white) are allowed
  out = out.replace(/--[\w-]+/g, (m) => ' '.repeat(m.length));
  if (ext !== '.css')
    out = out.replace(/(^|[^:"'`])\/\/.*$/gm, (m, p1) => p1 + ' '.repeat(m.length - p1.length));
  return out;
};

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return extensions.has(path.extname(entry.name)) ? [full] : [];
  });

const problems = [];
for (const file of walk(srcDir)) {
  if (allowed.has(file)) continue;
  const ext = path.extname(file);
  const text = stripComments(fs.readFileSync(file, 'utf8'), ext);
  for (const check of checks) {
    if (check.cssOnly && ext !== '.css') continue;
    for (const match of text.matchAll(check.regex)) {
      const line = text.slice(0, match.index).split('\n').length;
      problems.push(`${path.relative(root, file)}:${line}  ${check.name}: "${match[0].trim()}"`);
    }
  }
}

if (problems.length) {
  console.error(`\n✖ Found ${problems.length} colour literal(s) outside src/styles/theme.css:\n`);
  for (const problem of problems) console.error(`  ${problem}`);
  console.error(
    '\nUse a design token instead, e.g. var(--color-primary). Add new tokens to theme.css.\n',
  );
  process.exit(1);
}

console.log('✔ No colour literals found outside src/styles/theme.css');
