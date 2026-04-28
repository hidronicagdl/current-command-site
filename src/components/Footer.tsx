import React from 'react';
// ELIMINADO: import { Link } from 'react-router-dom'; <-- Ya no se necesita
import { SITE_CONFIG } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-800 font-sans text-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="font-mono text-white text-xl font-bold tracking-tighter">
              {SITE_CONFIG.companyName}
            </h3>
            <p className="text-gray-400 max-w-xs">
              Ingeniería de bombeo para aplicaciones críticas.
              <br />
              <span className="block mt-2 text-xs uppercase tracking-wider text-gray-500">
                Operado por {SITE_CONFIG.companyLegalName}
              </span>
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-white font-bold uppercase tracking-wide">Contacto</h4>
            <address className="not-italic space-y-2">
              <p>
                {SITE_CONFIG.address.street}<br />
                {SITE_CONFIG.address.colonia}, {SITE_CONFIG.address.cp}<br />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}.
              </p>
              <p className="pt-2">
                <a href={`tel:${SITE_CONFIG.contact.phoneValue}`} className="hover:text-white transition-colors">
                  Tel: {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </p>
            </address>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h4 className="font-mono text-white font-bold uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2">
              <li>
                {/* CAMBIO: Usamos <a> estándar para SEO y navegación nativa */}
                <a href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</a>
              </li>
              {/* Oculto hasta tener contenido 
              <li>
                <a href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</a>
              </li>
              */}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {currentYear} {SITE_CONFIG.companyLegalName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};