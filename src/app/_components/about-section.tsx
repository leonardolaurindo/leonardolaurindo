import Image from 'next/image'
import Link from 'next/link'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutTubeIcon,
} from '@/components/social-icons'
import { aboutContent } from '@/config/content'

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1f]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={aboutContent.avatar.src}
              alt={aboutContent.avatar.alt}
              width={aboutContent.avatar.width}
              height={aboutContent.avatar.height}
              quality={100}
              priority={true}
              className="animate-fadeaspect-square rotate-3 rounded-lg dark:bg-zinc-800 bg-zinc-100 object-cover mt-8"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-justify">
          <div className="flex flex-row">
            <Image
              src={aboutContent.greeting.icon}
              alt={aboutContent.greeting.iconAlt}
              width={40}
              height={40}
              className="m-2 w-15 h-15 sm:w-10 sm:h-10 item"
              unoptimized
            />
            <h1 className="flex font-heading text-4xl lg:text-5xl">
              {aboutContent.greeting.text}
            </h1>
          </div>
          <p className="mt-5 text-base text-muted-foreground ">
            {aboutContent.description}
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
