// Example: A cheatsheet of many common Zod datatypes
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    content: z.string(),
    created_at: z.date()
  })
})


export const collections = { blog };
