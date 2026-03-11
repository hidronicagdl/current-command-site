import React, { useEffect } from 'react';
import { ShieldCheck, Cpu, Wrench, UserCheck, Briefcase, Award, Train, Building2, Server, Droplets } from 'lucide-react';

export const About: React.FC = () => {
  
  useEffect(() => {
    document.title = "Sobre Mí | José Aguilar - Consultor Principal";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-28 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Profile Placeholder */}
              <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-700 flex-shrink-0 rounded-sm border-2 border-industrial-blue flex items-center justify-center">
                <span className="text-4xl font-mono font-bold text-gray-400">JA</span>
              </div>
              
              <div>
                <span className="text-industrial-blue font-mono font-bold tracking-widest uppercase text-sm mb-2 block">
                  Consultor Principal
                </span>
                <h1 className="text-3xl md:text-5xl font-bold font-mono mb-6 leading-tight">
                  José Aguilar
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl">
                  18 Años Liderando la Optimización y Automatización de Sistemas de Bombeo de Alto Rendimiento.
                  <br/><br/>
                  <span className="text-white font-medium border-l-4 border-industrial-blue pl-4 block">
                    La única autoridad que combina experiencia técnica de fábrica con la gestión integral de un negocio de servicios críticos.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Experience Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center mb-12">
            <Briefcase className="text-industrial-blue mr-4" size={32} />
            <h2 className="text-3xl font-bold text-slate-800 font-mono uppercase">El Rol Multifacético</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 border border-gray-200 hover:border-industrial-blue hover:shadow-lg transition-all bg-steel-light/30">
              <Wrench className="text-industrial-blue mb-4" size={28} />
              <h3 className="text-lg font-bold text-slate-800 mb-3 font-mono leading-tight">Consultoría Hidráulica y Diagnóstico Avanzado</h3>
              <p className="text-sm text-steel-gray leading-relaxed">
                17 años como asesor principal, ejecutando cientos de arranques, diagnósticos de fallas, y atendiendo garantías en sitio. Transición exitosa de técnico a estratega comercial y asesor de alta dirección.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 border border-gray-200 hover:border-industrial-blue hover:shadow-lg transition-all bg-steel-light/30">
              <Building2 className="text-industrial-blue mb-4" size={28} />
              <h3 className="text-lg font-bold text-slate-800 mb-3 font-mono leading-tight">Desarrollo y Gestión de Centros de Servicio</h3>
              <p className="text-sm text-steel-gray leading-relaxed">
                Diseño y escalamiento de talleres de reparación (bombas de hasta 200 HP), áreas de rebobinado de motores y departamentos de maquinado. Visión integral del ciclo de vida del equipo.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 border border-gray-200 hover:border-industrial-blue hover:shadow-lg transition-all bg-steel-light/30">
              <Cpu className="text-industrial-blue mb-4" size={28} />
              <h3 className="text-lg font-bold text-slate-800 mb-3 font-mono leading-tight">Integración BMS/IoT Industrial</h3>
              <p className="text-sm text-steel-gray leading-relaxed">
                Desarrollo e implementación de tableros de control con comunicación avanzada (Modbus y BACnet), integrando sistemas de bombeo con Building Management Systems (BMS) en infraestructura crítica.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 border border-gray-200 hover:border-industrial-blue hover:shadow-lg transition-all bg-steel-light/30">
              <ShieldCheck className="text-industrial-blue mb-4" size={28} />
              <h3 className="text-lg font-bold text-slate-800 mb-3 font-mono leading-tight">Sistemas UL/FM Contra Incendios</h3>
              <p className="text-sm text-steel-gray leading-relaxed">
                Desarrollo de equipos contra incendios listados UL/FM sobre bases estructurales, asegurando el cumplimiento normativo más estricto y la fiabilidad en proyectos vitales.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 border border-gray-200 hover:border-industrial-blue hover:shadow-lg transition-all bg-steel-light/30">
              <UserCheck className="text-industrial-blue mb-4" size={28} />
              <h3 className="text-lg font-bold text-slate-800 mb-3 font-mono leading-tight">Formación de Capital Humano</h3>
              <p className="text-sm text-steel-gray leading-relaxed">
                Instrucción técnica y comercial de nuevos ingenieros, garantizando la continuidad del conocimiento experto y el éxito en negociaciones técnico-comerciales complejas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Projects */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center mb-12">
            <Server className="text-industrial-blue mr-4" size={32} />
            <h2 className="text-3xl font-bold text-white font-mono uppercase">Proyectos de Alto Impacto</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-800 p-8 border-l-4 border-industrial-blue hover:bg-slate-750 transition-colors">
              <div className="flex items-center mb-4">
                <Train className="text-gray-400 mr-3" size={24} />
                <h3 className="text-xl font-bold font-mono text-white">Infraestructura Nacional (Tren Maya)</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Solución y entrega exitosa de sistemas de bombeo y <strong className="text-white">tableros de control con protocolo Modbus TC/IP</strong>, demostrando capacidad para cumplir requerimientos de conectividad modernos en mega-infraestructura.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800 p-8 border-l-4 border-industrial-blue hover:bg-slate-750 transition-colors">
              <div className="flex items-center mb-4">
                <Building2 className="text-gray-400 mr-3" size={24} />
                <h3 className="text-xl font-bold font-mono text-white">CDMX Metro Línea 12</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Participación en el suministro de equipos clave para la infraestructura del transporte público de la Ciudad de México, garantizando el funcionamiento de sistemas vitales críticos urbanos.
              </p>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800 p-8 border-l-4 border-industrial-blue hover:bg-slate-750 transition-colors">
              <div className="flex items-center mb-4">
                <Cpu className="text-gray-400 mr-3" size={24} />
                <h3 className="text-xl font-bold font-mono text-white">Industria de Alta Tecnología (INTEL)</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Suministro de equipos para entornos de tecnología y manufactura de alta exigencia, probando la fiabilidad de soluciones en el sector más riguroso del mercado.
              </p>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-800 p-8 border-l-4 border-industrial-blue hover:bg-slate-750 transition-colors">
              <div className="flex items-center mb-4">
                <Droplets className="text-gray-400 mr-3" size={24} />
                <h3 className="text-xl font-bold font-mono text-white">Sistemas Operadores de Agua</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Experiencia probada en proyectos de gran envergadura para la distribución y manejo del recurso hídrico a nivel municipal y estatal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Certifications */}
      <section className="py-20 bg-steel-light/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Award className="text-industrial-blue mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold text-slate-800 font-mono uppercase mb-6">Autoridad Certificada</h2>
            <p className="text-lg text-steel-gray leading-relaxed">
              Mi experiencia no se limita a un solo fabricante. Como prueba de mi compromiso con la excelencia técnica, he completado <strong className="text-slate-800">entrenamientos directos de fábrica en EE. UU. y México</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            
            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-industrial-blue uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Hidráulica Crítica</h4>
              <ul className="space-y-2 text-slate-700 font-mono">
                <li>• Goulds (USA/MX)</li>
                <li>• Bell & Gossett</li>
                <li>• Grundfos</li>
                <li>• Ruhpumpen</li>
                <li>• Flowserve</li>
                <li>• Q Pumps / Fristam</li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-industrial-blue uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Control & Variadores</h4>
              <ul className="space-y-2 text-slate-700 font-mono">
                <li>• ABB (VFD & PLC)</li>
                <li>• Danfoss Drives</li>
                <li>• Interfaz HMI ABB</li>
                <li>• Tableros BMS</li>
                <li>• Modbus/BACnet</li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-industrial-blue uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Motores & Electricidad</h4>
              <ul className="space-y-2 text-slate-700 font-mono">
                <li>• Baldor Motors</li>
                <li>• Franklin Electric</li>
                <li>• Motores IE3/IE5</li>
                <li>• Normativa NEC/NOM</li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-industrial-blue uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Especialidades</h4>
              <ul className="space-y-2 text-slate-700 font-mono">
                <li>• Sulzer (ABS)</li>
                <li>• Zoeller (Cárcamos)</li>
                <li>• Wolf Verticales</li>
                <li>• AC Fire (UL/FM)</li>
                <li>• Barnes Barmesa</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};