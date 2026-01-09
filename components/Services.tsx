
import React from 'react';
import { Code, Cloud, Settings, ShieldCheck, Search, Database, ArrowRight, Globe, Layers } from 'lucide-react';

const services = [
  {
    title: 'Desenvolvimento de Sites',
    description: 'Criação de sites institucionais, landing pages e portais corporativos modernos, responsivos e otimizados para SEO.',
    icon: Globe,
    color: 'text-mt-blue',
    bg: 'bg-mt-blue/5'
  },
  {
    title: 'Desenvolvimento de Software',
    description: 'Aplicações web e mobile robustas, sistemas sob medida e focados na experiência do usuário final.',
    icon: Code,
    color: 'text-mt-orange',
    bg: 'bg-mt-orange/5'
  },
  {
    title: 'Serviços Tecnológicos',
    description: 'Planejamento e implementação de infraestrutura robusta, modernização de parques tecnológicos e automação de TI.',
    icon: Settings,
    color: 'text-mt-yellow',
    bg: 'bg-mt-yellow/5'
  },
  {
    title: 'Soluções em Cloud',
    description: 'Migração, gerenciamento e otimização de ambientes em nuvem (AWS, Azure, Google Cloud).',
    icon: Cloud,
    color: 'text-mt-blue',
    bg: 'bg-mt-blue/5'
  },
  {
    title: 'Soluções em Segurança',
    description: 'Proteção avançada contra ameaças cibernéticas, firewalls, antivírus corporativo e auditorias de vulnerabilidade.',
    icon: ShieldCheck,
    color: 'text-mt-orange',
    bg: 'bg-mt-orange/5'
  },
  {
    title: 'Soluções em Backup',
    description: 'Estratégias de backup em nuvem e local com alta disponibilidade e planos de recuperação de desastres.',
    icon: Database,
    color: 'text-mt-yellow',
    bg: 'bg-mt-yellow/5'
  },
  {
    title: 'Integração de Sistemas',
    description: 'Conectamos diferentes softwares e APIs para otimizar o fluxo de dados e a produtividade da sua empresa.',
    icon: Layers,
    color: 'text-mt-blue',
    bg: 'bg-mt-blue/5'
  },
  {
    title: 'Consultoria Estratégica',
    description: 'Análise detalhada de processos de TI para redução de custos e aumento de produtividade tecnológica.',
    icon: Search,
    color: 'text-mt-orange',
    bg: 'bg-mt-orange/5'
  },
];

const Services: React.FC = () => {
  const handleCardClick = () => {
    const element = document.getElementById('contact');
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
    <section id="services" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-mt-blue font-bold uppercase tracking-widest text-sm mb-3">Nossas Especialidades</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900">Soluções Completas para sua Empresa</p>
          <div className="h-1.5 w-24 bg-mt-orange mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            Clique em um serviço para solicitar um orçamento ou tirar suas dúvidas com nossos especialistas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              onClick={handleCardClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
              className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${service.bg}`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm flex-grow">
                {service.description}
              </p>
              <div className="flex items-center text-mt-blue font-bold text-xs group-hover:translate-x-2 transition-transform mt-auto">
                Solicitar Orçamento <ArrowRight className="ml-2 w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
