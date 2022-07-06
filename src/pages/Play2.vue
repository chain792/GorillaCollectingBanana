<template>
  <Stage2 />
  <div class="mt-10 text-center">
    <div class="flex justify-center" v-show="store.isPlayFinished">
      <ReplayButton />
      <TweetButton :score="store.score" class="mr-3" />
      <RegisterRankingButton />
      <RankingButton />
    </div>
    <div class="mt-12">
      <router-link to="/" class="btn text-2xl">トップページに戻る</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Stage2 from '../components/Stage2.vue';
import ReplayButton from '../components/button/ReplayButton.vue'
import TweetButton from '../components/button/TweetButton.vue'
import RegisterRankingButton from '../components/button/RegisterRankingButton.vue'
import RankingButton from '../components/button/RankingButton.vue'
import { useStageStore } from '../store/stageStore'

const store = useStageStore()
store.$reset()

</script>

<style>
</style>