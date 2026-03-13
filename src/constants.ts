import { Product, SiteConfig, NavItem } from './types';

export const SITE_CONFIG: SiteConfig = {
  companyName: "CURRENT COMMAND",
  companyLegalName: "Soluciones Integrales en Bombeo Inteligente SIBI SA DE CV",
  address: {
    street: "Calle Heliotropo #74",
    colonia: "Colonia Los Meseros",
    city: "Tlaquepaque",
    state: "Jalisco",
    country: "México",
    cp: "45510"
  },
  contact: {
    phoneDisplay: "(33) 1333 8818",
    phoneValue: "3313338818",
    whatsapp: "5213313338818", // Assuming Mexico Code +52 1
    email: "jgaguilar@sibi.mx"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", path: "/" },
  { label: "Sobre Mí", path: "/sobre-mi" },
  { label: "Bombas & Equipos", path: "/productos" },
  { label: "Recursos Técnicos", path: "/recursos" },
  { label: "Ingeniería", path: "/blog" },
  { label: "Contacto", path: "/contacto" },
];

export const PRODUCTS: Product[] = [
  {
    id: "grundfos-hydro-mpc",
    name: "Hydro MPC",
    brand: "Grundfos",
    description: "Sistema de aumento de presión de alta eficiencia con controlador CU 352 para optimización energética en tiempo real.",
    specs: ["Caudal máx: 1080 m³/h", "Altura máx: 155 m", "Líquido: Agua potable/gris", "Motor: IE3/IE5"],
    imageUrl: "https://picsum.photos/600/400?random=1"
  },
  {
    id: "zoeller-sumergibles",
    name: "Bombas Sumergibles Heavy Duty",
    brand: "Zoeller",
    description: "Equipos diseñados para la remoción de efluentes y aguas residuales en aplicaciones comerciales severas.",
    specs: ["Descarga: 2\" a 4\"", "Paso de sólidos: 2\" (esférico)", "Cuerpo: Hierro fundido Clase 30", "Sello: Carbón/Cerámica"],
    imageUrl: "https://picsum.photos/600/400?random=2"
  },
  {
    id: "wolf-verticales",
    name: "Bombas Verticales Multietapa",
    brand: "Wolf",
    description: "Ingeniería de precisión para suministro de agua en edificios altos y sistemas de filtración industrial.",
    specs: ["Presión máx: 25 bar", "Temp. líquido: -15°C a +120°C", "Material: Acero Inoxidable 304/316", "Certificación: ISO 9001"],
    imageUrl: "https://picsum.photos/600/400?random=3"
  }
];