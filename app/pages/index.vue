<script setup lang="ts">
const { t } = useI18n()
const skills = ['HTML', 'CSS', 'Tailwind CSS', 'Vue', 'Nuxt', 'TypeScript', 'Git', 'Linux']
const sectionRef = ref<HTMLElement | null>(null)
const x = ref(0)
const y = ref(0)

function onMouseMove(event: MouseEvent) {
  const rect = sectionRef.value?.getBoundingClientRect()
  if (!rect) return
  x.value = event.clientX - rect.left
  y.value = event.clientY - rect.top
}
</script>
<template>
  <section ref="sectionRef" @mousemove="onMouseMove"
    class="relative flex min-h-svh items-center justify-center overflow-hidden px-6">
    <div class="pointer-events-none absolute inset-0"
      :style="{ background: `radial-gradient(circle at ${x}px ${y}px, rgba(22, 155, 186, 0.3), transparent 20%)` }">
    </div>
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

  <section id="about" class="mx-auto max-w-3xl px-6 py-24">
    <p class="font-mono text-sm tracking-widest text-primary-400 uppercase">
      // {{ t('about.eyebrow') }}
    </p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
      {{ t('about.heading') }}
    </h2>
    <p class="mt-6 text-lg leading-relaxed text-fog/80">
      {{ t('about.body') }}
    </p>
  </section>

  <section id="skills" class="mx-auto max-w-3xl px-6 py-24">
    <p class="font-mono text-sm tracking-widest text-primary-400 uppercase">
      // {{ t('skills.eyebrow') }}
    </p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
      {{ t('skills.heading') }}
    </h2>
    <div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      <div
        v-for="skill in skills"
        :key="skill"
        class="border border-line px-4 py-3 font-mono text-sm text-fog transition-colors hover:border-neon-300 hover:text-neon-300"
      >
        {{ skill }}
      </div>
    </div>
  </section>
</template>
