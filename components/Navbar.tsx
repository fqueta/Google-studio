
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  // Função para scroll suave manual com offset para a Navbar fixa
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Altura aproximada da navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a 
              href="#home" 
              className="flex items-center text-mt-blue group cursor-pointer" 
              onClick={(e) => handleLinkClick(e, '#home')}
            >
               <Cpu className="w-8 h-8 text-mt-yellow mr-2 group-hover:rotate-12 transition-transform" />
               <span className="text-2xl font-bold tracking-tight">
                 <span className="text-mt-orange">master</span>
                 <span className="text-mt-blue">tech</span>
               </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-700 hover:text-mt-orange font-medium transition-colors cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-mt-orange after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://glpi-glpi.yadvva.easypanel.host/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mt-blue text-white px-6 py-2.5 rounded-xl font-bold hover:bg-mt-orange hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 flex items-center justify-center"
            >
              Suporte
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-slate-700 hover:text-mt-blue transition-colors focus:outline-none bg-slate-100 rounded-lg active:scale-90"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div 
        className={`md:hidden absolute w-full bg-white border-t border-slate-100 transition-all duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-4 text-lg font-bold text-slate-700 hover:text-mt-orange hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-6 px-2">
            <a 
              href="https://glpi-glpi.yadvva.easypanel.host/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-mt-blue text-white px-5 py-5 rounded-2xl font-black text-xl active:scale-95 transition-all shadow-xl shadow-mt-blue/20"
              onClick={closeMenu}
            >
              Solicitar Suporte
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
