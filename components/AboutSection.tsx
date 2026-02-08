
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={'public/about-image.jpg'}
                alt="Escritório moderno"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <p className="text-4xl font-black mb-1">100%</p>
              <p className="text-sm font-bold opacity-90 leading-snug">Em conformidade com as portarias do Detran-ES</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">Sobre a Ouvidoria ECV</h2>
              <div className="h-1.5 w-16 bg-blue-600 rounded-full"></div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              A Ouvidoria ECV é uma entidade especializada na prestação de serviços terceirizados de ouvidoria para empresas de vistoria veicular credenciadas ao Detran-ES.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Nossa missão é permitir que as empresas cumpram integralmente a portaria de serviço vigente, oferecendo aos usuários um canal transparente e acessível para reclamações, denúncias, dúvidas e solicitações, sem que o vistoriador precise investir em estrutura própria ou equipe dedicada.
            </p>
            
            <div className="bg-slate-50 border-l-4 border-slate-300 p-6 rounded-r-xl">
              <p className="text-lg text-slate-700 font-semibold leading-relaxed">
                Atuamos com foco em eficiência, conformidade legal e qualidade no atendimento, fortalecendo a relação entre a empresa de vistoria e o cidadão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
