
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ_DATA } from '../constants.tsx';

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left group transition-all"
      >
        <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">{question}</span>
        <Plus className={`transform transition-all duration-300 w-6 h-6 text-blue-600 ${isOpen ? 'rotate-45 text-slate-400' : ''}`} />
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed font-medium">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Dúvidas Frequentes</h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-2">
          {FAQ_DATA.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
