'use client'

import { motion } from 'framer-motion'
import { portfolioContent } from '@/config/content'
import { projects } from '@/config/portfolio'
import { ProjectCard } from '@/components/project-card'
import AnimatedTextCharacter from '@/components/animated-text-character'

export default function PortfolioSection() {
  return (
    <section
      id="port"
      className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24"
    >
      <div className="relative z-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {portfolioContent.heading}
          </motion.h2>
          <AnimatedTextCharacter />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
