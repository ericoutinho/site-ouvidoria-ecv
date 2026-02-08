
import React, { useState } from 'react';
import { Lock, Send, CheckCircle } from 'lucide-react';

const OmbudsmanForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-2xl shadow-xl border border-slate-100 text-center space-y-6">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Manifestação Registrada</h3>
        <p className="text-slate-600 font-medium">Seu protocolo foi gerado com sucesso. Nossa equipe entrará em contato em breve, caso tenha fornecido dados de contato.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          Enviar outra manifestação
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 animate-slideIn">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Tipo de manifestação *</label>
          <div className="grid grid-cols-2 gap-3">
            {['Denúncia', 'Reclamação', 'Solicitação de serviço', 'Dúvida / Informação'].map((type) => (
              <label key={type} className="flex items-center p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                <input type="radio" name="type" required className="w-4 h-4 text-blue-600" />
                <span className="ml-2 text-xs font-bold text-slate-600">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Empresa de vistoria relacionada *</label>
            <input 
              type="text" 
              required 
              placeholder="Nome ou endereço da ECV"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nome (opcional)</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 font-medium" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">E-mail (opcional)</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 font-medium" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Telefone / WhatsApp (opcional)</label>
            <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 font-medium" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Descreva sua manifestação *</label>
            <textarea 
              required 
              rows={4} 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              placeholder="Conte detalhadamente o que aconteceu..."
            ></textarea>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 leading-relaxed flex items-start space-x-2 font-medium">
          <Lock className="w-3.5 h-3.5 mt-0.5 text-blue-600" />
          <span>As informações fornecidas serão utilizadas exclusivamente para fins de ouvidoria, conforme a legislação vigente e a LGPD.</span>
        </div>

        <button 
          type="submit" 
          className="group w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md flex items-center justify-center space-x-2"
        >
          <span>Enviar manifestação</span>
          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default OmbudsmanForm;
