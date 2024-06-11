import { IntroSection } from './_components/intro-section'
import AboutSection from './_components/about-section'
import StackSection from './_components/stack-section'
import PortfolioSection from './_components/portfolio-section'
import FooterSection from './_components/footer-section'


export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      <StackSection />
      <PortfolioSection />
      <FooterSection />
    </main>
  )
}
