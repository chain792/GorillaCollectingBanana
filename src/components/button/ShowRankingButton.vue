<template>
  <button class="ranking-btn text-xl mr-3" @click="showRanking">ランキングを見る</button>
  <ShowRankingModal :isVisible="isVisibleShowRankingModal" @close-modal="closeRankingModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ShowRankingModal from '../modal/ShowRankingModal.vue';

/* モーダル処理 */
const isVisibleShowRankingModal = ref(false)

const showRanking = (): void => {
  isVisibleShowRankingModal.value = true
}

const closeRankingModal = (): void => {
  isVisibleShowRankingModal.value = false
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
  padding: 11px;
}
</style>