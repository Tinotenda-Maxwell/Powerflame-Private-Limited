import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/config/site';
import { services } from '@/content/services';
import { getAllArticles } from '@/lib/articles';

export const dynamic = 'force-static';

/** Generated at build time from every route, service and article */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: 'weekly' | 'monthly' | 'yearly';
  }[] = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/gas-safety', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/articles', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...getAllArticles().map((article) => ({
      url: absoluteUrl(`/articles/${article.slug}`),
      lastModified: new Date(article.updated ?? article.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
