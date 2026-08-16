import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Equipe AXION'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    readingTime: z.string().optional(),
    canonicalUrl: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
