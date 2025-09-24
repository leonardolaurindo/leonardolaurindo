'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Project } from '@/config/portfolio'
import {
  ExternalLinkIcon,
  CalendarIcon,
  PersonIcon,
  ArrowRightIcon,
} from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const router = useRouter()

  const handleViewDetails = () => {
    // Intercepting route - abrirá como modal quando navegando da homepage
    router.push(`/portfolio/${project.id}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full overflow-hidden border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Overlay com informações rápidas */}
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <CalendarIcon className="h-4 w-4" />
                <span>{project.metadata.year}</span>
                <span>•</span>
                <span>{project.metadata.category}</span>
                {project.metadata.client && (
                  <>
                    <span>•</span>
                    <PersonIcon className="h-4 w-4" />
                    <span>{project.metadata.client}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                {project.title}
              </CardTitle>
              <CardDescription className="text-base mt-1">
                {project.subtitle}
              </CardDescription>
            </div>
            <Badge variant="secondary" className="shrink-0">
              {project.metadata.category}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="pb-4">
          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tecnologias */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="outline"
                className="text-xs px-2 py-0.5"
                style={{
                  borderColor: tech.color ? `${tech.color}40` : undefined,
                  color: tech.color || undefined,
                }}
              >
                {tech.name}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="flex gap-3 w-full">
            {project.links.demo && (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLinkIcon className="h-3 w-3" />
                  Demo
                </a>
              </Button>
            )}

            <Button
              onClick={handleViewDetails}
              size="sm"
              className="flex-1 group/btn"
            >
              Ver Detalhes
              <ArrowRightIcon className="h-3 w-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
