<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <section class="flex min-h-svh items-center justify-center px-6">
    <div class="max-w-3xl text-center">
      <p class="font-mono text-sm tracking-widest text-primary-400 uppercase">
        {{ t('hero.eyebrow') }}
      </p>
      <h1 class="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
        {{ t('hero.name') }}
      </h1>
      <p class="mt-6 text-lg text-gray-400">
        {{ t('hero.tagline') }}
      </p>
    </div>
  </section>
</template>
