<script setup lang="ts">
import type { Vector3 } from 'three'

withDefaults(defineProps<{
  geometry?: 'icosahedron' | 'octahedron' | 'torusKnot'
  color?: string
  position?: [number, number, number]
  size?: number
  speed?: number
}>(), {
  geometry: 'icosahedron',
  color: '#169bba',
  position: () => [0, 0, 0],
  size: 1.1,
  speed: 1
})
</script>

<template>
  <div class="pointer-events-none absolute inset-0 z-0">
    <TresCanvas
      clear-color="transparent"
      :dpr="[1, 1.5]"
    >
      <TresPerspectiveCamera :position="[0, 0, 7] as unknown as Vector3" />
      <FloatingShapeInner
        :geometry="geometry"
        :color="color"
        :position="position"
        :size="size"
        :speed="speed"
      />
    </TresCanvas>
  </div>
</template>
