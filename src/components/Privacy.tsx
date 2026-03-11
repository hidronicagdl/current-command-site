import React from 'react';
import { SITE_CONFIG } from '../constants';

export const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold font-mono mb-8">Aviso de Privacidad</h1>
        
        <div className="prose prose-slate text-steel-gray">
          <p>
            <strong>{SITE_CONFIG.companyLegalName}</strong>, con domicilio en {SITE_CONFIG.address.street}, {SITE_CONFIG.address.colonia}, 
            {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, C.P. {SITE_CONFIG.address.cp}, es el responsable del uso y protección 
            de sus datos personales, y al respecto le informamos lo siguiente:
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">¿Para qué fines utilizaremos sus datos personales?</h3>
          <p>
            Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Proveer los productos y servicios requeridos (Cálculos hidráulicos, venta de equipos).</li>
            <li>Facturación y cobranza.</li>
            <li>Dar cumplimiento a obligaciones contraídas con nuestros clientes.</li>
            <li>Informar sobre cambios en los productos o servicios.</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2">¿Qué datos personales utilizaremos para estos fines?</h3>
          <p>
            Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
            Nombre completo, Teléfono, Correo electrónico, Datos de facturación.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">¿Cómo puede acceder, rectificar o cancelar sus datos personales?</h3>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). 
            Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); 
            que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes 
            y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). 
            Estos derechos se conocen como derechos ARCO.
          </p>
          <p className="mt-4">
            Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva enviando un correo electrónico a: 
            <strong>{SITE_CONFIG.contact.email}</strong>.
          </p>

          <p className="mt-8 text-xs text-gray-500">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};