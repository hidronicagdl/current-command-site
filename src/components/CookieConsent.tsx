import React, { useState, useEffect } from 'react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('current_command_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = (type: 'all' | 'necessary') => {
    localStorage.setItem('current_command_cookie_consent', type);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 p-6 md:p-8 font-sans">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h3 className="text-industrial-blue font-bold text-lg mb-2">Respetamos su Privacidad</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Utilizamos cookies propias y de terceros para garantizar el funcionamiento técnico del sitio y analizar el tráfico. 
            Cumpliendo con las normativas internacionales, usted decide qué datos compartir.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={() => handleAccept('necessary')}
            className="px-6 py-2 text-sm font-semibold text-steel-gray border border-steel-gray hover:bg-gray-50 transition-colors"
          >
            Solo Necesarias
          </button>
          <button
            onClick={() => handleAccept('all')}
            className="px-6 py-2 text-sm font-semibold text-white bg-industrial-blue hover:bg-industrial-dark transition-colors shadow-md"
          >
            Aceptar Todas
          </button>
        </div>
      </div>
    </div>
  );
};