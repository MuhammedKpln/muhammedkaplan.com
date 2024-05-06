import { getCollection } from "astro:content";

export async function GET() {
  const siteUrl = import.meta.env.SITE;
  const posts = await getCollection("blog");
  const postsMapped = posts.map((post) => {
    const lastMod = (post.data.pubDate ?? post.data.pubDate).toISOString();
    return `<url><loc>${siteUrl}/${post.slug}/</loc><lastmod>${lastMod}</lastmod></url>`;
  });

  const result = `
        <?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url><loc>${siteUrl}/</loc></url>
                <url><loc>${siteUrl}/blog/</loc></url>
                <url><loc>${siteUrl}/projects/</loc></url>
                <url><loc>${siteUrl}/resume/</loc></url>
                ${postsMapped.join("\n")}
            </urlset>
    `;

  return new Response(result.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
