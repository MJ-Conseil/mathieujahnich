import { ROUTES } from '$lib/constants.js';
import { getPosts } from '$lib/repositories/post.js';
import type { ServerLoadEvent } from '@sveltejs/kit';

export async function GET(event: ServerLoadEvent) {
  const origin = event.url.origin;
  const posts = await getPosts(fetch, { per_page: 40 });

  const postUrls = posts.map((item) => new URL(`${origin}${ROUTES.Blog}/${item.slug}`));
  const routesURL = Object.entries(ROUTES).map((value) => new URL(`${origin}${[value[1]]}`));

  const URLS = [...postUrls, ...routesURL];

  // gérnérer dynamiquement les urls des pages du site
  return new Response(
    `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
      <url>
      <loc>${origin}</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
      </url>

      ${URLS.map((item) => {
      return `<url>
        <loc>${item.toString()}</loc>
        <changefreq>yearly</changefreq>
        </url>`;
    }).join('')}
      </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'max-age=0, s-maxage=3600'
      }
    }
  );
}
