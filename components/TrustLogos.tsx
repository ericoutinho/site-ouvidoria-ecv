
import React from 'react';

const TrustLogos: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        {/* <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-12">Quem confia na Ouvidoria ECV</p> */}
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-24">Quem confia na Ouvidoria ECV</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
              <span className="text-xl font-bold text-slate-800">ECV_LOGO_{i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
