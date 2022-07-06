<template>
  <button class="ranking-btn text-xl -mr-3" @click="showRankingModal">ランキングを見る</button>
  <RankingModal :isVisible="isVisibleRankingModal" @close-modal="closeRankingModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RankingModal from '../modal/RankingModal.vue';

/* モーダル処理 */
const isVisibleRankingModal = ref(false)

const showRankingModal = (): void => {
  isVisibleRankingModal.value = true
}

const closeRankingModal = (): void => {
  isVisibleRankingModal.value = false
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
</style>