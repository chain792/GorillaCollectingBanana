<template>
  <Stage />
  <div class="mt-10 text-center">
    <div class="flex justify-center" v-show="store.isPlayFinished">
      <ReplayButton />
      <TweetButton class="mr-3" />
      <RegisterRankingButton />
      <RankingButton />
    </div>
    <div class="mt-12">
      <router-link to="/" class="btn text-2xl" @click="pi">トップページに戻る</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Stage from '../components/Stage.vue';
import ReplayButton from '../components/button/ReplayButton.vue'
import TweetButton from '../components/button/TweetButton.vue'
import RegisterRankingButton from '../components/button/RegisterRankingButton.vue'
import RankingButton from '../components/button/RankingButton.vue'
import { useStageStore } from '../store/stageStore'
import { pi } from '../core/pi'

import { useVolumeStore } from '../store/volumeStore';

const volumeStore = useVolumeStore()
volumeStore.setFromLocalStorage()

const store = useStageStore()
store.$reset()
store.normalMode()

</script>

<style>
</style>