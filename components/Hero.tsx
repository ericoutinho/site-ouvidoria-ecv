
import React from 'react';
import { ArrowRight, ShieldCheck, Coins } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-20 pb-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 animate-fadeIn">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span>Em conformidade com Detran-ES</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Ouvidoria terceirizada para empresas de <span className="text-blue-600">vistoria veicular</span> credenciadas
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
              Atenda às exigências da portaria de credenciamento do Detran-ES sem custos elevados e sem burocracia. Garantimos conformidade legal, organização e tranquilidade para sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a href="#contato" className="group flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg text-center tracking-tight">
                <span>Solicitar proposta</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/5527996908066" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-2 px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-xl hover:bg-black transition-all shadow-lg text-center tracking-tight">
                <span>Falar com um especialista</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-xl text-slate-500 font-medium pt-6">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-6 h-6 text-green-500" />
                <span>Zero Burocracia</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Coins className="w-6 h-6 text-green-500" />
                <span>Custo Reduzido</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={'/hero-image.jpg'}
                alt="Profissionais em ambiente corporativo"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-slate-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-0 clip-path-hero hidden lg:block"></div>
    </section>
  );
};

export default Hero;
