import Image from 'next/image'
import { ModeToggle } from './_components/mode-toggle'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="">
      <section id='intro' className='space-y-6 py-8 md:py-12 lg:py-32 relative'>
        {/* SVG - BG */}
        <svg viewBox="0 0 1024 1024" className="absolute left-1/3 top-full md:left-1/2 md:top-1/4 -z-10 h-[16rem] w-[16em] md:h-[54rem] md:w-[54em] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775d6a6" />
              <stop offset="1" stop-color="#e935c255" />
            </radialGradient>
          </defs>
        </svg>
        {/* FIM - SVG - BG */}
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <span className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center'>
            Transforme ideias em realidade com soluções web inovadoras <ModeToggle />
          </span>
          <h1 className='font-heading text-4xl md:text-6xl lg:text-7xl'>
            Leonardo Laurindo
            <br />
            Desenvolvedor <span className='text-primary'>Full Stack</span>
          </h1>
          <p className='max-w-[42] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
            Crio soluções web de alto desempenho, escaláveis e centradas no usuário que impulsionam o sucesso do seu negócio. Com expertise em desenvolvimento Full Stack e uma abordagem personalizada, transformo sua presença online com resultados excepcionais.
          </p>
          <div className='space-x-4'>
            {/* TODO: Lembrar do HREF */}
            <a href='#agendar' className='bg-primary py-2 px-4 text-md text-white rounded shado-lg font-bold'>Agende uma Consulta Gratuita</a>
            <a href='#port' className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>Veja Meu Portfólio</a>
          </div>
        </div>
        <h1 className='text-primary'>
          Leonardo Laurindo - DEV
        </h1>
      </section>
      <section id='about'>
        <h1 className='text-primary '>
          Sobre
        </h1>
      </section>
      <section id='stack'>
        <h1 className='text-primary '>
          Stack
        </h1>
      </section>
      <section id='contact'>
        <h1 className='text-primary '>
          Contato
        </h1>
      </section>
    </main>
  )
}
