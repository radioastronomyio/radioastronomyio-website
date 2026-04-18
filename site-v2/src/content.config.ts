import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sponsors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sponsors' }),
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    url: z.string().url(),
    provides: z.string(),
    order: z.number(),
    added: z.date().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['Active', 'Planned', 'Production', 'Concept']),
    hero_image: z.string(),
    github_url: z.string().url(),
    short_description: z.string(),
    order: z.number(),
    downstream_consumers: z.array(z.string()).optional(),
    related_projects: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { sponsors, projects };
