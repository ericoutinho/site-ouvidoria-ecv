
import { FAQItem, Testimonial } from './types';

export const COLORS = {
  primary: '#001F3F', // Navy Blue
  accent: '#2563eb',  // Medium Blue
  background: '#FFFFFF',
  text: '#1e293b',
  neutral: '#f8fafc'
};

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Como funciona a terceirização da ouvidoria?",
    answer: "A Ouvidoria ECV assume todos os canais de atendimento (telefone, WhatsApp, e-mail e web) exigidos pela portaria do Detran-ES. Gerenciamos as manifestações, protocolamos os atendimentos e fornecemos relatórios mensais para sua empresa estar sempre em conformidade."
  },
  {
    question: "A Ouvidoria ECV é reconhecida pelo Detran-ES?",
    answer: "Sim, nossos serviços são desenhados especificamente para atender integralmente às exigências das portarias de credenciamento vigentes para as Empresas Credenciadas de Vistoria (ECVs) no Espírito Santo."
  },
  {
    question: "Qual o custo para implementar a ouvidoria na minha ECV?",
    answer: "Trabalhamos com planos acessíveis que variam conforme o volume de vistorias da sua unidade. O investimento é significativamente menor do que manter uma equipe e estrutura tecnológica própria dedicada exclusivamente a essa função."
  },
  {
    question: "Posso registrar uma manifestação de forma anônima?",
    answer: "Sim. Garantimos o sigilo absoluto e você pode optar por não se identificar no formulário. Todas as manifestações, anônimas ou identificadas, recebem um número de protocolo para acompanhamento."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    content: "A Ouvidoria ECV resolveu um problema que sempre tivemos: cumprir a exigência do Detran sem aumentar nossos custos. Hoje temos tudo organizado e funcionando.",
    author: "Ricardo Oliveira",
    role: "Proprietário de ECV"
  },
  {
    content: "O atendimento é rápido, claro e profissional. Passamos por fiscalização sem nenhuma preocupação.",
    author: "Fabiana Santos",
    role: "Administradora de Empresa de Vistoria"
  }
];
