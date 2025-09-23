'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import Image from 'next/image'
import { heroContent } from '@/config/content'

export function IntroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <section id="intro" className="relative py-8 md:py-12 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
            <span className="rounded-2xl border border-muted-foreground/45 px-4 py-1.5 text-sm font-medium flex items-center dark:text-zinc-300">
              {heroContent.badge.text}
              <Image
                src={heroContent.badge.icon}
                width={20}
                height={20}
                alt={heroContent.badge.iconAlt}
                className="ml-2"
                unoptimized
              />
            </span>
            <h1 className="font-heading text-4xl font-bold md:text-6xl lg:text-7xl  dark:text-zinc-300">
              {heroContent.heading.name}
              <br />
              {heroContent.heading.role.replace(
                heroContent.heading.highlight,
                '',
              )}
              <span className="text-primary font-extrabold">
                {heroContent.heading.highlight}
              </span>
            </h1>
            <p className="max-w-[42] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {heroContent.description}
            </p>
            <div className="md:flex grid grid-col-2 gap-4">
              <a
                href={heroContent.cta.primary.href}
                target={heroContent.cta.primary.external ? '_blank' : undefined}
                rel={
                  heroContent.cta.primary.external
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="bg-primary py-2 px-4 text-md text-white rounded shado-lg font-bold"
              >
                {heroContent.cta.primary.text}
              </a>
              <a
                href={heroContent.cta.secondary.href}
                className="bg-white py-2 px-4 text-md text-primary rounded shado-lg font-bold scroll-smooth"
              >
                {heroContent.cta.secondary.text}
              </a>
            </div>
          </div>
        </section>
      </motion.div>
    </AuroraBackground>
  )
}
