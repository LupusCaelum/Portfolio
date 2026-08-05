<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const collectionName = computed(() => `blog_${locale.value}` as keyof Collections)

const { data: post } = await useAsyncData('post', async () => {
  const path = `/blog/${route.params.slug}`
  const item = await queryCollection(collectionName.value).where('path', '=', path).first()
  if (item) return item
  if (locale.value !== 'en') {
    return await queryCollection('blog_en').where('path', '=', path).first()
  }
  return null
}, { watch: [locale] })
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-24">
    <NuxtLink :to="localePath('/blog')" class="font-mono text-xs text-fog/60 hover:text-neon-300">
      ← {{ t('nav.blog') }}
    </NuxtLink>
    <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{{ post?.title }}</h1>
    <p class="mt-2 font-mono text-sm text-neon-300">{{ post?.date }}</p>
    <div class="mt-8 text-fog/80">
      <ContentRenderer v-if="post" :value="post" />
    </div>
  </section>
</template>
