'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useCallback } from 'react'
import { Project } from '@/config/portfolio'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
import {
  ExternalLinkIcon,
  CalendarIcon,
  PersonIcon,
  Cross2Icon,
  ClockIcon,
} from '@radix-ui/react-icons'

interface ProjectModalProps {
  project: Project
}

export function ProjectModal({ project }: ProjectModalProps) {
  const router = useRouter()

  const handleClose = useCallback(() => {
    router.back()
  }, [router])

  // Prevent scroll on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [handleClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md"
      onClick={handleClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed inset-4 md:inset-8 bg-background rounded-xl shadow-2xl border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fixo com botão de fechar */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-background/95 backdrop-blur-sm border-b">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">{project.metadata.category}</Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <span>{project.metadata.year}</span>
              {project.metadata.client && (
                <>
                  <span>•</span>
                  <PersonIcon className="h-4 w-4" />
                  <span>{project.metadata.client}</span>
                </>
              )}
              {project.metadata.duration && (
                <>
                  <span>•</span>
                  <ClockIcon className="h-4 w-4" />
                  <span>{project.metadata.duration}</span>
                </>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="h-8 w-8 rounded-full hover:bg-muted"
          >
            <Cross2Icon className="h-4 w-4" />
          </Button>
        </div>

        {/* Conteúdo scrollable */}
        <div className="h-full overflow-y-auto">
          <div className="p-6 space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {project.subtitle}
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Galeria</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, imageIndex) => (
                    <CarouselItem key={imageIndex}>
                      <ImageDialog
                        src={image.src}
                        alt={image.alt}
                        caption={image.caption}
                      >
                        <div className="relative overflow-hidden rounded-lg border bg-background hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={600}
                            className="object-cover w-full h-64 md:h-80"
                            priority={imageIndex === 0}
                          />
                        </div>
                      </ImageDialog>
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

            {/* Technologies */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Tecnologias</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="px-3 py-1"
                    style={{
                      borderColor: tech.color ? `${tech.color}40` : undefined,
                      color: tech.color || undefined,
                    }}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Funcionalidades</h2>
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
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {project.links.demo && (
                <Button asChild className="flex-1">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Ver Demonstração
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
                  <ExternalLinkIcon className="h-4 w-4" />
                  Falar sobre este projeto
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
