import IntroSection from './_components/intro-section'
import AboutSection from './_components/about-section'
import StackSection from './_components/stack-section'
import ContacSection from './_components/contact-section'
import PortfolioSection from './_components/portfolio-section'
import Hero from './_components/test-section'

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      <StackSection />
      <Hero />
      <PortfolioSection />
      <ContacSection />
    </main>
  )
}
