'use client'
import { useState, useEffect } from 'react';
import { IntroSection } from './_components/intro-section';
import AboutSection from './_components/about-section';
import StackSection from './_components/stack-section';
import PortfolioSection from './_components/portfolio-section';
import FooterSection from './_components/footer-section';
import CtaSection from './_components/cta-section';

export default function Home() {
  const [script, setScript] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/getChatScript')
      .then(response => response.text())
      .then(data => {
        setScript(data);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);
  useEffect(() => {
    if (script) {
      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = script;
  
      // Adiciona o script após um pequeno atraso para garantir que o DOM esteja pronto
      setTimeout(() => {
        document.body.appendChild(scriptElement);
        console.log('Script added to the DOM');
      }, 100);
  
      // Cleanup function to remove the script when the component unmounts or script changes
      return () => {
        document.body.removeChild(scriptElement);
        console.log('Script removed from the DOM');
      };
    }
  }, [script]);

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
          <p>Script loaded and executed.</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}