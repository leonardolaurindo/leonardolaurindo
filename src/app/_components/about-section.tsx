import Image from "next/image";
import Link from "next/link";
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
    YoutTubeIcon
} from '@/components/social-icons'

function SocialLink({ icon: Icon, ...props }: any) {
    return (
        <Link className="group -m-1 p-1" {...props} >
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    );
}

export default function AboutSection() {
    return (

        <section id='about' className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1f]">
                <div className="lg:pl-20 flex justify-center">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image src="/avatar.webp" alt="Leonardo Laurindo" width={400} height={400} quality="100" priority={true}
                            className="animate-fadeaspect-square rotate-3 rounded-lg dark:bg-zinc-800 bg-zinc-100 object-cover mt-8" />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2 text-justify">
                    <div className="flex flex-row">
                        <Image
                            src="/waving-hand.gif"
                            alt="Hello"
                            width={40}
                            height={40}
                            className="m-2 w-15 h-15 sm:w-10 sm:h-10 item"
                            unoptimized
                        />
                        <h1 className="flex font-heading text-4xl lg:text-5xl">Oi, sou Leonardo!</h1>
                    </div>
                    <p className="mt-5 text-base text-muted-foreground ">
                        Desenvolvedor Full Stack apaixonado por criar experiências web envolventes. Com um histórico diversificado em projetos desafiadores, utilizo tecnologias modernas como Next.js, Node.js, TypeScript, Tailwind CSS, PHP e MySQL para desenvolver aplicações de alto desempenho.
                        Meu foco principal é criar interfaces intuitivas e impactantes, aplicando princípios de UI/UX para maximizar a conversão de usuários. Ao longo da minha jornada, tive a oportunidade de trabalhar em projetos variados, desde o desenvolvimento de sistemas internos até a criação de landing pages otimizadas para SEO.
                        Como entusiasta de novas tecnologias, busco constantemente me atualizar e compartilhar conhecimentos com a comunidade de desenvolvedores.
                    </p>
                    {/* <div className="mt-6 flex justify-center lg:justify-start gap-6">
                        <SocialLink href="#" icon={InstagramIcon} />
                        <SocialLink href="#" icon={GitHubIcon} />
                        <SocialLink href="#" icon={LinkedInIcon} />
                        <SocialLink href="#" icon={TwitterIcon} />
                        <SocialLink href="#" icon={YoutTubeIcon} />
                    </div> */}
                </div>
            </div>
        </section>
    )
}