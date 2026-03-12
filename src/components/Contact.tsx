import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../constants';
import { MapPin, Phone, Mail } from 'lucide-react';
// Eliminado import { useLocation } from 'react-router-dom';

export const Contact: React.FC = () => {
//  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

//  useEffect(() => {
//    document.title = "Contacto | CURRENT COMMAND";
    // Pre-fill message if coming from product page
//    if (location.state && location.state.productInterest) {
//      setFormData(prev => ({
//        ...prev,
//        message: `Hola, me interesa recibir la ficha técnica y cotización de: ${location.state.productInterest}.`
//      }));
//    }
//  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData
      })
    })
      .then(() => alert("Mensaje enviado correctamente. Un ingeniero le contactará en breve."))
      .catch(error => alert(error));
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
              name="contact" 
              method="post" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field" 
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Netlify Hidden Fields */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Email Corporativo</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Detalle del Requerimiento</label>
                <textarea 
                  name="message" 
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
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