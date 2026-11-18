import type { NextConfig } from 'next';

/**
 * Static export: `npm run build` writes a plain HTML/CSS/JS site to `out/`.
 * Upload that folder to Netlify, Vercel or Cloudflare Pages.
 */
const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    // Inline the (small) CSS into each page so it does not block the first paint
    inlineCss: true,
  },
  images: {
    // Static export cannot run the Next.js image optimiser, so images in
    // /public must already be compressed WebP/AVIF files (see public/images/README.md).
    unoptimized: true,
  },
};

export default nextConfig;
