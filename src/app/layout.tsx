import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter as FontSants } from 'next/font/google'
import { cn } from '@/lib/utils'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { ModeToggle } from './_components/mode-toggle'

import { ThemeProvider } from './_components/theme-provider'
import { generateSiteMetadata } from '@/config/metadata/site'
import {
  personSchema,
  websiteSchema,
  professionalServiceSchema,
  organizationSchema,
} from '@/config/metadata/schemas'

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
  const schemas = [
    personSchema,
    websiteSchema,
    professionalServiceSchema,
    organizationSchema,
  ]

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schemas para SEO */}
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSants.variable,
          fontHeading.variable,
        )}
      >
        {/* Google Tag Manager (noscript) - Fallback no início do body */}
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

      {/* Google Tag Manager - Carregado após o HTML */}
      <GoogleTagManager gtmId="GTM-TDLDGMLG" />

      {/* Google Analytics - Tracking adicional */}
      <GoogleAnalytics gaId="G-FZRWC8LM21" />
    </html>
  )
}
