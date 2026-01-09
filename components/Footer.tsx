
import React from 'react';
import { Cpu, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Cpu className="text-mt-yellow w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight">
                 <span className="text-mt-orange">master</span>
                 <span className="text-white">tech</span>
               </span>
            </div>
            <p className="text-slate-400">
              Soluções inteligentes em TI para elevar o nível tecnológico do seu negócio. Excelência, segurança e inovação.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/mastertechjf/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-mt-orange transition-all hover:-translate-y-1 shadow-lg" 
                aria-label="Siga a Mastertech no Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2 inline-block">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#home" onClick={(e) => handleScroll(e, '#home')} className="hover:text-mt-yellow transition-colors">Início</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-mt-yellow transition-colors">Serviços</a></li>
              <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-mt-yellow transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="hover:text-mt-yellow transition-colors">Portfólio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2 inline-block">Nossos Serviços</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-mt-yellow transition-colors">Dev. de Software</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-mt-yellow transition-colors">Infraestrutura</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-mt-yellow transition-colors">Segurança</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-mt-yellow transition-colors">Suporte TI</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Mastertech Soluções em TI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
