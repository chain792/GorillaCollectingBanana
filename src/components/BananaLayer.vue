<template>
  <div id="banana-layer"></div>
</template>

<script setup lang="ts">
import { onMounted, watch, toRefs, ref } from 'vue'

interface Props {
  coordinate: string;
}
const props = defineProps<Props>();
const { coordinate } = toRefs(props)

watch(coordinate, () => {
  removeBanana(coordinate.value)
})

interface Emits {
  (e: 'create-banana', value: string): void
  (e: 'delete-banana', value: string): void
}
const emit = defineEmits<Emits>()

let bananaLayer: HTMLElement
const columnNumber = 16
const rowNumber = 12
type Grid = {
  row: number
  column: number
  isBanana: boolean
}
const bananaGrids: Array<Grid> = []
for(let i = 0; i < columnNumber; i++){
  for(let j = 0; j < rowNumber; j++){
    bananaGrids.push({row: j, column: i, isBanana: false})
  }
}

onMounted(() => {
  bananaLayer = document.getElementById('banana-layer')!
  window.setInterval(() => {
    addBanana()
  }, 2000)
})

const fisherYatesShuffle = (arr: Array<any>) => {
  for(let i = arr.length-1 ; i>0 ;i--){
    let j = Math.floor( Math.random() * (i + 1) );
    [arr[i],arr[j]]=[arr[j],arr[i]] 
  }
}

const addBanana = (): void => {
  fisherYatesShuffle(bananaGrids)
  const grid = bananaGrids.filter(v => !v.isBanana)[0]
  if(!grid) return
  grid.isBanana = true

  const bananaImage = document.createElement('img')
  bananaImage.id = `${grid.column}-${grid.row}`
  bananaImage.src = '/src/assets/banana.png'
  bananaImage.width=50
  bananaImage.height=50
  bananaImage.style.position = 'absolute'

  bananaImage.style.top = `${grid.row * 50}px`
  bananaImage.style.left = `${grid.column * 50}px`
  bananaLayer.appendChild(bananaImage)

  emit('create-banana', `${grid.column}-${grid.row}`)
}

const removeBanana = (coordinate: string): void => {
  const bananaElement = document.getElementById(coordinate)
  if(!bananaElement) return
  bananaElement.remove()
  const c = Number(coordinate.replace(/-.*/, ''))
  const r = Number(coordinate.replace(/.*-/, ''))
  bananaGrids.find((v) => v.column === c && v.row === r)!.isBanana = false

  emit('delete-banana', coordinate)
}
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