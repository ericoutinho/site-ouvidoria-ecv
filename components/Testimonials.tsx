
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">O que dizem nossos clientes</h2>
          <p className="text-slate-600 font-medium">Confiança construída através de resultados e transparência.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-10 rounded-2xl relative border border-slate-100 group hover:border-blue-200 transition-colors">
              <Quote className="absolute top-6 right-8 text-blue-600 opacity-10 w-12 h-12 rotate-180" />
              <div className="relative z-10 space-y-6">
                <p className="text-lg text-slate-700 font-medium leading-relaxed italic">
                  "{t.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img src={`https://picsum.photos/seed/${idx + 42}/100/100`} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.author}</h4>
                    <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
