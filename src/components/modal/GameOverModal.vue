<template>
  <teleport to="body">
    <div class="modal" id="sample-modal" v-show="isVisible" @click="close"></div>
    <div class="modal-content" v-show="isVisible">
      <p class="game-over">GAME OVER</p>
      <p class="text-lg mt-3">集めたバナナの本数</p>
      <p class="text-2xl mt-1">{{score}} 本</p>
      <div class="mt-5 flex justify-center">
        <ReplayButton class="-ml-6" />
        <TweetButton />
      </div>
      <div class="mt-5 flex justify-center">
        <RegisterRankingButton />
        <RankingButton />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import ReplayButton from '../button/ReplayButton.vue'
import TweetButton from '../button/TweetButton.vue'
import RegisterRankingButton from '../button/RegisterRankingButton.vue'
import RankingButton from '../button/RankingButton.vue'

interface Props {
  isVisible: boolean
  score: number
}
const props = withDefaults(defineProps<Props>(),{
  isVisible: false
})

interface Emits {
  (e: 'close-modal', value: void): void
}
const emit = defineEmits<Emits>()

const close = (): void => {
  emit('close-modal')
}

</script>

<style scoped>
.modal{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-content{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  width: 600px;
  height: 300px;
  border-radius: 20px;
  padding: 20px;
}

.twitter-btn {
  background-color: #55acee;
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

.twitter-btn:hover{
  background: #558dee;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
  padding: 11px;
}

.game-over{
  color: #FF8C00;
  background: -webkit-linear-gradient(0deg, #40E0D0, #FF8C00, #FF0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 35px;
}
</style>