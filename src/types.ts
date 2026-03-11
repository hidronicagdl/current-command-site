export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  specs: string[];
  imageUrl: string;
}

export interface SiteConfig {
  companyName: string;
  companyLegalName: string;
  address: {
    street: string;
    colonia: string;
    city: string;
    state: string;
    country: string;
    cp: string;
  };
  contact: {
    phoneDisplay: string;
    phoneValue: string; // clean for tel: links
    whatsapp: string; // clean for wa.me links
    email: string;
  };
}

export interface NavItem {
  label: string;
  path: string;
}