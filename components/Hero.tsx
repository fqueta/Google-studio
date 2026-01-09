
import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, ShieldCheck, Zap, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleManualScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Altura da navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-slate-50 overflow-hidden scroll-mt-24">
      {/* Abstract Background Shapes with Parallax Effect */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-mt-blue opacity-5 rounded-full blur-3xl pointer-events-none will-change-transform"
        style={{ 
          transform: `translate(25%, calc(-50% + ${scrollY * 0.15}px))` 
        }}
        aria-hidden="true"
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-mt-orange opacity-5 rounded-full blur-3xl pointer-events-none will-change-transform"
        style={{ 
          transform: `translate(-25%, calc(50% - ${scrollY * 0.1}px))` 
        }}
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-mt-blue/10 border border-mt-blue/20 text-mt-blue text-sm font-semibold uppercase tracking-wider animate-pulse">
              <Zap className="w-4 h-4 mr-2" />
              Inovação & Soluções em TI
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Transformando Ideias em <span className="text-mt-blue">Tecnologia</span> de <span className="text-mt-orange">Alto Impacto</span>.
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Na Mastertech, desenvolvemos softwares personalizados e soluções de infraestrutura robustas para impulsionar o crescimento do seu negócio no mundo digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#services" 
                onClick={(e) => handleManualScroll(e, '#services')}
                className="flex items-center justify-center px-8 py-4 bg-mt-blue text-white rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                aria-label="Ver todos os serviços de TI da Mastertech"
              >
                Nossos Serviços
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleManualScroll(e, '#contact')}
                className="flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 cursor-pointer"
                aria-label="Entre em contato com a nossa equipe comercial"
              >
                Fale Conosco
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
               <div className="flex items-center text-slate-500 gap-2">
                 <ShieldCheck className="text-mt-yellow w-5 h-5" />
                 <span className="text-sm font-medium">Segurança Avançada</span>
               </div>
               <div className="flex items-center text-slate-500 gap-2">
                 <Terminal className="text-mt-blue w-5 h-5" />
                 <span className="text-sm font-medium">Dev. Full-Stack</span>
               </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 w-full h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-8 flex items-center justify-center group">
               <img 
                 src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
                 alt="Programador Mastertech desenvolvendo código limpo e escalável" 
                 className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700"
                 loading="eager"
               />
               <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-mt-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-mt-blue/40 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <Cpu className="text-white w-12 h-12" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-24 bg-mt-orange rounded-full mx-auto"></div>
                    <p className="text-2xl font-bold text-mt-blue uppercase tracking-widest">Mastertech</p>
                    <p className="text-slate-500 font-medium">Inteligência Tecnológica</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
