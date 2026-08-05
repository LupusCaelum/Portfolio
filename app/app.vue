<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
useSeoMeta({
  title: 'Umut Yaşar Sarısoy — Web Developer',
  description: 'Portfolio of Umut Yaşar Sarısoy, a web developer who loves to create beautiful and functional websites.'
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="font-mono text-sm font-bold tracking-widest text-fog uppercase">
          <span class="text-acid">~</span> LupusCaelum
        </NuxtLink>
      </template>
      <template #right>
        <nav class="hidden items-center gap-1 font-mono text-sm sm:flex">
          <NuxtLink to="/#about" class="px-3 py-1.5 text-fog/70 transition-colors hover:text-neon-300">

            {{ t('nav.about') }}

          </NuxtLink>
          <NuxtLink to="/#work" class="px-3 py-1.5 text-fog/70 transition-colors hover:text-neon-300">
            {{ t('nav.work') }}
          </NuxtLink>
          <NuxtLink to="/#contact" class="px-3 py-1.5 text-fog/70 transition-colors hover:text-neon-300">
            {{ t('nav.contact') }}
          </NuxtLink>
        </nav>
        <div class="flex items-center gap-0.5 border-l border-line pl-3 font-mono text-xs">
          <NuxtLink v-for="l in locales" :key="l.code" :to="switchLocalePath(l.code)"
            class="rounded px-1.5 py-1 transition-colors"
            :class="locale === l.code ? 'text-neon-300' : 'text-fog/50 hover:text-fog'">
            {{ l.code.toUpperCase() }}
          </NuxtLink>
        </div>
      </template>
    </UHeader>
    <UMain>
      <NuxtPage />
    </UMain>
    <UFooter>
      <template #left>
        <p class="text-sm text-fog/60">
          © {{ new Date().getFullYear() }} Umut Yaşar Sarısoy
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
