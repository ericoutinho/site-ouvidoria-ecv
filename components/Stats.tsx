
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Empresas Atendidas", value: "+50" },
    { label: "Manifestações Registradas", value: "+2.500" },
    { label: "Em Conformidade", value: "100%" },
    { label: "Área de Atuação", value: "Todo ES" }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black tracking-tighter">{stat.value}</div>
              <div className="text-xs md:text-sm font-bold opacity-80 uppercase tracking-widest leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
