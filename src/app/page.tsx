'use client'
import { useState, useEffect } from 'react';
import { IntroSection } from './_components/intro-section';
import AboutSection from './_components/about-section';
import StackSection from './_components/stack-section';
import PortfolioSection from './_components/portfolio-section';
import FooterSection from './_components/footer-section';
import CtaSection from './_components/cta-section';

export default function Home() {
  const [script, setScript] = useState(null);

  useEffect(() => {
    fetch('/api/getChatScript')
      .then(response => response.text())
      .then(data => {
        setScript(data as any);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      <CtaSection />
      <StackSection />
      <PortfolioSection />
      <CtaSection />
      <FooterSection />
      <div>
        {script ? (
          <script> ${script} </script>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}