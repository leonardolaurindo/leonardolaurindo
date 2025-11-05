/**
 * 📱 Manifest.json - PWA & SEO
 *
 * Manifest para Progressive Web App otimizado para SEO
 * Melhora experiência mobile e indexação
 */

import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/metadata/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'portrait-primary',

    // 🔹 Ícones otimizados
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],

    // 🔹 Categorias para app stores
    categories: ['business', 'productivity', 'developer-tools', 'portfolio'],

    // 🔹 Idiomas suportados
    lang: 'pt-BR',

    // 🔹 Configurações PWA
    scope: '/',
    dir: 'ltr',

    // 🔹 Preferências de exibição
    prefer_related_applications: false,

    // 🔹 Metadados adicionais para SEO
    screenshots: [
      {
        src: '/og-image.webp',
        sizes: '1200x630',
        type: 'image/webp',
        form_factor: 'wide',
        label: `${siteConfig.name} - Portfolio`,
      },
    ],
  }
}
