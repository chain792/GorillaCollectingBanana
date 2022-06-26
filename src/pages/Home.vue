<template>
  <div class="container">
    <h1 class="">ゴリラのバナナ集め</h1>
    <router-link to="/play" class="btn">バナナを集める</router-link><br/>
    <button class="btn" @click="openModal">遊び方</button>
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
.container{
  text-align: center;
}
.btn {
  background-color: #eb6100;
  border-radius: 100vh;
  text-decoration: none;
  padding: 10px;
  color: #fff;
  border: none;
  -webkit-user-select: none;
	-moz-user-select: none;
  -ms-user-select: none;
	user-select: none;
}
.btn:hover{
  background: #f56500;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
  padding: 11px;
}
</style>