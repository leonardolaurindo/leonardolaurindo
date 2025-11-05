import { Metadata } from 'next'

export const siteConfig = {
  // 🔹 Identidade Base
  name: 'Leonardo Laurindo',
  shortName: 'Leo Laurindo',
  tagline:
    'Desenvolvedor Full Stack Especializado em Soluções Web de Alta Performance',

  // 🔹 Descrição otimizada (160 caracteres para SERP)
  description:
    'Desenvolvedor Full Stack especializado em React, Next.js e Node.js. Criamos soluções web de alta performance para programadores e empresas no Cariri (Juazeiro, Crato, Barbalha) e região.',

  // 🔹 URLs e Assets
  url: 'https://leonardolaurindo.com.br',
  ogImage: '/og-image.webp',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  favicon: '/favicon.png',

  // 🔹 Contato
  email: 'contato@leonardolaurindo.com.br',
  phone: '+5588981907153',

  // 🔹 Localização - Cariri Cearense (origem, mas atendemos remoto Brasil)
  location: {
    primary: 'Juazeiro do Norte, CE, Brasil',
    secondary: [
      'Crato, CE',
      'Barbalha, CE',
      'Cariri, CE',
      'Fortaleza, CE',
      'Missão Velha, CE',
      'Brejo Santo, CE',
      'Ceará, Brasil',
    ],
    latitude: '-7.2104',
    longitude: '-39.2678',
    region: 'Ceará',
    country: 'Brasil',
  },

  // 🔹 Redes Sociais e Verificação
  social: {
    github: 'https://github.com/leonardolaurindo',
    linkedin: 'https://linkedin.com/in/leonardolaurindo',
    instagram: 'https://instagram.com/leonardolaurindo',
    twitter: 'https://x.com/leonardolaurindo',
  },

  // 🔹 Keywords Estratégicas por Categoria
  keywords: {
    // Nicho: Desenvolvedor Full Stack
    coreKeywords: [
      'desenvolvedor full stack',
      'programador full stack',
      'desenvolvedor web full stack',
      'desenvolvimento full stack',
      'fullstack developer',
    ] as const,

    // Técnologias Frontend
    frontendKeywords: [
      'desenvolvedor react',
      'desenvolvedor next.js',
      'frontend javascript',
      'react expert',
      'next.js specialist',
      'typescript developer',
      'react hooks',
      'server components next.js',
      'app router next.js',
      'componentes react reutilizáveis',
      'seo nextjs',
      'performance web',
    ] as const,

    // Tecnologias Backend
    backendKeywords: [
      'desenvolvedor node.js',
      'desenvolvedor php',
      'backend javascript',
      'api rest',
      'arquitetura backend',
      'banco de dados',
      'mysql developer',
      'servidor node',
      'desenvolvimento backend',
    ] as const,

    // Serviços - Websites e E-commerce
    serviceKeywords: [
      'criação de sites',
      'desenvolvimento de websites',
      'desenvolvimento de aplicativos web',
      'soluções web personalizadas',
      'otimização seo',
      'landing pages',
      'portais web',
      'sistemas web',
      'aplicações web escaláveis',
      'modernização de sites',
      'refatoração de código',
      'manutenção de sistemas',
      'desenvolvimento wordpress',
      'wordpress customizado',
      'woocommerce development',
      'loja online',
      'e-commerce development',
      'customização wordpress',
      'plugin wordpress',
      'tema wordpress',
    ] as const,

    // Localização - Cariri
    locationKeywords: [
      'desenvolvedor juazeiro do norte',
      'programador juazeiro',
      'desenvolvedor crato',
      'programador cariri',
      'desenvolvedor northeast',
      'dev cariri',
      'agência web cariri',
      'desenvolvedor ceará',
      'dev ceará',
      'programador northeast brasil',
      'desenvolvedor web barbalha',
      'desenvolvedor web região cariri',
    ] as const,

    // Nicho: Programadores
    developerNicheKeywords: [
      'para programadores',
      'para devs',
      'portfolio desenvolvedor',
      'projetos dev',
      'code quality',
      'best practices desenvolvimento',
      'clean code',
      'arquitetura de software',
      'padrões de design',
      'desenvolvimento ágil',
      'code review',
      'desenvolvimento de sistemas',
      'sistemas web',
      'erp desenvolvimento',
      'crm development',
      'sistema de gestão',
      'software personalizados',
      'desenvolvimento customizado',
    ] as const,

    // Performance e UX
    performanceKeywords: [
      'soluções web alta performance',
      'otimização performance web',
      'core web vitals',
      'web performance',
      'progressive web app',
      'pwa development',
      'responsivo web design',
      'user experience optimization',
    ] as const,

    // Long-tail Keywords
    longtailKeywords: [
      'como criar um site em react',
      'melhor framework para desenvolvimento web',
      'desenvolvimento web com next.js',
      'como otimizar site para seo',
      'blog de desenvolvimento web',
      'dicas de desenvolvimento full stack',
      'como fazer landing page que converte',
      'construir portfólio desenvolvedor',
      'técnicas seo para programadores',
      'como criar um site wordpress',
      'montar loja online com woocommerce',
      'sistema de gestão web',
      'desenvolvimento erp personalizado',
      'crm desenvolvimento à medida',
      'site responsivo em react',
      'aplicação web com performance',
    ] as const,

    // Intent comercial
    commercialKeywords: [
      'contratar desenvolvedor',
      'freelancer desenvolvimento web',
      'agência web',
      'orçamento desenvolvimento web',
      'projeto de desenvolvimento',
      'consultoria tech',
      'desenvolvimento web empresa',
    ] as const,
  },

  // 🔹 Expertise e E-E-A-T (Google 2025)
  expertise: {
    experience: '5+ anos de experiência',
    technologies: [
      'React 19',
      'Next.js 15',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'Framer Motion',
      'REST APIs',
      'GraphQL',
    ] as const,
    specialization:
      'Desenvolvimento de aplicações web de alta performance com foco em SEO, UX e Core Web Vitals',
    credentials: [
      'Full Stack Developer',
      'React Specialist',
      'Performance Optimization Expert',
      'SEO Specialist',
    ] as const,
  },

  // 🔹 Metadados de Autor
  authors: [
    {
      name: 'Leonardo Laurindo',
      url: 'https://leonardolaurindo.com.br',
      email: 'contato@leonardolaurindo.com.br',
      image: '/avatar.webp',
    },
  ],

  creator: 'Leonardo Laurindo',
  publisher: 'Leonardo Laurindo',
  createdAt: '2020-01-01',
  updatedAt: new Date().toISOString(),

  // 🔹 Configurações para Robots e Crawlers
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    bingbot: {
      index: true,
      follow: true,
    },
  },

  // 🔹 Verificação e Análise
  verification: {
    google: 'huBrbFnz_xvPlFQjviGoW1Mgm2bWYfZ98uht9351IOI',
    // Adicione outras verificações conforme necessário
  },
} as const

