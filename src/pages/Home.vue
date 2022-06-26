<template>
  <div class="text-center font-semibold mt-10">
    <div class="flex justify-center">
      <img src="../assets/gorilla.png" alt="" width="50" height="50">
      <h1 class="text-6xl title-color">ゴリラのバナナ集め</h1>
      <img src="../assets/banana.png" alt="" width="50" height="50">
    </div>
    <div class="flex justify-center items-center" style="height: 60vh;">
      <div>
        <div>
          <router-link to="/play" class="btn text-2xl">バナナを集める</router-link>
        </div>
        <div class="mt-5">
          <button class="btn text-2xl" @click="openModal">遊び方</button>
        </div>
      </div>
    </div>
    <HowToPlayModal :isVisible="isVisibleModal" @close-modal="closeModal" />
  </div>
</template>

<script setup lang="ts">
import HowToPlayModal from '../components/HowToPlayModal.vue';
import { ref } from 'vue'

const isVisibleModal = ref(false)
const openModal = (): void => {
  isVisibleModal.value = true
}
const closeModal = (): void => {
  isVisibleModal.value = false
}

</script>

<style scoped>
.title-color{
  color: #eb1b00;
}
</style>