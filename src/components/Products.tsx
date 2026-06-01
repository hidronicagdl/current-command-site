import React, { useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface SiloProduct {
  id: string;
  name: string;
  brand: string;
  siloUrl: string;
  description: string;
  imageUrl: string;
  specs: string[];
}

const SILO_PRODUCTS: SiloProduct[] = [
  {
    id: "sistemas-booster",
    name: "Sistemas Hidroneumáticos Booster de Presión Constante",
    brand: "Grundfos / Sencillo",
    siloUrl: "/productos/sistemas-hidroneumaticos-booster",
    imageUrl: "../../assets/booster-system.webp",
    description: "Sistemas hidroneumáticos tipo booster multibombas para el mantenimiento crítico de presión constante, configurados con variadores de frecuencia integrados de fábrica, motores de altísima eficiencia energética y controladores lógicos avanzados con comunicación nativa compatible con varios protocolos de comunicación, montados sobre una estructura de soporte rígida de acero al carbón estructural galvanizado por inmersión en caliente con colectores de succión y descarga fabricados en acero inoxidable AISI 304, diseñados específicamente para mitigar el golpe de ariete y optimizar el consumo de kilowatts en edificaciones verticales comerciales de gran envergadura.",
    specs: [
      "Control PID de Presión Constante",
      "Variadores de Velocidad Integrados",
      "Colectores en Acero Inoxidable AISI 304",
      "Protocolo de Comunicación Modbus RTU"
    ]
  },
  {
    id: "carcamos-prfv",
    name: "Cárcamos Prefabricados en Plástico Reforzado con Fibra de Vidrio (PRFV)",
    brand: "Estaciones Zoeller",
    siloUrl: "/productos/carcamos-prefabricados-fibra-de-vidrio",
    imageUrl: "../../assets/carcamo-prfv.webp",
    description: "Cárcamos de bombeo e infraestructura prefabricada de ingeniería monolítica monocasco en plástico reforzado con fibra de vidrio (PRFV), provistos de una pared estructural impermeable de alta resistencia mecánica contra empujes hidrostáticos externos y protección química nativa absoluta frente a la corrosión severa provocada por gas sulfhídrico (H2S), equipados de fábrica con tubería interna de descarga, codos de acoplamiento automático de hierro fundido dúctil y sistemas de izaje en acero inoxidable AISI 304.",
    specs: [
      "Monocasco de PRFV 100% Hermético",
      "Sistema Antiflotación",
      "Resistencia Química contra Gas H2S",
      "Instalación sencilla"
    ]
  },
  {
    id: "carcamos-presurizados",
    name: "Cárcamos Compactos con Bombas Sumergibles Presurizados",
    brand: "Zoeller LPS",
    siloUrl: "/productos/carcamos-bombas-sumergibles-presurizados",
    imageUrl: "../../assets/carcamo-presurizado.webp",
    description: "Estaciones de bombeo compactas con bombas trituradoras sumergibles diseñadas bajo criterios de arquitectura tecnológica abierta para redes de alcantarillado a presión, equipadas con un mecanismo axial de corte de alta dureza con anillo y cortador de aleación de acero endurecido con alta concentración de cromo, motor síncrono con doble sello mecánico en cámara de aceite, complementado con un tablero de control automatizado con componentes industriales estándar de mercado para eliminar la dependencia de servicios técnicos especiales.",
    specs: [
      "Mecanismo Triturador de Alta Presión",
      "Arquitectura Abierta",
      "Doble Sello Mecánico con Cámara de Aceite",
      "Reducción de Tuberías a Diámetros de 1.25\""
    ]
  },
  {
    id: "sistemas-contra-incendio",
    name: "Sistemas de Bombeo Contra Incendio Certificados UL/FM",
    brand: "NFPA 20 Compliant UL/FM",
    siloUrl: "/productos/sistemas-contra-incendio-ul-fm",
    imageUrl: "../../assets/contra-incendio-ul-fm.webp",
    description: "Equipos y paquetes empaquetados de bombeo contra incendio estacionarios bajo el cumplimiento estricto de la norma NFPA 20 con componentes individuales listados por Underwriters Laboratories (UL) y aprobaciones Factory Mutual (FM), integrando bombas de carcasa partida o turbina vertical en hierro dúctil e impulsores de bronce con curvas hidráulicas planas extendidas capaces de operar al ciento cincuenta por ciento de su caudal nominal, operados por controladores redundantes con lógica de arranque dual asistida por dos bancos de baterías independientes y acoplamiento a motor diésel o eléctrico de alta confiabilidad industrial.",
    specs: [
      "Certificada UL & Aprobación FM",
      "Cumplimiento Estricto Norma NFPA 20",
      "Sobrecarga Hidráulica Obligatoria al 150%",
      "Controladores con Lógica de Arranque Dual"
    ]
  }
];

export const Products: React.FC = () => {
  useEffect(() => {
    document.title = "Ingeniería de Sistemas de Bombeo | CURRENT COMMAND";
  }, []);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Encabezado del Catálogo de Autoridad */}
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
            SISTEMAS DE BOMBEO DE ALTO RENDIMIENTO
          </h1>
          <p className="text-gray-600 mt-3 text-base max-w-3xl leading-relaxed">
            Soluciones de ingeniería hidráulica especializada y mitigación de riesgos operativos para infraestructura crítica, plantas industriales y edificación vertical en México.
          </p>
        </div>

        {/* Listado de Silos Estructurales */}
        <div className="grid grid-cols-1 gap-12">
          {SILO_PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col lg:flex-row gap-8 border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 bg-white group rounded-sm"
            >
              {/* Contenedor Izquierdo: Imagen Técnica */}
              <div className="w-full lg:w-1/3 bg-slate-50 flex items-center justify-center min-h-[280px] border border-gray-100 p-4 rounded-sm">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="max-w-full max-h-[240px] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenedor Derecho: Información Técnica de Autoridad */}
              <div className="w-full lg:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-slate-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-1.5">
                      <ShieldCheck size={13} /> {product.brand}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-950 mb-4 font-mono tracking-tight leading-snug">
                    {product.name}
                  </h2>
                  
                  {/* Párrafo Técnico Continuo - Estilo Solicitado */}
                  <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed text-justify">
                    {product.description}
                  </p>
                  
                  {/* Grid de Especificaciones Técnicas */}
                  <div className="bg-slate-50 p-5 mb-6 border-l-4 border-slate-900 rounded-r-sm">
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-widest font-sans">
                      Parámetros de Diseño e Ingeniería:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {product.specs.map((spec, index) => (
                        <li key={index} className="text-xs md:text-sm text-slate-800 font-mono flex items-center gap-2">
                          <span className="text-slate-400 font-sans">•</span> {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enlace de Enrutamiento Hacia el Silo Correspondiente */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a 
                    href={product.siloUrl} 
                    className="inline-flex items-center text-white bg-slate-900 hover:bg-slate-800 px-6 py-3.5 font-bold text-xs uppercase tracking-wider transition-colors duration-200 rounded-sm w-full sm:w-auto justify-center shadow-sm"
                  >
                    Evaluar Ingeniería y Detalles <ArrowRight size={14} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};