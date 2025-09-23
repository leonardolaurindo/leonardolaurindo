import { Metadata } from 'next'

export const siteConfig = {
  name: 'Leonardo Laurindo',
  description:
    'Desenvolvedor Full Stack especializado em criar soluções web de alta performance usando JavaScript, React, Next.js, Node.js e PHP.',
  url: 'https://leonardolaurindo.com.br',
  ogImage: '/og-image.webp',
  keywords: [
    'desenvolvedor full stack',
    'soluções web de alta performance',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'PHP',
    'desenvolvimento web',
    'criação de sites',
    'desenvolvimento de aplicativos web',
    'Leonardo Laurindo',
    'programador',
    'desenvolvedor web',
    'frontend',
    'backend',
    'fullstack',
  ] as const,
  authors: [
    {
      name: 'Leonardo Laurindo',
      url: 'https://leonardolaurindo.com.br',
    },
  ],
  creator: 'Leonardo Laurindo',
  publisher: 'Leonardo Laurindo',
} as const

export const generateSiteMetadata = (): Metadata => ({
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Desenvolvedor Full Stack | Soluções Web de Alta Performance`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: `${siteConfig.name} | Desenvolvedor Full Stack | Soluções Web de Alta Performance`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} - Desenvolvedor Full Stack`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Desenvolvedor Full Stack`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Desenvolvedor Full Stack`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@leonardolaurindo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Adicionar código real
  },
})
