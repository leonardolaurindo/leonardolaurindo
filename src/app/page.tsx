import IntroSection from './_components/intro-section'
import AboutSection from './_components/about-section'
import StackSection from './_components/stack-section'
import PortfolioSection from './_components/portfolio-section'
import { AuroraBackgroundDemo } from '@/components/aurora-background'

export default function Home() {
  return (
    <main className="">
      <AuroraBackgroundDemo />
      <IntroSection />
      <AboutSection />
      <StackSection />
      <PortfolioSection />

    </main>
  )
}
