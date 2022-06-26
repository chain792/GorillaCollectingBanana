<template>
  <div id="banana-layer"></div>
</template>

<script setup lang="ts">
import { onMounted, watch, toRefs } from 'vue'
import { Grid } from '../core/grid'
import { Banana } from '../core/banana'

interface Props {
  isFinished: boolean
}
const props = defineProps<Props>();
const { isFinished } = toRefs(props)

interface Emits {
  (e: 'create-banana', value: Banana): void
}
const emit = defineEmits<Emits>()

let bananaLayer: HTMLElement
let intervalID: number

onMounted(() => {
  Grid.setup()
  bananaLayer = document.getElementById('banana-layer')!
  intervalID = window.setInterval(() => {
    addBanana()
  }, 500)
})

const addBanana = (): void => {
  const grid = Grid.getUnUsedGrid()
  if(!grid) return
  const banana = new Banana(bananaLayer, grid)
  emit('create-banana', banana)
}

watch(isFinished, () => {
  if(isFinished){
    window.clearInterval(intervalID)
  }
})

</script>

<style scoped>
#banana-layer{
  width: 800px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
}

</style>