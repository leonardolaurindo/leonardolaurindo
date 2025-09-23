'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ImageDialog } from '@/components/image-dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Project } from '@/config/portfolio'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
        isEven ? '' : 'lg:grid-flow-col-dense'
      }`}
    >
      {/* Image Gallery */}
      <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <Carousel className="w-full">
          <CarouselContent>
            {project.images.map((image, imageIndex) => (
              <CarouselItem key={imageIndex}>
                <div className="p-1">
                  <ImageDialog
                    src={image.src}
                    alt={image.alt}
                    caption={image.caption}
                  >
                    <div className="relative overflow-hidden rounded-lg border bg-background hover:shadow-lg transition-shadow duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 md:h-80 cursor-pointer"
                        priority={index === 0 && imageIndex === 0}
                      />
                    </div>
                  </ImageDialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {project.images.length > 1 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </div>

      {/* Project Info */}
      <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{project.metadata.category}</span>
            <span>•</span>
            <span>{project.metadata.year}</span>
            {project.metadata.client && (
              <>
                <span>•</span>
                <span>{project.metadata.client}</span>
              </>
            )}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
          <p className="text-lg text-muted-foreground">{project.subtitle}</p>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="space-y-3">
          <h4 className="font-semibold">Tecnologias Utilizadas</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                style={{
                  backgroundColor: tech.color ? `${tech.color}20` : undefined,
                  borderColor: tech.color ? `${tech.color}40` : undefined,
                  color: tech.color || undefined,
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Features Accordion */}
        <div className="space-y-3">
          <h4 className="font-semibold">Principais Funcionalidades</h4>
          <Accordion type="single" collapsible className="w-full">
            {project.features.map((feature, featureIndex) => (
              <AccordionItem
                key={featureIndex}
                value={`feature-${featureIndex}`}
              >
                <AccordionTrigger className="text-left">
                  {feature.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {project.links.demo && (
            <Button asChild className="flex-1">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Ver Demo
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}

          <Button asChild variant="outline" className="flex-1">
            <a
              href={project.links.contact}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Falar sobre este projeto
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
