<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { t, locales } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const locale = computed(() => {
  const codes = locales.value.map(l => l.code) as string[]
  return (route.path.split('/').find(s => codes.includes(s)) as 'en' | 'tr' | 'de') || 'en'
})

const collectionName = computed(() => `blog_${locale.value}` as keyof Collections)

const { data: posts } = await useAsyncData(`blog-${collectionName.value}`, async () => {
  const items = await queryCollection(collectionName.value).order('date', 'DESC').all()
  if (items.length > 0) return items
  if (locale.value !== 'en') {
    return await queryCollection('blog_en').order('date', 'DESC').all()
  }
  return []
}, { watch: [locale] })
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-24">
    <p class="font-mono text-sm tracking-widest text-primary-400 uppercase">
      // {{ t('blog.eyebrow') }}
    </p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
      {{ t('blog.heading') }}
    </h1>
    <div class="mt-8 space-y-4">
      <article
        v-for="post in posts"
        :key="post.path"
        class="border border-line p-6 transition-colors hover:border-neon-300"
      >
        <NuxtLink
          :to="localePath(post.path)"
          class="block"
        >
          <h2 class="font-bold text-fog">{{ post.title }}</h2>
          <p class="mt-1 font-mono text-xs text-neon-300">{{ post.date }}</p>
          <p class="mt-2 text-sm text-fog/60">{{ post.description }}</p>
        </NuxtLink>
      </article>
    </div>
  </section>
</template>
