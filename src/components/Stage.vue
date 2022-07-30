<template>
  <div class="stage" @click="moveGorilla">
    <div class="click-none score">{{score}} 本</div>
    <img src="../assets/gorilla.png" width="50" height="50" class="click-none" id="gorilla">
    <BananaLayer class="click-none" @create-banana="createBanana" :isFinished="isFinished" />
    <SnakeLayer class="click-none" @create-snake="createSnake" :isFinished="isFinished" />
  </div>
  <GameOverModal :isVisible="isVisibleModal" :score="score" @close-modal="closeModal" /> 
</template>

<script setup lang="ts">
import { ref, onMounted,  onBeforeUnmount } from 'vue'
import { Gorilla } from '../core/gorilla'
import { Banana } from '../core/banana'
import { Snake } from '../core/snake'
import BananaLayer from '../components/BananaLayer.vue'
import SnakeLayer from '../components/SnakeLayer.vue'
import GameOverModal from './modal/GameOverModal.vue'
import { useStageStore } from '../store/stageStore'
import { useVolumeStore } from '../store/volumeStore'

const stageStore = useStageStore()
const volumeStore = useVolumeStore()

let gorilla: Gorilla
const bananas: Array<Banana> = []
const snakes: Array<Snake> = []
let score = ref(0)
let isFinished = ref(false)
const audioSnake = new Audio("/tanosimi.mp3")
audioSnake.loop = true
audioSnake.volume = volumeStore.bgmVolume / 100
const audioBanana = new Audio("/banana.mp3")
audioBanana.volume = volumeStore.effectVolume / 100

onMounted(() => {
  const gorillaElement = document.getElementById('gorilla')!
  gorilla = new Gorilla(gorillaElement)
  play()
  audioSnake.play()
})

document.body.addEventListener('click', () => {
  if(audioSnake.paused && !isFinished.value){
    audioSnake.play()
  }
})


const moveGorilla = (e: MouseEvent): void => {
  gorilla.move(e.offsetX, e.offsetY)
}

const createBanana = (banana: Banana) => {
  bananas.push(banana)
}

const createSnake = (snake: Snake) => {
  snakes.push(snake)
}

const play = () => {
  for(let banana of bananas){
    if(banana.isCollision(gorilla.positions())){
      score.value += 1
      banana.destroy()
      const index = bananas.indexOf(banana)
      bananas.splice(index, 1)
      audioBanana.currentTime = 0
      audioBanana.play()
    }
  }

  for(let snake of snakes){
    snake.move(gorilla.positions())
    if(snake.isCollision(gorilla.positions())){
      isFinished.value = true
      audioSnake.pause()
      stageStore.setScore(score.value)
      openModal()
      return
    }
  }

  if(isFinished.value){
    return
  }
  requestAnimationFrame(play)
}

onBeforeUnmount(() => {
  isFinished.value = true
  audioSnake.pause()
})


/* モーダル処理 */
const isVisibleModal = ref(false)

const openModal = (): void => {
  isVisibleModal.value = true
}

const closeModal = (): void => {
  isVisibleModal.value = false
}

</script>

<style scoped>
.stage{
  width: 800px;
  height: 600px;
  background-color: darkseagreen;
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
  -webkit-user-select: none;
	-moz-user-select: none;
  -ms-user-select: none;
	user-select: none;
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
  font-size: 18px;
}
</style>