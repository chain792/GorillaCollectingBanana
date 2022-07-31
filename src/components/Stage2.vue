<template>
  <div class="stage" @click="moveGorilla">
    <div class="click-none score">{{score}} 本</div>
    <img src="../assets/gorilla.png" width="50" height="50" class="click-none" id="gorilla">
    <BananaLayer class="click-none" @create-banana="createBanana" :isFinished="isFinished" />
    <ReaperLayer class="click-none" @create-reaper="createReaper" :isFinished="isFinished" />
  </div>
  <GameOverModal :isVisible="isVisibleModal" :score="score" @close-modal="closeModal" /> 
</template>

<script setup lang="ts">
import { ref, onMounted,  onBeforeUnmount } from 'vue'
import { Gorilla } from '../core/gorilla'
import { Banana } from '../core/banana'
import { Reaper } from '../core/reaper'
import BananaLayer from '../components/BananaLayer.vue'
import ReaperLayer from '../components/ReaperLayer.vue'
import GameOverModal from './modal/GameOverModal.vue'
import { useStageStore } from '../store/stageStore'
import { useVolumeStore } from '../store/volumeStore'

const stageStore = useStageStore()
const volumeStore = useVolumeStore()

let gorilla: Gorilla
const bananas: Array<Banana> = []
const reapers: Array<Reaper> = []
let score = ref(0)
let isFinished = ref(false)
const audioReaper = new Audio("/Horror-gouma.mp3")
audioReaper.loop = true
audioReaper.volume = volumeStore.bgmVolume / 100
const audioBanana = new Audio("/banana.mp3")
audioBanana.volume = volumeStore.effectVolume / 100

onMounted(() => {
  const gorillaElement = document.getElementById('gorilla')!
  gorilla = new Gorilla(gorillaElement)
  play()
  audioReaper.play()
})

document.body.addEventListener('click', () => {
  if(audioReaper.paused && !isFinished.value){
    audioReaper.play()
  }
})


const moveGorilla = (e: MouseEvent): void => {
  gorilla.move(e.offsetX, e.offsetY)
}

const createBanana = (banana: Banana) => {
  bananas.push(banana)
}

const createReaper = (reaper: Reaper) => {
  reapers.push(reaper)
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

  for(let reaper of reapers){
    reaper.move(gorilla.positions())
    if(reaper.isCollision(gorilla.positions())){
      isFinished.value = true
      audioReaper.pause()
      stageStore.setScore(score.value)
      openModal()
      return
    }
  }

  if(isFinished.value){
    return
  }
  setTimeout(play, 1000 / 60)
}

onBeforeUnmount(() => {
  isFinished.value = true
  audioReaper.pause()
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
  background-color: rgba(169, 169, 169, 0.5);
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