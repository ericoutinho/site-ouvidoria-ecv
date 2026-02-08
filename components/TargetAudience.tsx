
import React from 'react';

const TargetAudience: React.FC = () => {
  const audiences = [
    { title: "Empresas de Vistoria", desc: "Empresas credenciadas ao Detran-ES que precisam de ouvidoria oficial." },
    { title: "Proprietários de ECVs", desc: "Quem busca conformidade legal absoluta sem dores de cabeça." },
    { title: "Administradores", desc: "Profissionais que desejam reduzir custos operacionais e pessoal." },
    { title: "Empresas Visionárias", desc: "Negócios que valorizam organização, transparência e profissionalismo." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Para quem é a Ouvidoria ECV</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((aud, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto text-xl font-bold">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{aud.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{aud.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
