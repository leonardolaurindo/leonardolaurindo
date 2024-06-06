import type { Metadata } from 'next'
import { Inter as FontSants } from 'next/font/google'
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { GoogleAnalytics } from '@next/third-parties/google'

import { ThemeProvider } from './_components/theme-provider'

import './globals.css'

const fontSants = FontSants({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

export const metadata: Metadata = {
  title: 'Leonardo Laurindo - Desenvolvedor Full Stack',
  description: 'Portfolio, Leonardo Laurindo desenvolvedor full stack, JavaScript, PHP, Node.JS, React, Next...',
  keywords: [
    'desenvolvedor full stack', 'JavaScript', 'PHP', 'Node.JS', 'React', 'Next', 'HTML', 'CSS', 'TailwindCSS', 'Leonardo Laurindo', 'Desenvolvedor', 'Full Stack', 'Front End', 'Back End'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSants.variable,
        fontHeading.variable
      )} >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-FZRWC8LM21" />
    </html>
  )
}
