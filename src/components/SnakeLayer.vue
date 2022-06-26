<template>
  <div id="snake-layer"></div>
</template>

<script setup lang="ts">
import { onMounted, watch, toRefs, onBeforeUnmount } from 'vue'
import { Snake } from '../core/snake'

interface Props {
  isFinished: boolean
}
const props = defineProps<Props>()
const { isFinished } = toRefs(props)

interface Emits {
  (e: 'create-snake', value: Snake): void
}
const emit = defineEmits<Emits>()

let snakeLayer: HTMLElement
let intervalID: number

onMounted(() => {
  snakeLayer = document.getElementById('snake-layer')!
  intervalID = window.setInterval(() => {
    addSnake()
  }, 2000)
})

const addSnake = (): void => {
  const snake = new Snake(snakeLayer)
  emit('create-snake', snake)
}

watch(isFinished, () => {
  if(isFinished){
    window.clearInterval(intervalID)
  }
})

onBeforeUnmount(() => {
  window.clearInterval(intervalID)
})

</script>

<style scoped>
#snake-layer{
  width: 800px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
}

</style>