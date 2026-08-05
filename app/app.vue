<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
useSeoMeta({
  title: 'Umut Yaşar Sarısoy — Web Developer',
  description: 'Portfolio of Umut Yaşar Sarısoy, a web developer who loves to create beautiful and functional websites.'
})

const baseURL = useRuntimeConfig().app.baseURL
useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` }]
})

const x = ref(0)
const y = ref(0)

function onMouseMove(event: MouseEvent) {
  x.value = event.clientX
  y.value = event.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.history.scrollRestoration = 'manual'
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
})
onUnmounted(() => window.removeEventListener('mousemove', onMouseMove))
</script>

<template>
  <UApp>
    <div
      class="pointer-events-none fixed inset-0 z-0"
      :style="{ background: `radial-gradient(circle at ${x}px ${y}px, rgba(22, 155, 186, 0.3), transparent 20%)` }"
    ></div>
    <UHeader>
      <template #left>
        <NuxtLink :to="localePath('/')" class="font-mono text-sm font-bold tracking-widest text-fog uppercase">
          <span class="text-acid">~</span> LupusCaelum
        </NuxtLink>
      </template>
      <template #right>
        <nav class="hidden items-center gap-1 font-mono text-sm sm:flex">
          <NuxtLink :to="localePath('/#about')" class="px-3 py-1.5 text-fog/70 transition-colors hover:text-neon-300">
            {{ t('nav.about') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/#work')" class="px-3 py-1.5 text-fog/70 transition-colors hover:text-neon-300">
            {{ t('nav.work') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/#contact')" class="px-3 py-1.5 text-fog/70 transition-colors hover:text-neon-300">
            {{ t('nav.contact') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/blog')" class="px-3 py-1.5 text-fog/70 transition-colors hover:text-neon-300">
            {{ t('nav.blog') }}
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
    <UMain class="relative z-10">
      <NuxtPage />
    </UMain>
    <UFooter class="relative z-10">
      <template #left>
        <p class="text-sm text-fog/60">
          © {{ new Date().getFullYear() }} Umut Yaşar Sarısoy
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
