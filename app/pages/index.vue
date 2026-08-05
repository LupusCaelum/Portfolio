<script setup lang="ts">
const { t, tm } = useI18n()

const skills = computed(() => tm('skills.items') as string[])
const marqueeSkills = computed(() => [...skills.value, ...skills.value])
const timeline = computed(() => tm('timeline.items') as { year: string, title: string, description: string }[])
const projects = computed(() => tm('projects.items') as { title: string, description: string, stack: string[] }[])
</script>

<template>
  <div>
    <section class="relative flex min-h-svh items-center justify-center px-6">
      <HeroScene />
      <div class="relative z-10 max-w-3xl text-center">
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

    <section
      id="about"
      class="relative py-24"
    >
      <FloatingShape
        geometry="icosahedron"
        color="#77d8ee"
        :position="[3.8, 1, -2]"
        :size="1.3"
        :speed="1.2"
      />
      <div class="relative z-10 mx-auto max-w-3xl px-6">
        <p class="font-mono text-sm tracking-widest text-primary-400 uppercase">
          // {{ t('about.eyebrow') }}
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ t('about.heading') }}
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-fog/80">
          {{ t('about.body') }}
        </p>
      </div>
    </section>

    <section
      id="skills"
      class="relative py-24"
    >
      <FloatingShape
        geometry="octahedron"
        color="#c8ff4d"
        :position="[-4, -0.5, -2]"
        :size="0.9"
        :speed="0.8"
      />
      <div class="relative z-10 mx-auto max-w-3xl px-6">
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
      </div>
    </section>

    <div class="overflow-hidden border-y border-line bg-surface/50 py-4">
      <div class="marquee flex w-max gap-10 font-mono text-sm uppercase tracking-widest">
        <span
          v-for="(skill, i) in marqueeSkills"
          :key="skill + i"
          class="flex items-center gap-10 whitespace-nowrap text-fog/60"
        >
          {{ skill }}
          <span class="text-acid">~</span>
        </span>
      </div>
    </div>

    <section
      id="timeline"
      class="relative py-24"
    >
      <FloatingShape
        geometry="torusKnot"
        color="#169bba"
        :position="[4, -1.5, -2]"
        :size="1"
        :speed="0.9"
      />
      <div class="relative z-10 mx-auto max-w-3xl px-6">
        <p class="font-mono text-sm tracking-widest text-primary-400 uppercase">
          // {{ t('timeline.eyebrow') }}
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ t('timeline.heading') }}
        </h2>
        <div class="mt-8 space-y-6">
          <div
            v-for="item in timeline"
            :key="item.year"
            class="flex gap-4 border-l border-line pl-6"
          >
            <span class="font-mono text-sm text-neon-300">{{ item.year }}</span>
            <div>
              <h3 class="font-bold text-fog">
                {{ item.title }}
              </h3>
              <p class="mt-1 text-sm text-fog/60">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="work"
      class="relative py-24"
    >
      <FloatingShape
        geometry="icosahedron"
        color="#35bddb"
        :position="[-4, 1, -2]"
        :size="1.1"
        :speed="1.1"
      />
      <div class="relative z-10 mx-auto max-w-3xl px-6">
        <p class="font-mono text-sm tracking-widest text-primary-400 uppercase">
          // {{ t('projects.eyebrow') }}
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ t('projects.heading') }}
        </h2>
        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <article
            v-for="(project, i) in projects"
            :key="project.title"
            class="group flex flex-col border border-line p-6 transition-colors hover:border-neon-300"
          >
            <div class="flex items-center justify-between">
              <span class="font-mono text-xs text-neon-300">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="text-fog/30 transition-colors group-hover:text-acid">↗</span>
            </div>
            <h3 class="mt-4 font-bold text-fog">
              {{ project.title }}
            </h3>
            <p class="mt-2 flex-1 text-sm text-fog/60">
              {{ project.description }}
            </p>
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
      </div>
    </section>

    <section
      id="contact"
      class="relative py-24"
    >
      <FloatingShape
        geometry="octahedron"
        color="#77d8ee"
        :position="[4, 1, -3]"
        :size="0.8"
        :speed="1.3"
      />
      <div class="relative z-10 mx-auto max-w-3xl px-6">
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
      </div>
    </section>
  </div>
</template>
