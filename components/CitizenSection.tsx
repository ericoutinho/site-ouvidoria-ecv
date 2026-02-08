
import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

const CitizenSection: React.FC = () => {
  return (
    <div className="space-y-8 lg:pr-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Este canal é para você, cidadão
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          Se você realizou uma vistoria veicular e precisa registrar uma denúncia, fazer uma reclamação, tirar dúvidas ou solicitar informações, utilize o formulário ao lado.
        </p>
      </div>

      <div className="space-y-6">
        <p className="text-slate-600 leading-relaxed">
          A Ouvidoria ECV atua de forma independente, imparcial e sigilosa, garantindo que sua manifestação seja registrada, analisada e encaminhada corretamente.
        </p>

        <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm flex items-start space-x-4">
          <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
          <p className="font-bold text-slate-800 leading-tight">Seu registro é tratado com seriedade e confidencialidade.</p>
        </div>

        <ul className="space-y-4">
          {[
            "Registro identificado ou anônimo",
            "Solicitações protocoladas e acompanhadas",
            "Conformidade com a portaria do Detran-ES"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CitizenSection;
