import React from 'react';
import { SITE_CONFIG } from '../constants';

export const SchemaJsonLd: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EngineeringService",
    "name": SITE_CONFIG.companyName,
    "legalName": SITE_CONFIG.companyLegalName,
    "url": window.location.origin,
    "logo": `${window.location.origin}/logo.png`, // Assuming logo exists or placeholder
    "telephone": SITE_CONFIG.contact.phoneValue,
    "email": SITE_CONFIG.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address.street,
      "addressLocality": SITE_CONFIG.address.city,
      "addressRegion": SITE_CONFIG.address.state,
      "postalCode": SITE_CONFIG.address.cp,
      "addressCountry": "MX"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};