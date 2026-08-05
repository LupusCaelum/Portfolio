<script setup lang="ts">
import type { Vector3 } from 'three'
</script>

<template>
  <div class="pointer-events-none absolute inset-0 z-0">
    <TresCanvas clear-color="transparent" :dpr="[1, 1.5]">
      <TresPerspectiveCamera :position="[0, 0, 8] as unknown as Vector3" />
      <HeroSceneInner />
    </TresCanvas>
  </div>
</template>
