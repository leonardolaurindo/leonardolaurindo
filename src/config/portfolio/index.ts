export type ProjectImage = {
  src: string
  alt: string
  caption?: string
}

export type ProjectFeature = {
  title: string
  description: string
}

export type ProjectTech = {
  name: string
  icon?: string
  color?: string
}

export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  features: ProjectFeature[]
  technologies: ProjectTech[]
  images: ProjectImage[]
  links: {
    demo?: string
    github?: string
    contact: string
  }
  metadata: {
    year: string
    category: string
    client?: string
    duration?: string
  }
}

export const patriProject: Project = {
  id: 'patri',
  title: 'Sistema de Patrimônio',
  subtitle: 'Gestão Completa de Ativos Empresariais',
  description:
    'Solução moderna de gestão de patrimônio que simplifica o controle de ativos empresariais. Com recursos avançados e interface intuitiva, a plataforma oferece praticidade e confiabilidade na administração patrimonial.',
  features: [
    {
      title: 'Cadastro e Identificação de Itens',
      description:
        'A aplicação de controle de patrimônio permite o cadastro detalhado de todos os itens que compõem o patrimônio da empresa. Cada item, seja um equipamento de informática, mobiliário ou qualquer outro ativo, pode ser registrado individualmente com suas respectivas informações, como descrição, data de aquisição, valor, entre outros. Além disso, a aplicação gera automaticamente etiquetas QR Code únicas para cada item cadastrado, facilitando sua identificação rápida e precisa.',
    },
    {
      title: 'Controle de Localização e Movimentação',
      description:
        'Uma das funcionalidades destacadas da aplicação é o controle eficiente da localização de cada item do patrimônio. É possível atribuir a localização atual de um item, seja em uma sala específica, com um colaborador responsável ou em qualquer outro espaço da empresa. Além disso, todas as movimentações dos itens são registradas, permitindo um histórico completo de para onde foram movidos e por quem. Essa rastreabilidade é essencial para manter o controle e a organização do patrimônio.',
    },
    {
      title: 'Registro de Manutenções',
      description:
        'A aplicação de controle de patrimônio também oferece recursos para registrar as manutenções realizadas nos itens. Quando um item é retirado para manutenção, seja por motivos de reparo, atualização ou qualquer outro serviço, é possível indicar essa movimentação na aplicação. Da mesma forma, quando o item retorna da manutenção, o registro é atualizado. Esse controle de manutenções permite um acompanhamento preciso do histórico de cada item, facilitando a gestão e a tomada de decisões relacionadas à conservação e ao investimento no patrimônio da empresa.',
    },
  ],
  technologies: [
    { name: 'PHP', color: '#777BB4' },
    { name: 'MySQL', color: '#4479A1' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'Bootstrap', color: '#7952B3' },
  ],
  images: [
    {
      src: '/portfolio/patri/dashboard.jpg',
      alt: 'Dashboard do Sistema de Patrimônio',
      caption: 'Interface principal com visão geral dos ativos',
    },
    {
      src: '/portfolio/patri/dark.jpg',
      alt: 'Modo escuro do sistema',
      caption: 'Interface adaptável com modo escuro',
    },
    {
      src: '/portfolio/patri/workers.jpg',
      alt: 'Gestão de colaboradores',
      caption: 'Controle de responsáveis pelos itens',
    },
    {
      src: '/portfolio/patri/itens.jpg',
      alt: 'Listagem de itens do patrimônio',
      caption: 'Visualização detalhada dos ativos',
    },
    {
      src: '/portfolio/patri/multi_companies.jpg',
      alt: 'Múltiplas empresas',
      caption: 'Suporte para múltiplas organizações',
    },
  ],
  links: {
    contact:
      'https://api.whatsapp.com/send/?phone=5588981907153&text=Ol%C3%A1+Leo%2C+eu+vim+pelo+seu+site%21',
  },
  metadata: {
    year: '2023',
    category: 'Sistema Web',
    duration: '3 meses',
  },
}

export const intersuiteProject: Project = {
  id: 'intersuite',
  title: 'Landing Page InterSuite',
  subtitle: 'Plataforma de Comunicação Empresarial',
  description:
    'Landing Page moderna e responsiva desenvolvida para apresentar a plataforma InterSuite, uma solução completa de comunicação empresarial que revoluciona o atendimento ao cliente.',
  features: [
    {
      title: 'Design Responsivo e Moderno',
      description:
        'A Landing Page do InterSuite foi cuidadosamente projetada com um design responsivo que se adapta perfeitamente a dispositivos de todos os tamanhos, desde smartphones até desktops. A interface moderna e clean proporciona uma experiência visual agradável, utilizando uma paleta de cores profissional e elementos visuais que transmitem confiança e inovação. Cada seção foi pensada para guiar o visitante através de uma jornada informativa e envolvente.',
    },
    {
      title: 'Apresentação Clara da Plataforma',
      description:
        'A landing page apresenta de forma clara e objetiva todas as funcionalidades e benefícios da plataforma InterSuite. Através de seções bem estruturadas, os visitantes podem compreender rapidamente como a solução pode transformar seus processos de comunicação empresarial. As informações são apresentadas de maneira hierárquica, facilitando a absorção do conteúdo e destacando os principais diferenciais competitivos.',
    },
    {
      title: 'Credibilidade Reforçada por Provas Sociais',
      description:
        'Para estabelecer a credibilidade e demonstrar a eficácia do InterSuite, a Landing Page inclui seções dedicadas a provas sociais e depoimentos impactantes. A seção de provas apresenta métricas impressionantes, como o volume de atendimentos realizados, a diversidade de nichos atendidos, a quantidade de mensagens processadas e o número de empresas que confiam na plataforma. Esses dados concretos transmitem confiança aos visitantes. Além disso, a seção de depoimentos exibe relatos autênticos de clientes satisfeitos, compartilhando suas experiências positivas com o InterSuite por meio de um slider envolvente.',
    },
  ],
  technologies: [
    { name: 'Next.js', color: '#000000' },
    { name: 'React', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Tailwind CSS', color: '#06B6D4' },
    { name: 'Framer Motion', color: '#0055FF' },
  ],
  images: [
    {
      src: '/portfolio/intersuite/header.webp',
      alt: 'Header da Landing Page InterSuite',
      caption: 'Seção principal com call-to-action',
    },
    {
      src: '/portfolio/intersuite/canais_section.webp',
      alt: 'Seção de canais de comunicação',
      caption: 'Apresentação dos canais suportados',
    },
    {
      src: '/portfolio/intersuite/contact_section.webp',
      alt: 'Seção de contato',
      caption: 'Formulário de contato integrado',
    },
    {
      src: '/portfolio/intersuite/other_page.webp',
      alt: 'Página adicional',
      caption: 'Páginas complementares do site',
    },
    {
      src: '/portfolio/intersuite/reunion_page.webp',
      alt: 'Página de reuniões',
      caption: 'Funcionalidades de videoconferência',
    },
  ],
  links: {
    demo: 'https://intersuite.com.br',
    contact:
      'https://api.whatsapp.com/send/?phone=5588981907153&text=Ol%C3%A1+Leo%2C+eu+vim+pelo+seu+site%21',
  },
  metadata: {
    year: '2024',
    category: 'Landing Page',
    client: 'InterSuite',
    duration: '2 meses',
  },
}

export const projects = [patriProject, intersuiteProject] as const

export type ProjectId = (typeof projects)[number]['id']
