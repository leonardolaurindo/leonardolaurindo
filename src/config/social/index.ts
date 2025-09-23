export const socialLinks = {
  whatsapp: {
    url: 'https://api.whatsapp.com/send/?phone=5588981907153&text=Ol%C3%A1+Leo%2C+eu+vim+pelo+seu+site%21',
    label: 'WhatsApp',
    icon: 'whatsapp',
  },
  github: {
    url: 'https://github.com/leonardolaurindo',
    label: 'GitHub',
    icon: 'github',
  },
  linkedin: {
    url: 'https://linkedin.com/in/leonardolaurindo',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  instagram: {
    url: 'https://instagram.com/leonardolaurindo',
    label: 'Instagram',
    icon: 'instagram',
  },
  youtube: {
    url: 'https://youtube.com/@leonardolaurindo',
    label: 'YouTube',
    icon: 'youtube',
  },
  twitter: {
    url: 'https://twitter.com/leonardolaurindo',
    label: 'Twitter/X',
    icon: 'twitter',
  },
} as const

export const contactInfo = {
  phone: {
    number: '+5588981907153',
    formatted: '(88) 98190-7153',
    whatsappUrl:
      'https://api.whatsapp.com/send/?phone=5588981907153&text=Ol%C3%A1+Leo%2C+eu+vim+pelo+seu+site%21',
  },
  email: {
    address: 'contato@leonardolaurindo.com.br',
    subject: 'Contato via Site',
  },
  location: {
    city: 'Fortaleza',
    state: 'Ceará',
    country: 'Brasil',
    timezone: 'America/Fortaleza',
  },
} as const
