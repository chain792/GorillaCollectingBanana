<template>
  <Stage />
  <div class="mt-10 text-center">
    <div class="">
      <ReplayAndTweetButton v-show="store.isPlayFinished" :score="store.score" />
    </div>
    <div class="mt-12">
      <router-link to="/" class="btn text-2xl">トップページに戻る</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Stage from '../components/Stage.vue';
import ReplayAndTweetButton from '../components/ReplayAndTweetButton.vue';
import { useStageStore } from '../store/stageStore'

const store = useStageStore()
store.$reset()

</script>

<style>
</style>