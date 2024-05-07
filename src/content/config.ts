import { defineCollection, z } from "astro:content";

export enum ProjectStatus {
  OnProgress,
  Paus,
  Done,
}

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    featured: z.boolean(),
    description: z.string(),
    github: z.string().optional(),
    progress: z.nativeEnum(ProjectStatus).default(ProjectStatus.OnProgress),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    external: z.string().optional(),
    sidebar: z.boolean().optional(),
  }),
});

export const collections = { blog, projects };
