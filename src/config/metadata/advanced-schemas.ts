/**
 * 🎯 Advanced JSON-LD Schemas - Google 2025 Standards
 *
 * Esses schemas implementam as melhores práticas:
 * - E-E-A-T (Expertise, Experience, Authority, Trustworthiness)
 * - Local Business SEO para o Cariri
 * - Structured Data para melhor SERP display
 * - Taxonomia de conteúdo
 */

import { siteConfig } from './site'

/**
 * 🏢 Local Business Schema - Juazeiro do Norte
 * Otimizado para aparecer em "Local Pack" (3 resultados de negócios locais)
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#local-business`,
  name: `${siteConfig.name} | Desenvolvimento Web`,
  alternateName: [
    'Leo Laurindo Dev',
    'Leonardo Dev',
    'Laurindo Desenvolvimento',
  ],
  image: `${siteConfig.url}/og-image.webp`,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,

  // 🔹 Localização primária - Juazeiro do Norte
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Juazeiro do Norte',
    addressRegion: 'Ceará',
    postalCode: '',
    addressCountry: 'BR',
  },

  // 🔹 Coordenadas geográficas
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.location.latitude,
    longitude: siteConfig.location.longitude,
  },

  // 🔹 Redes sociais
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
  ],

  // 🔹 Oferta de serviços com preço dinâmico (R$ 800 a R$ 5.000)
  makesOffer: {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    price: {
      '@type': 'PriceSpecification',
      priceLowerBound: '800',
      priceUpperBound: '5000',
      description:
        'Valores variam conforme escopo, complexidade e tempo de desenvolvimento do projeto',
    },
    availability: 'https://schema.org/InStock',
  },
}

/**
 * 👨‍💼 Person Schema - E-E-A-T (Expertise, Experience, Authority, Trustworthiness)
 * Implementa E-E-A-T standards do Google 2025
 */
export const personSchemaWithEEAT = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/#person`,
  name: siteConfig.name,
  givenName: 'Leonardo',
  familyName: 'Laurindo',
  alternateName: ['Leo Laurindo', 'Leonardo Dev'],
  description: `${siteConfig.expertise.specialization}. ${siteConfig.expertise.experience}`,
  image: `${siteConfig.url}/avatar.webp`,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,

  // 🔹 Expertise (Conhecimento especializado)
  knowsAbout: [...siteConfig.expertise.technologies],
  jobTitle: 'Full Stack Developer | React & Next.js Specialist',

  // 🔹 Credenciais e Qualificações
  hasCredential: siteConfig.expertise.credentials.map((cred) => ({
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'professional-certification',
    name: cred,
  })),

  // 🔹 Localização
  workLocation: {
    '@type': 'Place',
    name: siteConfig.location.primary,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Juazeiro do Norte',
      addressRegion: 'Ceará',
      addressCountry: 'BR',
    },
  },

  // 🔹 Áreas de serviço (Authority em região)
  areaServed: siteConfig.location.secondary.map((city) => ({
    '@type': 'City',
    name: city,
  })),

  // 🔹 Serviços oferecidos
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Desenvolvimento Web Full Stack',
        description:
          'Desenvolvimento de aplicações web completas usando React, Next.js e Node.js',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Otimização SEO e Performance',
        description:
          'Otimização para motores de busca e Core Web Vitals seguindo Google 2025 standards',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Consultoria Técnica',
        description:
          'Consultoria em arquitetura de software, padrões de design e melhores práticas',
      },
    },
  ],

  // 🔹 Redes sociais (Trustworthiness)
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
    siteConfig.social.twitter,
  ],

  // 🔹 Portfólio
  owns: {
    '@type': 'WebSite',
    name: `${siteConfig.name} - Portfolio`,
    url: siteConfig.url,
  },
}

/**
 * 🏭 Professional Service Schema - Serviços especializados
 * Implementa padrões para serviços profissionais com E-E-A-T
 */