export const generateSiteMetadata = (): Metadata => {
  // 🔹 Agregando todas as keywords em um array único
  const allKeywords = [
    ...siteConfig.keywords.coreKeywords,
    ...siteConfig.keywords.frontendKeywords,
    ...siteConfig.keywords.backendKeywords,
    ...siteConfig.keywords.serviceKeywords,
    ...siteConfig.keywords.locationKeywords,
    ...siteConfig.keywords.developerNicheKeywords,
    ...siteConfig.keywords.performanceKeywords,
    ...siteConfig.keywords.commercialKeywords,
  ]

  return {
    metadataBase: new URL(siteConfig.url),

    // 🔹 Título otimizado (50-60 caracteres para SERP ideal)
    title: {
      default: `${siteConfig.name} | ${siteConfig.tagline} | Juazeiro, Ceará`,
      template: `%s | ${siteConfig.name}`,
    },

    // 🔹 Descrição otimizada (150-160 caracteres)
    description: siteConfig.description,

    // 🔹 Keywords aggregadas
    keywords: allKeywords,

    // 🔹 Autores e Criadores
    authors: [...siteConfig.authors],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,

    // 🔹 Ícones
    icons: {
      icon: siteConfig.favicon,
      shortcut: siteConfig.favicon,
      apple: siteConfig.favicon,
    },

    // 🔹 Web App Manifest
    manifest: '/manifest.json',

    // 🔹 Open Graph (Facebook, LinkedIn, etc)
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: siteConfig.url,
      siteName: `${siteConfig.name} | ${siteConfig.tagline}`,
      title: `${siteConfig.name} | Desenvolvedor Full Stack`,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: `${siteConfig.name} - ${siteConfig.tagline}`,
          type: 'image/webp',
        },
      ],
    },

    // 🔹 Twitter Card (X)
    twitter: {
      card: 'summary_large_image',
      title: `${siteConfig.name} | Desenvolvedor Full Stack`,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: '@leonardolaurindo',
      site: '@leonardolaurindo',
    },

    // 🔹 Robots e Crawlers - Google 2025 Standards
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
        noimageindex: false,
        nositelinkssearchbox: false,
      },
    },

    // 🔹 Verificação de propriedade
    verification: {
      google: siteConfig.verification.google,
    },

    // 🔹 Metadados adicionais para SEO
    alternates: {
      canonical: siteConfig.url,
      languages: {
        'pt-BR': siteConfig.url,
        pt: siteConfig.url,
      },
    },

    // 🔹 Metadados para Enterprise e Local SEO
    other: {
      'google-site-verification': siteConfig.verification.google,
      language: 'Portuguese-br',
      'revisit-after': '7 days',
      author: siteConfig.authors[0].name,
      creator: siteConfig.creator,
      publisher: siteConfig.publisher,
      // 🔹 Geo Tags para Cariri
      'geo.position': `${siteConfig.location.latitude};${siteConfig.location.longitude}`,
      'geo.placename': siteConfig.location.primary,
      'geo.region': `BR-${siteConfig.location.region}`,
      // 🔹 ICBM coordinates (latitude, longitude)
      ICBM: `${siteConfig.location.latitude}, ${siteConfig.location.longitude}`,
      // 🔹 Dublin Core Metadata
      'DC.title': siteConfig.name,
      'DC.description': siteConfig.description,
      'DC.creator': siteConfig.creator,
      'DC.issued': siteConfig.createdAt,
      'DC.modified': siteConfig.updatedAt,
      'DC.language': 'pt-BR',
      // 🔹 Article meta tags (para blog futuro)
      'article:published_time': siteConfig.createdAt,
      'article:modified_time': siteConfig.updatedAt,
      'article:author': siteConfig.authors[0].url,
    },
  }
}
