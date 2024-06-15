import { Meteors } from "@/components/meteors";
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
    YoutTubeIcon
} from '@/components/social-icons'
import Link from "next/link";

function SocialLink({ icon: Icon, ...props }: any) {
    return (
        <Link className="group -m-1 p-1" {...props} >
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    );
}


export default function FooterSection() {
    return (
        <footer className="w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-violet-500 to-violet-950 transform scale-[0.80] bg-purple-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-background border py-4 h-full overflow-hidden flex flex-col">
                <div className="flex-col w-full mx-auto items-center justify-center">
                    <p className="mx-auto max-w-md text-center leading-relaxed text-zinc-400 dark:text-zinc-500">
                        Leonardo Laurindo - Desenvolvedor Full Stack
                    </p>

                    {/* <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <a className="text-zinc-500 transition hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300" href="#"> About </a>
                        </li>
                    </ul> */}

                    {/* <div className="mt-6 flex justify-center gap-6">
                        <SocialLink href="#" icon={InstagramIcon} />
                        <SocialLink href="#" icon={GitHubIcon} />
                        <SocialLink href="#" icon={LinkedInIcon} />
                        <SocialLink href="#" icon={TwitterIcon} />
                        <SocialLink href="#" icon={YoutTubeIcon} />
                    </div> */}
                </div>
            </div>
        </footer >
    );
}
