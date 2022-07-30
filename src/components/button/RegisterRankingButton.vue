<template>
  <button class="text-xl mr-3 ranking-btn" 
    @click="showRegisterRankingModal"
    :disabled="store.isRegistered"
  >
    ランキング登録
  </button>
  <RegisterRankingModal
    :isVisible="isVisibleRegisterRankingModal"
    @close-modal="closeRegisterRankingModal"
    :score="store.score" 
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RegisterRankingModal from '../modal/RegisterRankingModal.vue';
import { useStageStore } from '../../store/stageStore'
import { pi } from '../../core/pi'

const store = useStageStore()

/* モーダル処理 */
const isVisibleRegisterRankingModal = ref(false)

const showRegisterRankingModal = (): void => {
  isVisibleRegisterRankingModal.value = true
  pi()
}

const closeRegisterRankingModal = (): void => {
  isVisibleRegisterRankingModal.value = false
  pi()
}

</script>

<style scoped>
.ranking-btn {
  background-color: rgb(250, 200, 10);
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

.ranking-btn:hover{
  background: rgb(250, 195, 10);
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}

.ranking-btn:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  font-size:0;
}
.ranking-btn:disabled::before {
  font-size: 1rem;
  content: 'ランキング登録済みです';
  color: rgb(240, 0, 0);
}
</style>