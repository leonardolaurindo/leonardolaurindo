export const navigation = {
  main: [
    {
      name: 'Início',
      href: '#intro',
      id: 'intro',
    },
    {
      name: 'Sobre',
      href: '#about',
      id: 'about',
    },
    {
      name: 'Habilidades',
      href: '#stack',
      id: 'stack',
    },
    {
      name: 'Portfólio',
      href: '#port',
      id: 'port',
    },
    {
      name: 'Contato',
      href: '#contact',
      id: 'contact',
    },
  ] as const,
  footer: [
    {
      name: 'Política de Privacidade',
      href: '/privacy',
      external: false,
    },
    {
      name: 'Termos de Uso',
      href: '/terms',
      external: false,
    },
  ] as const,
} as const

export const breadcrumbs = {
  home: {
    label: 'Início',
    href: '/',
  },
  portfolio: {
    label: 'Portfólio',
    href: '#port',
  },
} as const
