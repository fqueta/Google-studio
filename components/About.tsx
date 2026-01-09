
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    'Equipe Certificada e Altamente Qualificada',
    'Atendimento Personalizado para cada Cliente',
    'Tecnologias de Última Geração',
    'Foco em Segurança da Informação',
    'Suporte Ágil e Eficiente',
    'Transparência e Ética Profissional'
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-mt-blue/10 skew-x-12 translate-x-1/4" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-slate-800 aspect-square md:aspect-auto md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" 
                alt="Equipe de engenharia Mastertech em ambiente tecnológico" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-mt-orange p-8 rounded-2xl shadow-xl hidden md:block z-20">
              <p className="text-4xl font-black mb-1">10+</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-90">Anos de Mercado</p>
            </div>
          </div>

          <div className="space-y-6">
            <header>
              <h2 className="text-mt-yellow font-bold uppercase tracking-widest text-sm mb-2">Quem Somos</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Sua Parceira em <span className="text-mt-orange">Transformação Digital</span>
              </h3>
            </header>
            <p className="text-slate-400 text-lg">
              A Mastertech nasceu com a missão de simplificar a tecnologia para empresas de todos os tamanhos. Acreditamos que a TI deve ser um motor de crescimento, não uma barreira.
            </p>
            <p className="text-slate-400 text-lg">
              Com uma abordagem centrada no cliente, unimos inovação técnica e visão de negócio para entregar resultados mensuráveis e sustentáveis.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-mt-yellow w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
