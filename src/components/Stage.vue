<template>
  <div class="stage" @click="moveGorilla">
    <div class="click-none score">{{score}} pt</div>
    <img src="../assets/gorilla.png" width="50" height="50" class="click-none" id="gorilla">
    <BananaLayer class="click-none" @create-banana="createBanana" @delete-banana="deleteBanana" :coordinate="computedCoordinate" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Gorilla } from '../core/gorilla'
import BananaLayer from '../components/BananaLayer.vue'

let gorilla: Gorilla
const bananaCoordinates: Array<string> = []
let score = ref(0)
let coordinate = ref('')

const computedCoordinate = computed(() => {
  return coordinate.value
})

onMounted(() => {
  const gorillaElement = document.getElementById('gorilla')!
  gorilla = new Gorilla(gorillaElement)
  play()
})

const moveGorilla = (e: MouseEvent): void => {
  gorilla.move(e.offsetX, e.offsetY)
}

const createBanana = (coordinate: string) => {
  bananaCoordinates.push(coordinate)
}

const deleteBanana = (coordinate: string) => {
  const index = bananaCoordinates.indexOf(coordinate)
  bananaCoordinates.splice(index, 1)
}

const play = () => {
  const gorillaCoordinate = gorilla.gorillaCoordinates()
  if(gorillaCoordinate){

    if(bananaCoordinates.includes(gorillaCoordinate)){
      score.value += 100
      coordinate.value = gorillaCoordinate
    }else{
      coordinate.value = ''
    }
  }
  requestAnimationFrame(play)
}

</script>

<style scoped>
.stage{
  width: 800px;
  height: 600px;
  background-color: darkseagreen;
  margin: 0 auto;
  position: relative;
}

.click-none{
  pointer-events: none;
}

.score{
  position: absolute;
  top: 5px;
  right: 15px;
  color: #fff;
  font-weight: bold;
  z-index: 9999;
}
</style>