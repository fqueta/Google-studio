
import React from 'react';

const projects = [
  {
    title: 'E-commerce High Performance',
    category: 'Desenvolvimento Web',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop',
    alt: 'Plataforma de e-commerce escalável desenvolvida pela Mastertech'
  },
  {
    title: 'Cloud Migration Enterprise',
    category: 'Infraestrutura Cloud',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
    alt: 'Migração de sistemas legados para ambiente de nuvem híbrida'
  },
  {
    title: 'Cyber Security Shield',
    category: 'Segurança da Informação',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    alt: 'Implementação de protocolos de segurança e firewall corporativo'
  },
  {
    title: 'Network Core 10Gbps',
    category: 'Redes Corporativas',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop',
    alt: 'Estruturação de rede de alto desempenho para escritório corporativo'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-mt-blue font-bold uppercase tracking-widest text-sm mb-3">Cases de Sucesso</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Projetos que Entregam Valor</h3>
            <p className="text-slate-600">Explore alguns dos nossos trabalhos mais recentes e veja como ajudamos nossos clientes a superar desafios tecnológicos.</p>
          </div>
          <div className="mt-8 md:mt-0">
             <button className="text-mt-blue font-bold hover:underline" aria-label="Navegar para todos os projetos do portfólio">Ver Todos os Projetos</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <article key={idx} className="group relative overflow-hidden rounded-2xl bg-white shadow-md">
              <div className="w-full h-64 bg-slate-200 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-mt-yellow text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                <h4 className="text-white text-xl font-bold">{project.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
