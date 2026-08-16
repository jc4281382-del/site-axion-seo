import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ? site.toString().replace(/\/$/, '') : 'https://axion.com.br';
  const blogPosts = await getCollection('blog');

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/solucoes', priority: '0.9', changefreq: 'monthly' },
    { url: '/solucoes/desenvolvimento-de-sites', priority: '0.9', changefreq: 'monthly' },
    { url: '/solucoes/site-institucional-b2b', priority: '0.9', changefreq: 'monthly' },
    { url: '/quanto-custa-criar-um-site', priority: '0.9', changefreq: 'monthly' },
    { url: '/metodologia', priority: '0.8', changefreq: 'monthly' },
    { url: '/diagnostico', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'daily' },
    { url: '/privacidade', priority: '0.3', changefreq: 'yearly' },
    { url: '/termos', priority: '0.3', changefreq: 'yearly' },
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
  ${blogPosts
    .map(
      (post) => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${(post.data.updatedDate || post.data.publishDate).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
