import IntroSection from './_components/intro-section'
import AboutSection from './_components/about-section'
import StackSection from './_components/stack-section'
import ContacSection from './_components/contact-section'
import PortfolioSection from './_components/portfolio-section'

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      <StackSection />
      <PortfolioSection />
      <ContacSection />
    </main>
  )
}
