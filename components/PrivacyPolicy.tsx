import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Shield, Eye, Lock, FileText, ChevronLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col pt-20">
      <main className="flex-grow pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-mt-blue/10 rounded-2xl mb-4">
              <Shield className="w-8 h-8 text-mt-blue" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Política de <span className="gradient-text">Privacidade</span>
            </h1>
            <p className="text-slate-500 font-medium">Última atualização: 01 de Abril de 2026</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-mt-orange" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">1. Introdução</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  A Mastertech Soluções em TI valoriza a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, protegemos e compartilhamos suas informações ao utilizar nosso site e serviços. Ao acessar nossa plataforma, você concorda com as práticas descritas aqui.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-mt-blue" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">2. Informações que Coletamos</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Podemos coletar os seguintes tipos de informações:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li><strong>Dados de Contato:</strong> Nome, e-mail, telefone e empresa, fornecidos voluntariamente através de nossos formulários.</li>
                  <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo de permanência através de cookies e tecnologias similares.</li>
                  <li><strong>Dados de Uso:</strong> Informações sobre como você interage com nossos serviços e portfólio.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-mt-yellow" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">3. Uso das Informações</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Utilizamos seus dados para:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Fornecer e gerenciar nossos serviços de TI e suporte;</li>
                  <li>Responder a solicitações de orçamento e dúvidas técnicas;</li>
                  <li>Enviar comunicações relacionadas ao serviço ou novidades (quando autorizado);</li>
                  <li>Melhorar a experiência do usuário e a segurança de nossa infraestrutura.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-mt-orange" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">4. Segurança de Dados</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais rigorosas para proteger seus dados contra acesso não autorizado, alteração ou destruição. No entanto, lembre-se que nenhum método de transmissão pela internet é 100% seguro.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-mt-blue" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">5. Seus Direitos</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir, excluir ou limitar o tratamento de seus dados pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail de suporte.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-mt-yellow" />
                  <h2 className="text-2xl font-bold text-slate-800 m-0">6. Contato</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:<br />
                  <strong>E-mail:</strong> contato@mastertech.com.br<br />
                  <strong>Endereço:</strong> Juiz de Fora, MG
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

export default PrivacyPolicy;
