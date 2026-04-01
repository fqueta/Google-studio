import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import SupportButton from './SupportButton';

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <SupportButton />
    </main>
  );
};


export default Home;
