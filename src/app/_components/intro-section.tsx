"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export function IntroSection() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <section id='intro' className='relative py-8 md:py-12 lg:py-32'>
                    <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
                        <span className='rounded-2xl border border-muted-foreground/45 px-4 py-1.5 text-sm font-medium flex items-center dark:text-zinc-300'>
                            Transforme ideias em realidade com soluções web inovadoras
                            <Image src="/rocket.gif" width={20} height={20} alt="Rocket" className="ml-2" unoptimized />
                        </span>
                        <h1 className='font-heading text-4xl font-bold md:text-6xl lg:text-7xl  dark:text-zinc-300'>
                            Leonardo Laurindo
                            <br />
                            Desenvolvedor <span className='text-primary font-extrabold'>Full Stack</span>
                        </h1>
                        <p className='max-w-[42] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
                            Crio soluções web de alto desempenho, escaláveis e centradas no usuário que impulsionam o sucesso do seu negócio. Com expertise em desenvolvimento Full Stack e uma abordagem personalizada, transformo sua presença online com resultados excepcionais.
                        </p>
                        <div className='md:flex grid grid-col-2 gap-4'>
                            {/* TODO: Lembrar do HREF */}
                            <a href="https://api.whatsapp.com/send/?phone=5588981907153&text=Ol%C3%A1+Leo%2C+eu+vim+pelo+seu+site%21"
                                target="_blank" className='bg-primary py-2 px-4 text-md text-white rounded shado-lg font-bold'>Me chama no WhatsApp</a>
                            <a href='#port' className='bg-white py-2 px-4 text-md text-primary rounded shado-lg font-bold scroll-smooth'>Veja Meu Portfólio</a>
                        </div>
                    </div>
                </section>
            </motion.div>
        </AuroraBackground>
    );
}
