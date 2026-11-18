import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { images, type ImageKey } from '@/content/images';
import type { Article } from '@/types';

/**
 * Reads the MDX articles in src/content/articles at build time.
 * To add an article, create a new .mdx file there. The file name becomes the
 * URL slug, e.g. my-new-article.mdx → /articles/my-new-article
 */
const ARTICLES_DIR = path.join(process.cwd(), 'src/content/articles');

const isImageKey = (value: unknown): value is ImageKey =>
  typeof value === 'string' && value in images;

const asString = (value: unknown, field: string, file: string): string => {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value !== 'string' || !value) {
    throw new Error(`Article ${file} is missing the "${field}" frontmatter field`);
  }
  return value;
};

function readArticle(file: string): Article {
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).filter(Boolean).length;
  const imageKey: unknown = data.image;

  return {
    slug: file.replace(/\.mdx$/, ''),
    title: asString(data.title, 'title', file),
    seoTitle: typeof data.seoTitle === 'string' ? data.seoTitle : undefined,
    description: asString(data.description, 'description', file),
    date: asString(data.date, 'date', file),
    updated: data.updated ? asString(data.updated, 'updated', file) : undefined,
    author: asString(data.author, 'author', file),
    category: asString(data.category, 'category', file),
    image: isImageKey(imageKey) ? images[imageKey] : images.articleSwitching,
    relatedServices: Array.isArray(data.relatedServices)
      ? data.relatedServices.filter((s): s is string => typeof s === 'string')
      : [],
    readingTime: `${Math.max(1, Math.round(words / 200))} min read`,
    content,
  };
}

let cache: Article[] | undefined;

/** All articles, newest first */
export function getAllArticles(): Article[] {
  if (!cache) {
    cache = fs
      .readdirSync(ARTICLES_DIR)
      .filter((file) => file.endsWith('.mdx'))
      .map(readArticle)
      .sort((a, b) => b.date.localeCompare(a.date));
  }
  return cache;
}

export const getArticle = (slug: string): Article | undefined =>
  getAllArticles().find((article) => article.slug === slug);
