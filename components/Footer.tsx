
import React from 'react';
import { Phone, Smartphone, Mail, ArrowRight, SearchCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 pb-16 border-b border-slate-800">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
              Quer manter sua empresa em conformidade com o Detran-ES de forma simples e econômica?
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Telefone</p>
                  <p className="text-xl font-bold hover:text-blue-400 transition-colors cursor-pointer">0800 2901520</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">WhatsApp</p>
                  <p className="text-xl font-bold hover:text-green-400 transition-colors cursor-pointer">(27) 99690-8066</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">E-mail</p>
                  <p className="text-xl font-bold hover:text-blue-400 transition-colors cursor-pointer">contato@ouvidoriaecv.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-10 rounded-2xl space-y-8 border border-slate-700 h-fit">
            <h3 className="text-2xl font-bold tracking-tight">Solicite um orçamento hoje</h3>
            <p className="text-slate-400 font-medium">Preencha seus dados para receber uma proposta personalizada para sua ECV.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Seu nome completo" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-medium text-white" />
              <input type="text" placeholder="Nome da ECV" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-medium text-white" />
              <input type="email" placeholder="Seu e-mail corporativo" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-medium text-white" />
              <button className="group w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center space-x-2">
                <span>Solicitar proposta agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm space-y-4 md:space-y-0 font-medium">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-800 flex items-center justify-center rounded-lg">
              <SearchCheck className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-300">Ouvidoria ECV</span>
          </div>
          <p>© 2024 Ouvidoria ECV. CNPJ: 34.249.913/0001-68</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
