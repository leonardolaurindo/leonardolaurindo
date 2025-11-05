/**
 * 🤖 Robots.txt Dinâmico - Next.js 15
 *
 * Gera robots.txt otimizado para SEO seguindo Google 2025 guidelines
 * Permite crawling focado no portfólio e conteúdo relevante
 */

import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/metadata/site'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/', // Bloqueia APIs
          '/_next/', // Bloqueia arquivos internos do Next.js
          '/admin/', // Bloqueia áreas administrativas (se existir)
          '/private/', // Bloqueia conteúdo privado
          '/temp/', // Bloqueia arquivos temporários
          '/draft/', // Bloqueia rascunhos
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1, // Delay mínimo para Google
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2, // Delay um pouco maior para Bing
      },
    ],

    // 🔹 Sitemap principal
    sitemap: `${baseUrl}/sitemap.xml`,

    // 🔹 Sitemaps adicionais (futuro)
    // host: baseUrl,
  }
}
