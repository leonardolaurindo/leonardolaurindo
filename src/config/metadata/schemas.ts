import { siteConfig } from './site'

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: 'Desenvolvedor Full Stack',
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/avatar.webp`,
  sameAs: [
    'https://github.com/leonardolaurindo',
    'https://linkedin.com/in/leonardolaurindo',
    'https://instagram.com/leonardolaurindo',
  ],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PHP',
    'MySQL',
    'Web Development',
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
  ],
  workLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fortaleza',
      addressRegion: 'CE',
      addressCountry: 'BR',
    },
  },
  offers: {
    '@type': 'Offer',
    description: 'Serviços de desenvolvimento web full stack',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${siteConfig.name} - Desenvolvedor Full Stack`,
  description: siteConfig.description,
  url: siteConfig.url,
  author: {
    '@type': 'Person',
    name: siteConfig.name,
  },
  publisher: {
    '@type': 'Person',
    name: siteConfig.name,
  },
  inLanguage: 'pt-BR',
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: `${siteConfig.name} - Serviços de Desenvolvimento Web`,
  description:
    'Serviços especializados em desenvolvimento web full stack, criação de sites, aplicações web e soluções digitais personalizadas.',
  url: siteConfig.url,
  telephone: '+5588981907153',
  email: 'contato@leonardolaurindo.com.br',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fortaleza',
    addressRegion: 'CE',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-3.7318616',
    longitude: '-38.5266704',
  },
  serviceType: 'Web Development',
  areaServed: 'BR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Desenvolvimento Web',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Desenvolvimento de Sites',
          description: 'Criação de sites responsivos e otimizados para SEO',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Aplicações Web',
          description:
            'Desenvolvimento de aplicações web completas e escaláveis',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Landing Pages',
          description: 'Criação de landing pages otimizadas para conversão',
        },
      },
    ],
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Cliente Satisfeito',
    },
    reviewBody:
      'Excelente profissional, entrega projetos de alta qualidade no prazo acordado.',
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: `${siteConfig.name} - Desenvolvimento Web`,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.png`,
  description: siteConfig.description,
  founder: {
    '@type': 'Person',
    name: siteConfig.name,
  },
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fortaleza',
    addressRegion: 'CE',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+5588981907153',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  sameAs: [
    'https://github.com/leonardolaurindo',
    'https://linkedin.com/in/leonardolaurindo',
  ],
}

export const breadcrumbSchema = (
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

export const portfolioSchema = (projects: Array<any>) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Portfólio - Leonardo Laurindo',
  description: 'Projetos em destaque desenvolvidos por Leonardo Laurindo',
  url: `${siteConfig.url}#port`,
  author: {
    '@type': 'Person',
    name: siteConfig.name,
  },
  hasPart: projects.map((project) => ({
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: `${siteConfig.url}${project.images[0]?.src}`,
    dateCreated: project.metadata.year,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  })),
})
