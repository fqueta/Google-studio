
import React from 'react';
import { LifeBuoy } from 'lucide-react';

const SupportButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[60] group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-mt-blue text-white text-sm font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Solicitar Ticket de Atendimento
      </div>
      
      {/* Floating Button */}
      <a 
        href="https://glpi-glpi.yadvva.easypanel.host/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-mt-orange text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-mt-blue transition-all duration-300 animate-bounce group"
      >
        <LifeBuoy size={32} className="group-hover:rotate-12 transition-transform" />
      </a>
      
      {/* Pulse Effect */}
      <div className="absolute inset-0 w-16 h-16 bg-mt-orange rounded-full animate-ping opacity-25 pointer-events-none"></div>
    </div>
  );
};

export default SupportButton;
