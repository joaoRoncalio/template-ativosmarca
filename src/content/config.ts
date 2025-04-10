import { defineCollection, z } from 'astro:content';

const brandCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  brand: brandCollection,
};