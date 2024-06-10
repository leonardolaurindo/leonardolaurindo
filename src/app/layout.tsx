import type { Metadata } from 'next'
import localFont from 'next/font/local';
import { Inter as FontSants } from 'next/font/google'
import { cn } from '@/lib/utils';
import { GoogleAnalytics } from '@next/third-parties/google'
import { ModeToggle } from './_components/mode-toggle';


import { ThemeProvider } from './_components/theme-provider'

import './globals.css'

const fontSants = FontSants({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontHeading = localFont({
  src: '../assets/fonts/Lato-Bold.ttf',
  variable: '--font-heading'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://leonardolaurindo.com.br'),
  title: 'Leonardo Laurindo | Desenvolvedor Full Stack | Soluções Web de Alta Performance',
  description: 'Desenvolvedor Full Stack especializado em criar soluções web de alta performance usando JavaScript, React, Next.js, Node.js e PHP. Transforme suas ideias em realidade com um desenvolvedor experiente e confiável.',
  keywords: [
    'desenvolvedor full stack', 'soluções web de alta performance', 'JavaScript', 'React', 'Next.js', 'Node.js', 'PHP', 'desenvolvimento web', 'criação de sites', 'desenvolvimento de aplicativos web', 'Leonardo Laurindo'
  ],
  authors: [
    { name: 'Leonardo Laurindo', url: 'https://leonardolaurindo.com.br' }
  ],
  creator: 'Leonardo Laurindo',
  publisher: 'Leonardo Laurindo',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Leonardo Laurindo | Desenvolvedor Full Stack | Soluções Web de Alta Performance',
    description: 'Desenvolvedor Full Stack especializado em criar soluções web de alta performance usando JavaScript, React, Next.js, Node.js e PHP. Transforme suas ideias em realidade com um desenvolvedor experiente e confiável.',
    url: 'https://leonardolaurindo.com.br',
    siteName: 'Leonardo Laurindo - Desenvolvedor Full Stack',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Leonardo Laurindo - Desenvolvedor Full Stack'
      }
    ],
    locale: 'pt-BR',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    }
  },
};

export const viewport = {
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSants.variable,
        fontHeading.variable
      )} >

        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-FZRWC8LM21" />
    </html>
  )
}
