import React, { useEffect } from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';
//Eliminado import { Link } from 'react-router-dom';

export const Products: React.FC = () => {
  useEffect(() => {
    document.title = "Catálogo | CURRENT COMMAND";
  }, []);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 font-mono">BOMBAS & EQUIPOS</h1>
          <p className="text-steel-gray mt-2">Tecnología de punta para manejo de fluidos.</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="flex flex-col lg:flex-row gap-8 border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-white">
              {/* Left: Image */}
              <div className="w-full lg:w-1/3 bg-gray-100 flex items-center justify-center min-h-[250px]">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="max-w-full h-auto object-cover mix-blend-multiply"
                />
              </div>

              {/* Right: Tech Data */}
              <div className="w-full lg:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-sm">
                      {product.brand}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-industrial-blue mb-4 font-mono">
                    {product.name}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="bg-steel-light p-4 mb-6 border-l-4 border-industrial-blue">
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-wider">Especificaciones Clave:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.specs.map((spec, index) => (
                        <li key={index} className="text-sm text-slate-700 font-mono">
                          • {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center">
                  <Link 
                    to="/contacto" 
                    state={{ productInterest: product.name }}
                    className="inline-flex items-center text-white bg-industrial-blue hover:bg-industrial-dark px-6 py-3 font-bold text-sm transition-colors"
                  >
                    SOLICITAR FICHA TÉCNICA AL ING. <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};