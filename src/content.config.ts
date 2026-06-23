// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';



const blog = defineCollection({
  // Cargador profundo recursivo nativo para tu versión de Astro
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // Campos obligatorios base
    title: z.string(),
    description: z.string(),
    
    // Variables de compatibilidad heredadas (flexibles)
    pubDate: z.any().optional(),
    date: z.any().optional(),
    fecha: z.any().optional(),
    author: z.string().optional(),
    autor: z.string().optional(),
    layout: z.string().optional(),
    silo: z.string().optional(),
    tags: z.array(z.string()).optional(),
    
    // NUEVAS VARIABLES DE INFRAESTRUCTURA PARA OPTIMIZACIÓN GENERATIVA (GEO)
    brandEntity: z.string().optional(),
    geoEntities: z.array(z.string()).optional(),
    
    // ESQUEMA ESTRUCTURADO PARA INYECCIÓN AUTOMÁTICA DE PREGUNTAS FRECUENTES (FAQ)
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string()
      })
    ).optional()
  }),
});

export const collections = { blog };