export const professionalServiceSchemaV2 = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.url}/#professional-service`,
  name: `${siteConfig.name} - Serviços de Desenvolvimento Web`,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/og-image.webp`,

  // 🔹 Informações de contato
  telephone: siteConfig.phone,
  email: siteConfig.email,

  // 🔹 Proprietário (Authority)
  founder: {
    '@type': 'Person',
    name: siteConfig.name,
    email: siteConfig.email,
    image: `${siteConfig.url}/avatar.webp`,
  },

  // 🔹 Endereço
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Juazeiro do Norte',
    addressRegion: 'Ceará',
    addressCountry: 'BR',
  },

  // 🔹 Certificações e Qualificações
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Desenvolvimento Web',
    itemListElement: [
      {
        '@type': 'Offer',
        position: 1,
        itemOffered: {
          '@type': 'Service',
          name: 'Desenvolvimento de Sites Responsivos',
          description:
            'Criação de sites modernos, responsivos e otimizados para SEO com React e Next.js',
          areaServed: 'BR',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: siteConfig.url,
          },
        },
        priceCurrency: 'BRL',
        price: {
          '@type': 'PriceSpecification',
          priceLowerBound: '1200',
          priceUpperBound: '3500',
        },
      },
      {
        '@type': 'Offer',
        position: 2,
        itemOffered: {
          '@type': 'Service',
          name: 'Aplicações Web Escaláveis',
          description:
            'Desenvolvimento de aplicações web full stack com alta performance e arquitetura escalável',
          areaServed: 'BR',
        },
        priceCurrency: 'BRL',
        price: {
          '@type': 'PriceSpecification',
          priceLowerBound: '2000',
          priceUpperBound: '5000',
        },
      },
      {
        '@type': 'Offer',
        position: 3,
        itemOffered: {
          '@type': 'Service',
          name: 'Otimização de Performance e SEO',
          description:
            'Melhoria de Core Web Vitals, velocidade de carregamento e posicionamento em motores de busca',
          areaServed: 'BR',
        },
        priceCurrency: 'BRL',
        price: {
          '@type': 'PriceSpecification',
          priceLowerBound: '800',
          priceUpperBound: '2000',
        },
      },
      {
        '@type': 'Offer',
        position: 4,
        itemOffered: {
          '@type': 'Service',
          name: 'Landing Pages de Conversão',
          description:
            'Criação de landing pages otimizadas para conversão com foco em user experience',
          areaServed: 'BR',
        },
        priceCurrency: 'BRL',
        price: {
          '@type': 'PriceSpecification',
          priceLowerBound: '1000',
          priceUpperBound: '2500',
        },
      },
      {
        '@type': 'Offer',
        position: 5,
        itemOffered: {
          '@type': 'Service',
          name: 'Desenvolvimento WordPress e WooCommerce',
          description:
            'Customização avançada de WordPress, criação de e-commerce com WooCommerce e otimizações',
          areaServed: 'BR',
        },
        priceCurrency: 'BRL',
        price: {
          '@type': 'PriceSpecification',
          priceLowerBound: '1200',
          priceUpperBound: '4000',
        },
      },
      {
        '@type': 'Offer',
        position: 6,
        itemOffered: {
          '@type': 'Service',
          name: 'Sistemas Web Personalizados',
          description:
            'Desenvolvimento de sistemas de gestão (ERP, CRM) e aplicações web à medida para suas necessidades',
          areaServed: 'BR',
        },
        priceCurrency: 'BRL',
        price: {
          '@type': 'PriceSpecification',
          priceLowerBound: '2500',
          priceUpperBound: '5000',
        },
      },
    ],
  },

  // 🔹 Redes sociais e verificação
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
  ],
}

/**
 * 🌐 Website Schema com busca e navegação otimizadas
 * Melhora o display no Google com sitelinks search box
 */
export const websiteSchemaV2 = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/og-image.webp`,

  // 🔹 Autor e publisher
  author: {
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
  },
  publisher: {
    '@type': 'Person',
    name: siteConfig.name,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/favicon.png`,
      width: 192,
      height: 192,
    },
  },

  // 🔹 Idioma
  inLanguage: 'pt-BR',

  // 🔹 Datas de criação e atualização
  datePublished: siteConfig.createdAt,
  dateModified: siteConfig.updatedAt,

  // 🔹 Busca integrada (Sitelinks search box)
  potentialAction: [
    {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    {
      '@type': 'ViewAction',
      name: 'Ver Portfolio',
      target: `${siteConfig.url}/#portfolio`,
    },
  ],
}

/**
 * 🏆 Aggregate Rating - Para futuro uso com reviews
 * Estrutura para exibir ratings na SERP
 */
export const aggregateRatingSchema = {
  '@type': 'AggregateRating',
  '@context': 'https://schema.org',
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
  ratingCount: '1',
  reviewCount: '1',
}

/**
 * 📊 Breadcrumb Navigation - Para melhorar navegação no Google
 */
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; href: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.href.startsWith('http')
      ? item.href
      : `${siteConfig.url}${item.href}`,
  })),
})

/**
 * 🎨 Creative Work - Portfólio projects
 */
export const generatePortfolioProjectSchema = (project: {
  title: string
  description: string
  image: string
  url: string
  technologies: string[]
  year: number
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  description: project.description,
  image: project.image,
  url: project.url,
  author: {
    '@type': 'Person',
    name: siteConfig.name,
  },
  dateCreated: `${project.year}-01-01`,
  keywords: project.technologies.join(', '),
})

/**
 * 📱 Contact Point Schema - Múltiplos pontos de contato
 */
export const contactPointSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPoint',
  '@id': `${siteConfig.url}/#contact`,
  contactType: 'Customer Service',
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: siteConfig.location.secondary,
  availableLanguage: 'Portuguese',
}

/**
 * 🗺️ Geo Schema - Local targeting para Cariri
 * Melhora visibilidade em buscas locais
 */
export const geoLocationSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeoShape',
  name: 'Cariri Cearense',
  box: '-7.5 -39.5 -6.8 -39.0', // Aproximação do Cariri
}

/**
 * 🎓 Educational Organization (para futuro conteúdo educacional)
 */
export const educationalContentSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Desenvolvimento Web Full Stack',
  description: 'Aprenda desenvolvimento web com React, Next.js e Node.js',
  author: {
    '@type': 'Person',
    name: siteConfig.name,
  },
  provider: {
    '@type': 'Organization',
    name: `${siteConfig.name} - Desenvolvimento Web`,
    url: siteConfig.url,
  },
}
