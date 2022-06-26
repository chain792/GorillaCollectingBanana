<template>
  <div class="stage" @click="moveGorilla">
    <div class="click-none score">{{score}} pt</div>
    <img src="../assets/gorilla.png" width="50" height="50" class="click-none" id="gorilla">
    <BananaLayer class="click-none" @create-banana="createBanana" :isFinished="isFinished" />
    <SnakeLayer class="click-none" @create-snake="createSnake" :isFinished="isFinished" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Gorilla } from '../core/gorilla'
import { Banana } from '../core/banana'
import { Snake } from '../core/snake'
import BananaLayer from '../components/BananaLayer.vue'
import SnakeLayer from '../components/SnakeLayer.vue'

let gorilla: Gorilla
const bananas: Array<Banana> = []
const snakes: Array<Snake> = []
let score = ref(0)
let isFinished = ref(false)

onMounted(() => {
  const gorillaElement = document.getElementById('gorilla')!
  gorilla = new Gorilla(gorillaElement)
  play()
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
  bananas.forEach(banana => {
    if(banana.isCollision(gorilla.positions())){
      score.value += 100
      banana.destroy()
      const index = bananas.indexOf(banana)
      bananas.splice(index, 1)
    }
  })

  snakes.forEach(snake => {
    snake.move(gorilla.positions())
    if(snake.isCollision(gorilla.positions())){
      isFinished.value = true
      alert('gameover')
      return
    }
  })
  if(isFinished.value) return
  requestAnimationFrame(play)
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
}
</style>