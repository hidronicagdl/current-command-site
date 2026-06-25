// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Loader nativo obligatorio en Astro v6

// ==========================================================================
// 1. COLECCIÓN EXISTENTE: BLOG (Preservada intacta para estabilidad)
// ==========================================================================
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.any().optional(),
    date: z.any().optional(),
    fecha: z.any().optional(),
    author: z.string().optional(),
    autor: z.string().optional(),
    layout: z.string().optional(),
    silo: z.string().optional(),
    tags: z.array(z.string()).optional(),
    brandEntity: z.string().optional(),
    geoEntities: z.array(z.string()).optional(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string()
      })
    ).optional()
  }),
});

// ==========================================================================
// 2. NUEVA COLECCIÓN: BOMBAS (Catálogo técnico de alta especificación)
// ==========================================================================
const bombas = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/bombas' }),
  schema: z.object({
    modelo: z.string(),
    hp: z.string(),
    tipo: z.string(),
    reversible: z.boolean(),
    costoBase: z.number(),
    descarga: z.string(),
    pasoSolidos: z.string(),
    velocidadRpm: z.number(),
    materialCuerpo: z.string(),
    selloMecanico: z.string(),
    certificaciones: z.string(),
    pesoLbs: z.number(),
    maxTemp: z.string(),
    aislamientoMotor: z.string(),
    tipoAceite: z.string(),
    alturaInches: z.number(),
    anchoInches: z.number(),
    voltajesDisponibles: z.array(z.string()),
    fasesDisponibles: z.array(z.string()),
    descripcionLarga: z.string(),
    aplicacionIdeal: z.string()
  })
});

// ==========================================================================
// 3. EXPORTACIÓN UNIFICADA DE TODAS LAS COLECCIONES DE CURRENT COMMAND
// ==========================================================================
export const collections = { 
  blog, 
  bombas 
};