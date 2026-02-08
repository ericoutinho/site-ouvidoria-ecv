
import React from 'react';
import { SearchCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-lg shadow-inner">
            <SearchCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-slate-900 font-bold text-lg uppercase tracking-tight">Ouvidoria <span className="text-blue-600">ECV</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre Nós</a>
          <a href="#servicos" className="hover:text-blue-600 transition-colors">Serviços</a>
          <a href="#ouvidoria" className="hover:text-blue-600 transition-colors">Para o Cidadão</a>
          <a href="#contato" className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md">Solicitar Proposta</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
