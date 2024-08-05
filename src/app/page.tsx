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
};

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://www.intersuite.com.br/api/Certificates/getChatScript', options)
      .then(response => response.json())
      .then(response => {
        console.log('Response received:', response); // Log the response
        if (response.status === 'success') {
          setData(response.data);
          console.log('Data set:', response.data); // Log the data being set
        }
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
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}