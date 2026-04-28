import React, { useEffect } from 'react';
import { CheckCircle, Activity, Ruler, ShieldCheck } from 'lucide-react';
// Eliminado import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  
  useEffect(() => {
    document.title = "Inicio | CURRENT COMMAND - Ingeniería de Bombeo";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043589221-1a6a8bc1707e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-mono tracking-tighter mb-6">
              INGENIERÍA DE BOMBEO <br className="hidden md:block" />
              PARA EL MUNDO REAL
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              18 años de experiencia en campo resolviendo desafíos hidráulicos. 
              Distribuidores autorizados Grundfos, Wolf y Zoeller. Respaldo SIBI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/productos" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-industrial-blue hover:bg-industrial-dark transition-colors rounded-none shadow-lg">
                VER EQUIPOS
              </a>
              <a href="/contacto" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border-2 border-white hover:bg-white hover:text-slate-900 transition-colors rounded-none">
                CONSULTAR A UN INGENIERO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Authority / Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 border border-gray-200 hover:border-industrial-blue transition-colors group">
              <div className="w-12 h-12 bg-steel-light flex items-center justify-center mb-6 group-hover:bg-industrial-blue group-hover:text-white transition-colors">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 font-mono">Diagnóstico de Fallas</h3>
              <p className="text-steel-gray text-sm leading-relaxed">
                No solo vendemos bombas. Analizamos por qué falló su equipo anterior y proponemos soluciones que atacan la raíz del problema, no solo el síntoma.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 border border-gray-200 hover:border-industrial-blue transition-colors group">
              <div className="w-12 h-12 bg-steel-light flex items-center justify-center mb-6 group-hover:bg-industrial-blue group-hover:text-white transition-colors">
                <Ruler size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 font-mono">Cálculo Hidráulico Real</h3>
              <p className="text-steel-gray text-sm leading-relaxed">
                Evite el sobredimensionamiento que desperdicia energía o el subdimensionamiento que quema motores. Cálculos precisos basados en su curva de operación.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 border border-gray-200 hover:border-industrial-blue transition-colors group">
              <div className="w-12 h-12 bg-steel-light flex items-center justify-center mb-6 group-hover:bg-industrial-blue group-hover:text-white transition-colors">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 font-mono">Equipos Certificados</h3>
              <p className="text-steel-gray text-sm leading-relaxed">
                Suministro de equipos con certificaciones internacionales UL/FM para sistemas contra incendio y normativas sanitarias vigentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini About */}
      <section className="py-20 bg-steel-light border-t border-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              alt="Ingeniero revisando planos" 
              className="w-full h-auto shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 font-mono">RESPALDO TÉCNICO TOTAL</h2>
            <p className="text-steel-gray mb-6">
              Detrás de CURRENT COMMAND está la infraestructura de <strong>SIBI SA DE CV</strong>. Con base en Tlaquepaque, Jalisco, atendemos a la industria alimenticia, metalmecánica y desarrollos verticales en todo el occidente del país.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle size={18} className="text-industrial-blue mr-3" />
                Taller de servicio autorizado
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle size={18} className="text-industrial-blue mr-3" />
                Stock de refacciones críticas
              </li>
              <li className="flex items-center text-sm text-slate-700">
                <CheckCircle size={18} className="text-industrial-blue mr-3" />
                Puesta en marcha y alineación láser
              </li>
            </ul>
            {/* Oculto hasta tener contenido 
            <a href="/recursos" className="text-industrial-blue font-bold hover:underline uppercase tracking-wide text-sm">
              Ver Recursos Técnicos &rarr;
            </a> 
            */}
          </div>
        </div>
      </section>
    </div>
  );
};