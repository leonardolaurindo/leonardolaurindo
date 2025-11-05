/**
 * 🗺️ Sitemap Dinâmico - Next.js 15
 *
 * Gera sitemap XML automaticamente focado no portfólio
 * Segue as melhores práticas do Google 2025
 */

import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/metadata/site'
import { projects } from '@/config/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // 🔹 URLs estáticas principais
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // 🔹 URLs dinâmicas do portfólio (foco principal)
  const portfolioUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: new Date(`${project.metadata.year}-01-01`),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // 🔹 URLs de projetos com modal (se aplicável)
  const modalUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}/modal`,
    lastModified: new Date(`${project.metadata.year}-01-01`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 🔹 URLs futuras (blog, contato, etc.)
  const futureUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // 🔹 Combina todas as URLs
  return [...staticUrls, ...portfolioUrls, ...modalUrls, ...futureUrls]
}
