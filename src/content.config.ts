import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Cargador profundo recursivo para Astro v6.4.2
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Declaramos todas las variantes posibles de fecha y autor como opcionales
    pubDate: z.any().optional(),
    date: z.any().optional(),
    fecha: z.any().optional(),
    author: z.string().optional(),
    autor: z.string().optional(),
    layout: z.string().optional(),
    silo: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };