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
                        <Image src="/avatar.jpg" alt="Leonardo Laurindo" width={400} height={400} quality="95" priority={true}
                            className="aspect-square rotate-3 rounded-lg dark:bg-zinc-800 bg-zinc-100 object-cover" />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2 text-center md:text-start">
                    <div className="flex flex-row">
                        <h1 className="font-heading tex-3xl md:text-4xl lg:text-5xl">@leonardolaurindo</h1>
                        <Image src="/waving-hand.gif" alt="Hello" width={60} height={60} className="ml-2" unoptimized />
                    </div>
                    <p className="mt-5 text-base text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe dignissimos a laboriosam, omnis ad tenetur minus commodi. Quisquam, provident. Provident voluptatum nulla cum. Ea mollitia asperiores soluta accusamus aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio error qui ad illum reiciendis esse aperiam, eaque adipisci omnis deserunt facere, molestias nesciunt perspiciatis possimus. Impedit commodi velit vero!</p>
                    <div className="mt-6 flex justify-center lg:justify-start gap-6">
                        <SocialLink href="#" icon={InstagramIcon} />
                        <SocialLink href="#" icon={GitHubIcon} />
                        <SocialLink href="#" icon={LinkedInIcon} />
                        <SocialLink href="#" icon={TwitterIcon} />
                        <SocialLink href="#" icon={YoutTubeIcon} />
                    </div>
                </div>
            </div>
        </section>
    )
}