'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import styles from './FlameCanvas.module.css';

/* -----------------------------------------------------------------------------
   A lightweight particle flame drawn on <canvas>.
   - Flame tongues + rising embers, blended additively for a warm glow
   - Colours are read from the theme tokens (no colours hard-coded here)
   - Leans gently towards the mouse on desktop
   - Pauses when off-screen or when the tab is hidden
   - Draws a single still frame when reduced motion is preferred
   -------------------------------------------------------------------------- */

type RGB = [number, number, number];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  seed: number;
  kind: 'flame' | 'ember';
}

const MAX_DPR = 1.5;
const MAX_DPR_MOBILE = 1;

/** Convert any CSS colour (hex, rgb, named…) into RGB numbers via a 1×1 canvas */
function cssColorToRgb(value: string, fallback: RGB): RGB {
  const probe = document.createElement('canvas');
  probe.width = probe.height = 1;
  const ctx = probe.getContext('2d', { willReadFrequently: true });
  if (!ctx || !value) return fallback;
  ctx.fillStyle = value;
  ctx.fillRect(0, 0, 1, 1);
  const [r = 0, g = 0, b = 0] = ctx.getImageData(0, 0, 1, 1).data;
  return [r, g, b];
}

const toHex = (n: number) =>
  Math.round(Math.max(0, Math.min(255, n)))
    .toString(16)
    .padStart(2, '0');
const hexA = ([r, g, b]: RGB, alpha: number) =>
  `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(alpha * 255)}`;

/** Pre-render a soft glowing dot once, then reuse it with drawImage (fast) */
function makeSprite(color: RGB, size = 64): HTMLCanvasElement {
  const sprite = document.createElement('canvas');
  sprite.width = sprite.height = size;
  const ctx = sprite.getContext('2d');
  if (!ctx) return sprite;
  const r = size / 2;
  const gradient = ctx.createRadialGradient(r, r, 0, r, r, r);
  gradient.addColorStop(0, hexA(color, 1));
  gradient.addColorStop(0.3, hexA(color, 0.55));
  gradient.addColorStop(1, hexA(color, 0));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return sprite;
}

interface FlameCanvasProps {
  className?: string;
  /** Horizontal position of the flame source, 0–1 (default centre) */
  originX?: number;
  /** Vertical position of the flame source, 0–1 (default near the bottom) */
  originY?: number;
  /** Overall intensity multiplier */
  intensity?: number;
}

