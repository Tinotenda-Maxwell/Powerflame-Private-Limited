#!/usr/bin/env node
/**
 * npm start: preview the built static site in out/ (after `npm run build`).
 * Serves clean URLs (/about → about.html), 404.html, gzip and cache headers,
 * like Netlify, Vercel and Cloudflare Pages do.
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import zlib from 'node:zlib';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'out');
const port = Number(process.env.PORT) || 4321;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.jpg': 'image/jpeg',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2',
};

if (!fs.existsSync(root)) {
  console.error('No out/ folder found. Run `npm run build` first.');
  process.exit(1);
}

const resolve = (urlPath) => {
  const clean = decodeURIComponent(urlPath.split('?')[0]).replace(/\/+$/, '') || '/index';
  const candidates = [clean, `${clean}.html`, path.join(clean, 'index.html')];
  for (const candidate of candidates) {
    const file = path.join(root, path.normalize(candidate));
    if (file.startsWith(root) && fs.existsSync(file) && fs.statSync(file).isFile()) return file;
  }
  return null;
};

const server = http.createServer((req, res) => {
  const file = resolve(req.url ?? '/');
  const target = file ?? path.join(root, '404.html');
  const type = types[path.extname(target)] ?? 'application/octet-stream';
  const compress =
    /text|javascript|json|xml|svg|manifest/.test(type) &&
    /\bgzip\b/.test(req.headers['accept-encoding'] ?? '');
  res.writeHead(file ? 200 : 404, {
    'Content-Type': type,
    'Cache-Control': target.includes(`${path.sep}_next${path.sep}static${path.sep}`)
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=0, must-revalidate',
    ...(compress ? { 'Content-Encoding': 'gzip', Vary: 'Accept-Encoding' } : {}),
  });
  const stream = fs.createReadStream(target);
  (compress ? stream.pipe(zlib.createGzip()) : stream).pipe(res);
});

/** If the port is busy (e.g. a preview is already running), try the next one */
const listen = (p, attemptsLeft = 10) => {
  const onError = (error) => {
    if (error.code === 'EADDRINUSE' && attemptsLeft > 0) {
      console.log(`Port ${p} is in use, trying ${p + 1}…`);
      listen(p + 1, attemptsLeft - 1);
    } else {
      console.error(`Could not start the preview server: ${error.message}`);
      process.exit(1);
    }
  };
  server.once('error', onError);
  server.listen(p);
};

server.on('listening', () => {
  server.removeAllListeners('error');
  console.log(`Serving out/ at http://localhost:${server.address().port}  (Ctrl+C to stop)`);
});

listen(port);
