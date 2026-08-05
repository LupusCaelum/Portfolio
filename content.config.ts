import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const blogSchema = z.object({
  date: z.coerce.date(),
  tags: z.array(z.string())
})

export default defineContentConfig({
  collections: {
    blog_en: defineCollection({
      type: 'page',
      source: { include: 'en/blog/**', prefix: '/blog' },
      schema: blogSchema
    }),
    blog_tr: defineCollection({
      type: 'page',
      source: { include: 'tr/blog/**', prefix: '/blog' },
      schema: blogSchema
    }),
    blog_de: defineCollection({
      type: 'page',
      source: { include: 'de/blog/**', prefix: '/blog' },
      schema: blogSchema
    })
  }
})
