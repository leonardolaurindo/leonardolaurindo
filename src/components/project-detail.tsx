'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
import {
  ExternalLinkIcon,
  CalendarIcon,
  PersonIcon,
  ArrowLeftIcon,
  ClockIcon,
  CodeIcon,
  GearIcon,
} from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'

interface ProjectDetailProps {
  project: Project
  isModal?: boolean
}

export function ProjectDetail({
  project,
  isModal = false,
}: ProjectDetailProps) {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className={isModal ? 'bg-background' : 'min-h-screen bg-background'}>
      {/* Header com botão voltar - apenas se não for modal */}
      {!isModal && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
        >
          <div className="container py-4">
            <Button
              variant="ghost"
              onClick={handleGoBack}
              className="inline-flex items-center gap-2 hover:bg-muted"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Voltar
            </Button>
          </div>
        </motion.div>
      )}

      <div className={`${isModal ? 'px-4 py-8 md:px-8' : 'container py-8'}`}>
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Badge className="bg-black dark:bg-white text-white dark:text-black border-0 shadow-lg hover:shadow-xl hover:scale-105 font-bold text-sm px-4 py-1.5">
                {project.metadata.category}
              </Badge>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="h-4 w-4" />
                <span>{project.metadata.year}</span>
              </div>
              {project.metadata.client && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <PersonIcon className="h-4 w-4" />
                  <span>{project.metadata.client}</span>
                </div>
              )}
              {project.metadata.duration && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ClockIcon className="h-4 w-4" />
                  <span>{project.metadata.duration}</span>
                </div>
              )}
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {project.subtitle}
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, imageIndex) => (
                  <CarouselItem key={imageIndex}>
                    <div className="p-1">
                      <div className="relative overflow-hidden rounded-lg border bg-background shadow-sm">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1200}
                          height={800}
                          className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
                          priority={imageIndex === 0}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                        />
                        {/* Caption overlay */}
                        {image.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <p className="text-white text-sm font-medium">
                              {image.caption}
                            </p>
                          </div>
                        )}
                      </div>
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
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Tecnologias Utilizadas</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + techIndex * 0.1 }}
                >
                  <Badge
                    variant={tech.color ? 'techColored' : 'tech'}
                    className={
                      tech.color
                        ? `
                      relative overflow-hidden shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 font-medium text-sm px-3 py-1
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                      before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
                      ${
                        tech.color
                          ? `bg-[${tech.color}15] border-[${tech.color}30] text-[${tech.color}] hover:bg-[${tech.color}25]`
                          : ''
                      }
                      dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-200
                    `
                        : ''
                    }
                    style={
                      tech.color
                        ? {
                            background: `linear-gradient(135deg, ${tech.color}15 0%, ${tech.color}08 100%)`,
                            borderColor: `${tech.color}30`,
                            color: tech.color,
                            boxShadow: `0 0 20px ${tech.color}20`,
                          }
                        : undefined
                    }
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      <CodeIcon className="h-3 w-3 opacity-70" />
                      {tech.name}
                    </span>
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Principais Funcionalidades</h2>
            <Accordion type="single" collapsible className="w-full">
              {project.features.map((feature, featureIndex) => (
                <AccordionItem
                  key={featureIndex}
                  value={`feature-${featureIndex}`}
                >
                  <AccordionTrigger className="text-left text-lg">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {project.links.demo && (
              <Button asChild size="lg" className="flex-1 max-w-xs">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLinkIcon className="h-5 w-5" />
                  Ver Demonstração
                </a>
              </Button>
            )}

            <Button
              asChild
              variant="outline"
              size="lg"
              className="flex-1 max-w-xs"
            >
              <a
                href={project.links.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLinkIcon className="h-5 w-5" />
                Falar sobre este projeto
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