export function FlameCanvas({
  className,
  originX = 0.5,
  originY = 0.82,
  intensity = 1,
}: FlameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const styles = getComputedStyle(canvas);
    const token = (name: string) => styles.getPropertyValue(name).trim();
    const red = cssColorToRgb(token('--color-primary'), [128, 128, 128]);
    const amber = cssColorToRgb(token('--color-secondary'), [160, 160, 160]);
    const cream = cssColorToRgb(token('--color-cream'), [240, 240, 240]);
    const sprites = { core: makeSprite(cream), amber: makeSprite(amber), red: makeSprite(red) };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    let width = 0;
    let height = 0;
    let scale = 1;
    const particles: Particle[] = [];
    let wind = 0;
    let targetWind = 0;
    let raf = 0;
    let running = false;
    let visible = true;
    let last = performance.now();
    let time = 0;
    let ready = false;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, finePointer ? MAX_DPR : MAX_DPR_MOBILE);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scale = Math.min(1.6, Math.max(0.75, Math.min(width, height * 1.1) / 420));
    };

    const spawn = (kind: Particle['kind']) => {
      const sx = width * originX;
      const sy = height * originY;
      if (kind === 'flame') {
        const spread = 74 * scale;
        const offset = (Math.random() - 0.5) * spread * (0.6 + Math.random() * 0.4);
        particles.push({
          kind,
          x: sx + offset,
          y: sy + Math.random() * 6,
          vx: -offset * 0.012,
          vy: -(120 + Math.random() * 110) * scale,
          life: 0,
          maxLife: 0.6 + Math.random() * 0.6,
          size: (58 + Math.random() * 52) * scale * (1 - (Math.abs(offset) / spread) * 0.7),
          seed: Math.random() * 1000,
        });
      } else {
        particles.push({
          kind,
          x: sx + (Math.random() - 0.5) * 80 * scale,
          y: sy - Math.random() * 40 * scale,
          vx: (Math.random() - 0.5) * 18,
          vy: -(28 + Math.random() * 46) * scale,
          life: 0,
          maxLife: 2.5 + Math.random() * 3,
          size: (2 + Math.random() * 3.5) * scale,
          seed: Math.random() * 1000,
        });
      }
    };

    const step = (dt: number) => {
      time += dt;
      wind += (targetWind - wind) * Math.min(1, dt * 2.5);
      const flameRate = (finePointer ? 190 : 130) * intensity;
      const emberRate = 9 * intensity;
      const flameCount = flameRate * dt + (Math.random() < (flameRate * dt) % 1 ? 1 : 0);
      for (let i = 0; i < Math.floor(flameCount); i++) spawn('flame');
      if (Math.random() < emberRate * dt) spawn('ember');

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        if (!p) continue;
        p.life += dt;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        const t = p.life / p.maxLife;
        const sway = Math.sin(time * 3 + p.seed) * (p.kind === 'flame' ? 22 : 14);
        p.x += (p.vx + sway * t + wind * (p.kind === 'flame' ? 60 * t : 40)) * dt;
        p.y += p.vy * dt;
        if (p.kind === 'flame') {
          p.vx *= 0.98;
          // pull the flame tongue inward as it rises, to form a tip
          p.x += (width * originX + wind * 30 - p.x) * dt * 1.6 * t;
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      for (const p of particles) {
        const t = p.life / p.maxLife;
        if (p.kind === 'flame') {
          const size = p.size * (1 - t * 0.75);
          const alpha = Math.sin(Math.PI * Math.min(1, t * 1.1)) * 0.26;
          const sprite = t < 0.12 ? sprites.core : t < 0.45 ? sprites.amber : sprites.red;
          ctx.globalAlpha = alpha;
          ctx.drawImage(sprite, p.x - size / 2, p.y - size * 0.7, size, size * 1.4);
        } else {
          const twinkle = 0.6 + 0.4 * Math.sin(time * 9 + p.seed);
          const alpha = (1 - t) * twinkle;
          const size = p.size * 4;
          ctx.globalAlpha = alpha;
          ctx.drawImage(
            t < 0.4 ? sprites.amber : sprites.red,
            p.x - size / 2,
            p.y - size / 2,
            size,
            size,
          );
        }
      }

      // soft base glow under the flame
      const gx = width * originX;
      const gy = height * originY;
      const glow = 230 * scale;
      ctx.globalAlpha = 0.18 + Math.sin(time * 4) * 0.03;
      ctx.drawImage(sprites.red, gx - glow, gy - glow * 0.6, glow * 2, glow * 1.2);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    };

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      step(dt);
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!ready || running || reducedMotion || !visible || document.hidden) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();

    if (reducedMotion) {
      // Simulate briefly, then draw one still frame
      for (let i = 0; i < 90; i++) step(1 / 60);
      draw();
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw();
    });
    resizeObserver.observe(canvas);

    const intersection = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry?.isIntersecting);
      if (visible) start();
      else stop();
    });
    intersection.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relative = (event.clientX - (rect.left + rect.width * originX)) / window.innerWidth;
      targetWind = Math.max(-1, Math.min(1, relative * 2.2));
    };
    const onPointerLeave = () => {
      targetWind = 0;
    };
    if (finePointer && !reducedMotion) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onPointerLeave);
    }

    // Wait until the page has loaded and the browser is idle, so the flame never
    // competes with the first paint or hydration on slow phones
    let idleHandle = 0;
    let timeoutHandle = 0;
    const begin = () => {
      ready = true;
      start();
    };
    const schedule = () => {
      if (typeof window.requestIdleCallback === 'function') {
        idleHandle = window.requestIdleCallback(begin, { timeout: 2500 });
      } else {
        timeoutHandle = globalThis.setTimeout(begin, 1200) as unknown as number;
      }
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => {
      if (idleHandle && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleHandle);
      }
      globalThis.clearTimeout(timeoutHandle);
      window.removeEventListener('load', schedule);
      stop();
      resizeObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [originX, originY, intensity]);

  return <canvas ref={canvasRef} className={cn(styles.canvas, className)} aria-hidden="true" />;
}
