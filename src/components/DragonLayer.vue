<template>
  <div id="dragon-layer"></div>
</template>

<script setup lang="ts">
import { onMounted, watch, toRefs, onBeforeUnmount } from 'vue'
import { Dragon } from '../core/dragon'

interface Props {
  isFinished: boolean
}
const props = defineProps<Props>()
const { isFinished } = toRefs(props)

interface Emits {
  (e: 'create-dragon', value: Dragon): void
}
const emit = defineEmits<Emits>()

let dragonLayer: HTMLElement
let intervalID: number

onMounted(() => {
  dragonLayer = document.getElementById('dragon-layer')!
  addDragon()
  intervalID = window.setInterval(() => {
    addDragon()
  }, 15000)
})

const addDragon = (): void => {
  const dragon = new Dragon(dragonLayer)
  emit('create-dragon', dragon)
}

watch(isFinished, () => {
  if(isFinished.value){
    window.clearInterval(intervalID)
  }
})

onBeforeUnmount(() => {
  window.clearInterval(intervalID)
  Dragon.initialize()
})

</script>

<style scoped>
#dragon-layer{
  width: 800px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
}

</style>