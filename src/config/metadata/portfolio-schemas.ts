/**
 * 🎨 Dynamic Portfolio Schemas Generator
 *
 * Gera schemas JSON-LD dinâmicos a partir dos dados do portfólio
 * Implementa Google 2025 standards para melhor visibilidade
 */

import { siteConfig } from './site'
import { projects } from '@/config/portfolio'

/**
 * 🎯 Gera schema para uma página individual de projeto
 * Usado em /portfolio/[id]/page.tsx
 */
export const generateProjectSchema = (projectId: string) => {
  const project = projects.find((p) => p.id === projectId)

  if (!project) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${siteConfig.url}/portfolio/${project.id}`,
    name: project.title,
    description: project.description,
    headline: project.subtitle,
    image: project.images.map((img) => ({
      '@type': 'ImageObject',
      url: img.src.startsWith('http') ? img.src : `${siteConfig.url}${img.src}`,
      description: img.alt,
      caption: img.caption,
    })),

    // 🔹 Autor (E-E-A-T)
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
    },

    // 🔹 Criador e Publisher
    creator: {
      '@type': 'Person',
      name: siteConfig.name,
      image: `${siteConfig.url}/avatar.webp`,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },

    // 🔹 Conteúdo
    articleBody: `${project.description}\n${project.features
      .map((f) => `${f.title}: ${f.description}`)
      .join('\n')}`,

    // 🔹 Tecnologias usadas (keywords)
    keywords: project.technologies.map((t) => t.name).join(', '),

    // 🔹 Datas
    dateCreated: `${project.metadata.year}-01-01`,
    datePublished: `${project.metadata.year}-01-01`,
    dateModified: new Date().toISOString(),

    // 🔹 URL e categorização
    url: `${siteConfig.url}/portfolio/${project.id}`,
    category: project.metadata.category,

    // 🔹 Avaliação (para futuro)
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '1',
    },

    // 🔹 Links relacionados
    mainEntity: {
      '@type': 'Thing',
      name: project.title,
      url: `${siteConfig.url}/portfolio/${project.id}`,
    },
  }
}

/**
 * 🎨 Gera schema para a página de portfólio completa
 * Usado em /portfolio/page.tsx
 */
export const generatePortfolioPageSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}/portfolio`,
    name: 'Portfólio - Projetos em Destaque',
    description:
      'Conheça os projetos desenvolvidos por Leonardo Laurindo. Casos de sucesso em desenvolvimento web, sistemas web, e-commerce e landing pages.',
    url: `${siteConfig.url}/portfolio`,

    // 🔹 Autor
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },

    // 🔹 Items da coleção
    mainEntity: projects.map((project) => ({
      '@type': 'CreativeWork',
      '@id': `${siteConfig.url}/portfolio/${project.id}`,
      name: project.title,
      description: project.description,
      url: `${siteConfig.url}/portfolio/${project.id}`,
      image: project.images[0]?.src.startsWith('http')
        ? project.images[0]?.src
        : `${siteConfig.url}${project.images[0]?.src}`,
      category: project.metadata.category,
      dateCreated: `${project.metadata.year}-01-01`,
    })),

    // 🔹 Contagem de items
    numberOfItems: projects.length,

    // 🔹 Datas
    datePublished: siteConfig.createdAt,
    dateModified: new Date().toISOString(),
  }
}

/**
 * 💼 Gera schema de Service para cada projeto (quando aplicável)
 * Mostra exemplos de serviços que você oferece
 */
export const generatePortfolioAsServiceSchema = () => {
  const serviceExamples = [
    {
      name: 'Sistemas Web Personalizados',
      description:
        'Desenvolvemos sistemas web customizados e escaláveis conforme demonstrado em nosso portfólio',
      example: projects.find((p) => p.metadata.category === 'Sistema Web'),
    },
    {
      name: 'Landing Pages de Alta Conversão',
      description:
        'Landing pages modernas e otimizadas para conversão com design responsivo',
      example: projects.find((p) => p.metadata.category === 'Landing Page'),
    },
  ]

  return serviceExamples
    .filter((service) => service.example)
    .map((service) => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Person',
        name: siteConfig.name,
        url: siteConfig.url,
      },
      areaServed: 'BR',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'CreativeWork',
              name: `Exemplo: ${service.example?.title}`,
              url: `${siteConfig.url}/portfolio/${service.example?.id}`,
            },
          },
        ],
      },
    }))
}

/**
 * 📊 Gera FAQ Schema a partir dos projetos
 * Útil para snippets de featured results no Google
 */
export const generatePortfolioFAQSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quais tipos de projetos você desenvolve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Desenvolvemos diversos tipos de projetos como: ${projects
            .map((p) => p.metadata.category)
            .join(', ')}. Cada um tailored às suas necessidades específicas.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Qual é o tempo médio de desenvolvimento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Nossos projetos levam em média entre ${Math.min(
            ...projects.map((p) => parseInt(p.metadata.duration || '0')),
          )} a ${Math.max(
            ...projects.map((p) => parseInt(p.metadata.duration || '0')),
          )} meses, dependendo da complexidade.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Vocês trabalham com tecnologias modernas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim! Utilizamos as tecnologias mais modernas como React 19, Next.js 15, TypeScript, Node.js e outras stack atualizadas para garantir performance e escalabilidade.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como vocês garantem a qualidade do código?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Seguimos as melhores práticas de desenvolvimento, padrões de clean code, testes automatizados e arquitetura escalável em todos os nossos projetos.',
        },
      },
    ],
  }
}

/**
 * 🎓 Gera schema para case studies (pode ser usado com descrições detalhadas)
 */
export const generateProjectCaseStudySchema = (projectId: string) => {
  const project = projects.find((p) => p.id === projectId)

  if (!project) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: `Case Study: ${project.title}`,
    description: project.description,
    image: project.images[0]?.src.startsWith('http')
      ? project.images[0]?.src
      : `${siteConfig.url}${project.images[0]?.src}`,

    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },

    datePublished: `${project.metadata.year}-01-01`,
    dateModified: new Date().toISOString(),

    // 🔹 Artigo acadêmico para demonstrar expertise
    articleSection: 'Case Study',
    keywords: [
      project.metadata.category,
      ...project.technologies.map((t) => t.name),
    ].join(', '),

    // 🔹 Tecnologias como menção
    mentions: project.technologies.map((tech) => ({
      '@type': 'Thing',
      name: tech.name,
    })),
  }
}

/**
 * 🏢 Gera Portfolio como Organization (para autopromoção)
 */
export const generatePortfolioAsOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/portfolio`,
    name: `Portfólio de ${siteConfig.name}`,
    description:
      'Portfolio profissional com projetos de desenvolvimento web, sistemas, landing pages e e-commerce',
    url: `${siteConfig.url}/portfolio`,
    image: `${siteConfig.url}/og-image.webp`,

    founder: {
      '@type': 'Person',
      name: siteConfig.name,
    },

    member: projects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.title,
      url: `${siteConfig.url}/portfolio/${project.id}`,
    })),

    knowsAbout: Array.from(
      new Set(projects.flatMap((p) => p.technologies.map((t) => t.name))),
    ),
  }
}
