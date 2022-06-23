<template>
  <div class="stage" @click="moveGorilla">
    <img src="../assets/gorilla.png" width="50" height="50" id="gorilla">
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Gorilla } from '../core/gorilla'

let gorilla: Gorilla

onMounted(() => {
  const gorillaElement = document.getElementById('gorilla')!
  gorilla = new Gorilla(gorillaElement)
})

const moveGorilla = (e: MouseEvent): void =>{
  gorilla.move(e.offsetX, e.offsetY)
}
</script>

<style scoped>
.stage{
  width: 800px;
  height: 600px;
  background-color: darkseagreen;
  margin: 0 auto;
}

#gorilla{
  pointer-events: none;
}
</style>