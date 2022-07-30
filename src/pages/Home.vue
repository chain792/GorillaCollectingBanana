<template>
  <div class="text-center font-semibold mt-10">
    <div class="flex justify-center">
      <img src="../assets/gorilla.png" alt="" width="50" height="50">
      <h1 class="text-6xl text-red-500">ゴリラのバナナ集め</h1>
      <img src="../assets/banana.png" alt="" width="50" height="50">
    </div>
    <div class="flex justify-center items-center" style="height: 60vh;">
      <div>
        <div>
          <h1 class="text-4xl text-gray-800">バナナを集める</h1>
        </div>
        <div class="mt-10 flex">
          <div class="ml-16">
            <router-link to="/play" class="btn text-2xl" @click="pi">ノーマルモード</router-link>
            <p class="mt-6 text-sm">ヘビを避けつつバナナを集めよう</p>
          </div>
          <div class="ml-12">
            <router-link to="/play2" class="btn text-2xl" @click="pi">ハードモード</router-link>
            <p class="mt-6 text-sm">死神から逃げつつバナナを集めよう</p>
          </div>
          <div class="ml-10">
            <router-link to="/play3" class="btn text-2xl" @click="pi">エクストラモード</router-link>
            <p class="mt-6 text-sm">ドラゴンの攻撃を回避しつつバナナを集めよう</p>
          </div>
        </div>
        <div class="mt-24 flex justify-center">
          <button class="btn text-2xl w-40 mx-5" @click="openHowToPlayModal">遊び方</button>
          <button class="btn text-2xl w-40 mx-5" @click="openSettingModal">設定</button>
        </div>
      </div>
    </div>
    <HowToPlayModal :isVisible="isVisibleHowToPlayModal" @close-modal="closeHowToPlayModal" />
    <SettingModal :isVisible="isVisibleSettingModal" @close-modal="closeSettingModal" />
  </div>
</template>

<script setup lang="ts">
import HowToPlayModal from '../components/modal/HowToPlayModal.vue';
import SettingModal from '../components/modal/SettingModal.vue';
import { ref } from 'vue'
import { pi } from '../core/pi'

const isVisibleHowToPlayModal = ref(false)
const openHowToPlayModal = (): void => {
  isVisibleHowToPlayModal.value = true
  pi()
}
const closeHowToPlayModal = (): void => {
  isVisibleHowToPlayModal.value = false
  pi()
}

const isVisibleSettingModal = ref(false)
const openSettingModal = (): void => {
  isVisibleSettingModal.value = true
  pi()
}
const closeSettingModal = (): void => {
  isVisibleSettingModal.value = false
  pi()
}

</script>

<style scoped>
</style>