<template>
  <div class="stage" @click="moveGorilla">
    <div class="click-none score">{{score}} 本</div>
    <img src="../assets/gorilla.png" width="50" height="50" class="click-none" id="gorilla">
    <BananaLayer class="click-none" @create-banana="createBanana" :isFinished="isFinished" />
    <DragonLayer class="click-none" @create-dragon="createDragon" :isFinished="isFinished" />
  </div>
  <GameOverModal :isVisible="isVisibleModal" :score="score" @close-modal="closeModal" /> 
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Gorilla } from '../core/gorilla'
import { Banana } from '../core/banana'
import { Dragon } from '../core/dragon'
import BananaLayer from '../components/BananaLayer.vue'
import DragonLayer from '../components/DragonLayer.vue'
import GameOverModal from './modal/GameOverModal.vue'
import { useStageStore } from '../store/stageStore'
import { useVolumeStore } from '../store/volumeStore'

const stageStore = useStageStore()
const volumeStore = useVolumeStore()

let gorilla: Gorilla
const bananas: Array<Banana> = []
const dragons: Array<Dragon> = []
let score = ref(0)
let isFinished = ref(false)
const audioDragon = new Audio("/Es-Boss-Final.mp3")
audioDragon.loop = true
audioDragon.volume = volumeStore.bgmVolume / 100
const audioBanana = new Audio("/banana.mp3")
audioBanana.volume = volumeStore.effectVolume / 100

onMounted(() => {
  const gorillaElement = document.getElementById('gorilla')!
  gorilla = new Gorilla(gorillaElement)
  play()
  audioDragon.play()
})

document.body.addEventListener('click', () => {
  if(audioDragon.paused && !isFinished.value){
    audioDragon.play()
  }
})


const moveGorilla = (e: MouseEvent): void => {
  gorilla.move(e.offsetX, e.offsetY)
}

const createBanana = (banana: Banana) => {
  bananas.push(banana)
}

const createDragon = (dragon: Dragon) => {
  dragons.push(dragon)
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

  for(let dragon of dragons){
    dragon.move(gorilla.positions())
    if(dragon.isCollision(gorilla.positions())){
      isFinished.value = true
      audioDragon.pause()
      stageStore.setScore(score.value)
      openModal()
      return
    }

    for(let fire of dragon.fires){
      if(fire.isOutStage()) continue

      fire.move()
      if(fire.isCollision(gorilla.positions())){
        isFinished.value = true
        audioDragon.pause()
        stageStore.setScore(score.value)
        openModal()
        return
      }
    }
  }

  if(isFinished.value){
    return
  }
  setTimeout(play, 1000 / 60)
}

onBeforeUnmount(() => {
  isFinished.value = true
  audioDragon.pause()
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