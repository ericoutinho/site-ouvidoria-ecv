
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    "Atenda às exigências do Detran-ES",
    "Reduza custos com pessoal e infraestrutura",
    "Atendimento profissional e padronizado",
    "Mais tempo para focar no seu negócio",
    "Melhoria da imagem institucional",
    "Segurança jurídica e organizacional"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-blue-50 rounded-3xl p-12 lg:p-20 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">Benefícios para sua empresa</h2>
              <div className="grid sm:grid-cols-1 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <CheckCircle2 className="w-7 h-7 text-blue-600 flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-700 tracking-tight">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="benefits-image.jpg"
                alt="Equipe profissional"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
            <div className="w-96 h-96 bg-blue-600 rounded-full opacity-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
