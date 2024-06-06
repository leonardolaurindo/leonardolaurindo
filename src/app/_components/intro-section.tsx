import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

export default function IntroSection() {
    return (
        <section id='intro' className='space-y-6 py-8 md:py-12 lg:py-32 relative'>
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/background.webp"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
                <span className='rounded-2xl border border-muted-foreground/45 px-4 py-1.5 text-sm font-medium flex items-center'>
                    Transforme ideias em realidade com soluções web inovadoras 🚀
                </span>
                <h1 className='font-heading text-4xl font-bold md:text-6xl lg:text-7xl'>
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
        </section>
    )
}