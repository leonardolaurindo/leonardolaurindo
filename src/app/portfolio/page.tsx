import { projects } from '@/config/portfolio'
import { generatePageMetadata } from '@/config/metadata/helpers'
import { ProjectCard } from '@/components/project-card'

export const metadata = generatePageMetadata(
  'Portfólio | Projetos em Destaque',
  'Conheça os projetos desenvolvidos por Leonardo Laurindo. Sistemas web, landing pages, aplicações full stack e soluções personalizadas.',
  {
    canonical: 'https://leonardolaurindo.com.br/portfolio',
    keywords: [
      'portfolio desenvolvedor',
      'projetos desenvolvimento web',
      'sistemas web',
      'landing pages',
      'aplicações full stack',
      'case studies',
      'projetos react',
      'projetos next.js',
    ],
  },
)

export default function PortfolioPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Portfólio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Conheça alguns dos projetos que desenvolvi, demonstrando minha expertise
          em tecnologias modernas e soluções personalizadas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}