import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter as FontSants } from 'next/font/google'
import { cn } from '@/lib/utils'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { ModeToggle } from './_components/mode-toggle'

import { ThemeProvider } from './_components/theme-provider'
import { generateSiteMetadata } from '@/config/metadata/site'
import {
  localBusinessSchema,
  personSchemaWithEEAT,
  professionalServiceSchemaV2,
  websiteSchemaV2,
  contactPointSchema,
} from '@/config/metadata/advanced-schemas'

import './globals.css'

const fontSants = FontSants({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = localFont({
  src: '../assets/fonts/Lato-Bold.ttf',
  variable: '--font-heading',
})

export const metadata: Metadata = generateSiteMetadata()

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /**
   * 🎯 Schemas estruturados para SEO - Google 2025
   *
   * Cada schema tem um propósito específico:
   * 1. localBusinessSchema - Local Pack na SERP
   * 2. personSchemaWithEEAT - E-E-A-T (Expertise, Experience, Authority, Trust)
   * 3. professionalServiceSchemaV2 - Catálogo de serviços
   * 4. websiteSchemaV2 - Sitelinks search box
   * 5. contactPointSchema - Múltiplos pontos de contato
   */
  const schemas = [
    localBusinessSchema,
    personSchemaWithEEAT,
    professionalServiceSchemaV2,
    websiteSchemaV2,
    contactPointSchema,
  ]

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        {/* 🔹 JSON-LD Schemas para SEO estruturado */}
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}

        {/* 🔹 Preconnect para melhoria de performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSants.variable,
          fontHeading.variable,
        )}
      >
        {/* 🔹 Google Tag Manager (noscript) - Fallback no início do body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDLDGMLG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>

      {/* 🔹 Google Tag Manager - Carregado após o HTML para não bloquear rendering */}
      <GoogleTagManager gtmId="GTM-TDLDGMLG" />

      {/* 🔹 Google Analytics - Tracking adicional */}
      <GoogleAnalytics gaId="G-FZRWC8LM21" />
    </html>
  )
}
