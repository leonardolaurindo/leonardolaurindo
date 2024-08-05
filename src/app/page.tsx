'use client'
import { useState, useEffect } from 'react';
import { IntroSection } from './_components/intro-section';
import AboutSection from './_components/about-section';
import StackSection from './_components/stack-section';
import PortfolioSection from './_components/portfolio-section';
import FooterSection from './_components/footer-section';
import CtaSection from './_components/cta-section';

const options = {
  method: 'GET',
  headers: { cookie: 'PHPSESSID=28agbr1ba76vidallt3pf6cshl', 'User-Agent': 'insomnia/9.3.3' }
};

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://intersuite.com.br/api/Certificates/getChatScript', options)
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          setData(response.data);
        }
      })
      .catch(err => console.error(err));
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
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}