<script setup lang="ts">
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
            about
          </NuxtLink>
          <NuxtLink to="/#work" class="px-3 py-1.5 text-fog/70 transition-colors hover:text-neon-300">
            work
          </NuxtLink>
          <NuxtLink to="/#contact" class="px-3 py-1.5 text-fog/70 transition-colors hover:text-neon-300">
            contact
          </NuxtLink>
        </nav>
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
