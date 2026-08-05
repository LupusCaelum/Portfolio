<script setup lang="ts">
const { t, tm } = useI18n()

const skills = computed(() => tm('skills.items') as string[])
const timeline = computed(() => tm('timeline.items') as { year: string; title: string; description: string }[])
const projects = computed(() => tm('projects.items') as { title: string; description: string; stack: string[] }[])
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

  <section id="timeline" class="mx-auto max-w-3xl px-6 py-24">
    <p class="font-mono text-sm tracking-widest text-primary-400 uppercase">
      // {{ t('timeline.eyebrow') }}
    </p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
      {{ t('timeline.heading') }}
    </h2>
    <div class="mt-8 space-y-6">
      <div v-for="item in timeline" :key="item.year" class="flex gap-4 border-l border-line pl-6">
        <span class="font-mono text-sm text-neon-300">{{ item.year }}</span>
        <div>
          <h3 class="font-bold text-fog">{{ item.title }}</h3>
          <p class="mt-1 text-sm text-fog/60">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="work" class="mx-auto max-w-3xl px-6 py-24">
    <p class="font-mono text-sm tracking-widest text-primary-400 uppercase">
      // {{ t('projects.eyebrow') }}
    </p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
      {{ t('projects.heading') }}
    </h2>
    <div class="mt-8 space-y-4">
      <article
        v-for="project in projects"
        :key="project.title"
        class="border border-line p-6 transition-colors hover:border-neon-300"
      >
        <h3 class="font-bold text-fog">{{ project.title }}</h3>
        <p class="mt-2 text-sm text-fog/60">{{ project.description }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="border border-line px-2 py-0.5 font-mono text-xs text-primary-400"
          >
            {{ tech }}
          </span>
        </div>
      </article>
    </div>
  </section>

  <section id="contact" class="mx-auto max-w-3xl px-6 py-24">
    <p class="font-mono text-sm tracking-widest text-primary-400 uppercase">
      // {{ t('contact.eyebrow') }}
    </p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
      {{ t('contact.heading') }}
    </h2>
    <p class="mt-6 text-lg text-fog/80">
      {{ t('contact.body') }}
    </p>
    <a
      href="mailto:umutyasarsarisoy@gmail.com"
      class="mt-6 inline-block border border-neon-300 px-5 py-2 font-mono text-sm text-neon-300 transition-colors hover:bg-neon-300 hover:text-night"
    >
      umutyasarsarisoy@gmail.com
    </a>
  </section>
</template>
