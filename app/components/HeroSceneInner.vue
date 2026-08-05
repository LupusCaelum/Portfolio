<script setup lang="ts">
import { useLoop } from '@tresjs/core'
import { Stars } from '@tresjs/cientos'
import type { Vector3 } from 'three'

const group = shallowRef()
const mouse = reactive({ x: 0, y: 0 })

function onMouseMove(event: MouseEvent) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = (event.clientY / window.innerHeight) * 2 - 1
}

onMounted(() => window.addEventListener('mousemove', onMouseMove))
onUnmounted(() => window.removeEventListener('mousemove', onMouseMove))

const { onBeforeRender } = useLoop()
onBeforeRender(({ delta }) => {
  if (!group.value) return
  group.value.rotation.y += delta * 0.15
  group.value.rotation.x += (mouse.y * 0.35 - group.value.rotation.x) * delta * 3
  group.value.position.x += (mouse.x * 0.4 - group.value.position.x) * delta * 3
})
</script>

<template>
  <TresGroup ref="group">
    <TresMesh :position="[2.6, 0.2, -1] as unknown as Vector3">
      <TresTorusKnotGeometry :args="[1.2, 0.32, 200, 32]" />
      <TresMeshBasicMaterial
        color="#169bba"
        :wireframe="true"
        :transparent="true"
        :opacity="0.45"
      />
    </TresMesh>
    <Stars
      :radius="70"
      :depth="60"
      :count="3000"
      :factor="6"
      :fade="true"
    />
  </TresGroup>
</template>
