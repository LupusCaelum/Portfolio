<script setup lang="ts">
import { useLoop } from '@tresjs/core'
import type { Vector3 } from 'three'

const props = withDefaults(defineProps<{
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

const mesh = shallowRef()

const { onBeforeRender } = useLoop()
onBeforeRender(({ elapsed }) => {
  if (!mesh.value) return
  mesh.value.rotation.x = elapsed * 0.25 * props.speed
  mesh.value.rotation.y = elapsed * 0.4 * props.speed
})
</script>

<template>
  <TresMesh ref="mesh" :position="position as unknown as Vector3">
    <TresIcosahedronGeometry v-if="geometry === 'icosahedron'" :args="[size, 1]" />
    <TresOctahedronGeometry v-else-if="geometry === 'octahedron'" :args="[size, 0]" />
    <TresTorusKnotGeometry v-else :args="[size, size * 0.35, 128, 16]" />
    <TresMeshBasicMaterial :color="color" :wireframe="true" :transparent="true" :opacity="0.4" />
  </TresMesh>
</template>
