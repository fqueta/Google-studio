import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FileText, Gavel, AlertCircle, HelpCircle, ChevronLeft } from 'lucide-react';

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col pt-20">
      <main className="flex-grow pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-mt-orange/10 rounded-2xl mb-4">
              <Gavel className="w-8 h-8 text-mt-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Termos de <span className="gradient-text">Uso</span>
            </h1>
            <p className="text-slate-500 font-medium">Última atualização: 01 de Abril de 2026</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-mt-blue" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">1. Aceitação dos Termos</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Ao acessar e utilizar o site da Mastertech Soluções em TI, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, você não deve acessar nosso site nem utilizar nossos serviços.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="w-6 h-6 text-mt-yellow" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">2. Serviços Oferecidos</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  A Mastertech fornece serviços de consultoria em TI, desenvolvimento de software personalizado, infraestrutura de rede, cloud computing e suporte técnico. O uso das informações e recursos do nosso site é exclusivamente informativo e para fins de contato comercial.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-mt-orange" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">3. Propriedade Intelectual</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilação de dados, é de propriedade da Mastertech Soluções em TI ou de seus fornecedores de conteúdo, sendo protegido pelas leis de direitos autorais internacionais e brasileiras.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Gavel className="w-6 h-6 text-mt-blue" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">4. Limitação de Responsabilidade</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  A Mastertech não garante que as informações contidas no site sejam completas, precisas ou isentas de erros. Em nenhum caso a Mastertech será responsável por danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou da incapacidade de usar este site ou nossos serviços.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-mt-yellow" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">5. Alterações nos Termos</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Reservamo-nos o direito de revisar estes termos a qualquer momento, sem aviso prévio. Ao utilizar este site após alterações, você concorda em cumprir a versão mais atual de nossos Termos de Uso.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-mt-orange" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">6. Foro Legal</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Estes Termos serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa decorrente destes Termos será resolvida exclusivamente pelo Foro da Comarca de Juiz de Fora - MG.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
              <a 
                href="/"
                className="inline-flex items-center gap-2 text-mt-blue font-bold hover:text-mt-orange transition-colors"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/';
                }}
              >
                <ChevronLeft className="w-5 h-5" />
                Voltar para a Home
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
