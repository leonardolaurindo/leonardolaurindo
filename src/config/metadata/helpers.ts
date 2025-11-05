/**
 * 🎯 SEO Metadata Manager
 *
 * Helper para gerenciar todos os metadados e schemas de SEO
 * Centraliza a lógica de geração de metadados seguindo Google 2025 standards
 */

import { Metadata } from 'next'
import { siteConfig } from './site'

/**
 * 🔧 Gera metadata para páginas internas
 * Mantém consistência com o site config
 */
export const generatePageMetadata = (
  title: string,
  description: string,
  options?: {
    keywords?: string[]
    ogImage?: string
    robots?: {
      index?: boolean
      follow?: boolean
      nocache?: boolean
    }
    publishedTime?: string
    modifiedTime?: string
  },
): Metadata => {
  const finalKeywords = options?.keywords ? [...options.keywords] : []

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: finalKeywords,

    robots: {
      index: options?.robots?.index ?? true,
      follow: options?.robots?.follow ?? true,
      nocache: options?.robots?.nocache ?? false,
    },

    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: siteConfig.url,
      title,
      description,
      images: [
        {
          url: options?.ogImage || siteConfig.ogImage,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [options?.ogImage || siteConfig.ogImage],
    },

    other: {
      ...(options?.publishedTime && {
        'article:published_time': options.publishedTime,
      }),
      ...(options?.modifiedTime && {
        'article:modified_time': options.modifiedTime,
      }),
    },
  }
}

/**
 * 🔍 Gera metadados otimizados para artigos/blog
 */
export const generateArticleMetadata = (
  title: string,
  description: string,
  options: {
    author?: string
    publishedTime: string
    modifiedTime: string
    image?: string
    keywords?: string[]
    section?: string
  },
): Metadata => {
  const baseMetadata = generatePageMetadata(title, description, {
    keywords: options.keywords,
    ogImage: options.image,
    publishedTime: options.publishedTime,
    modifiedTime: options.modifiedTime,
  })

  const otherData: Record<string, string> = {
    'article:author': options.author || siteConfig.creator,
    'article:published_time': options.publishedTime,
    'article:modified_time': options.modifiedTime,
  }

  if (options.section) {
    otherData['article:section'] = options.section
  }

  return {
    ...baseMetadata,
    other: otherData,
  }
}

/**
 * 🎨 Gera metadados para projetos/portfolio
 */
export const generateProjectMetadata = (
  projectTitle: string,
  projectDescription: string,
  options: {
    image: string
    year: string
    category: string
    technologies?: string[]
    keywords?: string[]
  },
): Metadata => {
  const projectKeywords = [
    ...((options?.keywords || []) as string[]),
    options.category,
    ...(options.technologies || []),
  ]

  return generatePageMetadata(`${projectTitle} | Projeto`, projectDescription, {
    keywords: projectKeywords,
    ogImage: options.image,
    robots: {
      index: true,
      follow: true,
    },
  })
}

/**
 * 🏢 Combina múltiplos schemas para renderizar no head
 */
export const combineSchemas = (schemas: object[]) => {
  return schemas.map((schema) => JSON.stringify(schema))
}

/**
 * 📱 Gera preload links para performance (Preconnect, DNS Prefetch)
 */
export const getPerformanceHints = () => [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous' as const,
  },
  {
    rel: 'dns-prefetch',
    href: 'https://www.google-analytics.com',
  },
  {
    rel: 'dns-prefetch',
    href: 'https://www.googletagmanager.com',
  },
]

/**
 * 🔗 Validadores úteis para SEO
 */
export const validateMetadata = (metadata: Metadata) => {
  const warnings: string[] = []

  if (
    !metadata.title ||
    (typeof metadata.title === 'string' && metadata.title.length < 30)
  ) {
    warnings.push('Title é muito curto (< 30 caracteres)')
  }

  if (typeof metadata.title === 'string' && metadata.title.length > 60) {
    warnings.push('Title é muito longo (> 60 caracteres)')
  }

  if (!metadata.description || metadata.description.length < 120) {
    warnings.push('Description é muito curta (< 120 caracteres)')
  }

  if (metadata.description && metadata.description.length > 160) {
    warnings.push('Description é muito longa (> 160 caracteres)')
  }

  return warnings
}

/**
 * 🌐 Gera hreflang para suporte multilíngue (futuro)
 */
export const generateHrefLang = (
  currentPath: string,
  languages: Array<{
    lang: string
    href: string
  }>,
) => {
  return languages.map((lang) => ({
    rel: 'alternate',
    hrefLang: lang.lang,
    href: lang.href,
  }))
}
