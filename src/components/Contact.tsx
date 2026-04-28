import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../constants';
import { MapPin, Phone, Mail } from 'lucide-react';
// Eliminado import { useLocation } from 'react-router-dom';

export const Contact: React.FC = () => {
//  const location = useLocation();
  const [formData, setFormData] = useState({
    "Nombre Completo": '',
    "Email Corporativo": '',
    "Teléfono": '',
    "Detalle del Requerimiento": ''
  });

//  useEffect(() => {
//    document.title = "Contacto | CURRENT COMMAND";
    // Pre-fill message if coming from product page
//    if (location.state && location.state.productInterest) {
//      setFormData(prev => ({
//        ...prev,
//        "Detalle del Requerimiento": `Hola, me interesa recibir la ficha técnica y cotización de: ${location.state.productInterest}.`
//      }));
//    }
//  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataObj = new FormData(e.currentTarget);
    
    // URL ajustada a /formResponse para permitir el envío de datos
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeDEJ1mWKj7cpsxEfujhX51TgT-RGjb8h1-evlYA1cS1ny3WA/formResponse";

    const data = new URLSearchParams();
    
    // Mapeo exacto con los IDs que extraje de tu imagen:
    data.append("entry.1634109051", formDataObj.get("Nombre Completo") as string); 
    data.append("entry.411597984", formDataObj.get("Email Corporativo") as string);
    data.append("entry.1760353485", formDataObj.get("Teléfono") as string);
    data.append("entry.1082939488", formDataObj.get("Detalle del Requerimiento") as string);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", 
        body: data,
      });
      
      // Aquí puedes manejar el éxito (ej. mostrar un mensaje o limpiar el form)
      alert("Mensaje enviado correctamente. Un ingeniero le contactará en breve.");
      console.log("Mensaje enviado correctamente. Un ingeniero le contactará en breve.");
      
    } catch (error) {
      console.error("Error al enviar el formulario", error);
      alert("Error al enviar el formulario");
    }
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info Column */}
          <div>
            <h1 className="text-3xl font-bold text-slate-800 font-mono mb-6">CONTACTO DIRECTO</h1>
            <p className="text-steel-gray mb-8 leading-relaxed">
              Hable directamente con ingeniería. Sin intermediarios, sin vendedores que no saben de curvas hidráulicas.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-industrial-blue mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-slate-800 uppercase text-sm tracking-wide">Oficinas y Taller</h3>
                  <p className="text-slate-600 mt-1">
                    {SITE_CONFIG.address.street}<br />
                    {SITE_CONFIG.address.colonia}, C.P. {SITE_CONFIG.address.cp}<br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-industrial-blue mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-slate-800 uppercase text-sm tracking-wide">Teléfono</h3>
                  <p className="text-slate-600 mt-1">
                    <a href={`tel:${SITE_CONFIG.contact.phoneValue}`} className="hover:text-industrial-blue transition-colors">
                      {SITE_CONFIG.contact.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-industrial-blue mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-slate-800 uppercase text-sm tracking-wide">Email</h3>
                  <p className="text-slate-600 mt-1">
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-industrial-blue transition-colors">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-steel-light p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-gray-300 pb-2">Enviar Requerimiento</h2>
            
            <form 
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  name="Nombre Completo" 
                  id="name"
                  required
                  value={formData["Nombre Completo"]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Email Corporativo</label>
                <input 
                  type="email" 
                  name="Email Corporativo" 
                  id="email"
                  required
                  value={formData["Email Corporativo"]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  name="Teléfono" 
                  id="phone"
                  value={formData["Teléfono"]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Detalle del Requerimiento</label>
                <textarea 
                  name="Detalle del Requerimiento" 
                  id="message"
                  rows={4}
                  required
                  value={formData["Detalle del Requerimiento"]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-industrial-blue hover:bg-industrial-dark text-white font-bold py-3 transition-colors shadow-sm uppercase tracking-wider"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};