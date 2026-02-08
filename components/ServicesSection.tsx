
import React from 'react';
import { 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  Globe, 
  FileText, 
  AlertTriangle, 
  HelpCircle, 
  Send, 
  BarChart3, 
  History, 
  ClipboardCheck 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const serviceCategories = [
    {
      title: "Canais de Atendimento",
      items: [
        { label: "Atendimento telefônico", icon: <PhoneCall className="w-4 h-4" /> },
        { label: "Atendimento via WhatsApp", icon: <MessageSquare className="w-4 h-4" /> },
        { label: "Atendimento por e-mail", icon: <Mail className="w-4 h-4" /> },
        { label: "Página web exclusiva", icon: <Globe className="w-4 h-4" /> }
      ],
      mainIcon: <PhoneCall className="w-8 h-8" />
    },
    {
      title: "Gestão de Manifestações",
      items: [
        { label: "Registro de reclamações", icon: <FileText className="w-4 h-4" /> },
        { label: "Recebimento de denúncias", icon: <AlertTriangle className="w-4 h-4" /> },
        { label: "Esclarecimento de dúvidas", icon: <HelpCircle className="w-4 h-4" /> },
        { label: "Encaminhamento de pedidos", icon: <Send className="w-4 h-4" /> }
      ],
      mainIcon: <FileText className="w-8 h-8" />
    },
    {
      title: "Relatórios e Controle",
      items: [
        { label: "Atendimentos realizados", icon: <BarChart3 className="w-4 h-4" /> },
        { label: "Histórico de manifestações", icon: <History className="w-4 h-4" /> },
        { label: "Apoio para auditorias", icon: <ClipboardCheck className="w-4 h-4" /> },
        { label: "Fiscalizações Detran", icon: <ShieldCheck className="w-4 h-4" /> }
      ],
      mainIcon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl text-center mb-16 space-y-4">
        <h2 className="text-4xl font-extrabold tracking-tight">Ouvidoria Terceirizada Completa</h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium">Soluções integradas para atender todas as necessidades da sua ECV.</p>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((service, idx) => (
            <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all group">
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform inline-block">
                {service.mainIcon}
              </div>
              <h3 className="text-xl font-bold mb-8 text-white">{service.title}</h3>
              <ul className="space-y-5">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-300 text-sm font-medium">
                    <span className="text-blue-500/50">{item.icon}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Import needed inside for local use
import { ShieldCheck } from 'lucide-react';

export default ServicesSection;
