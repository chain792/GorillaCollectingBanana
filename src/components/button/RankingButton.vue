<template>
  <button class="ranking-btn text-xl -mr-3" @click="showRankingModal">ランキングを見る</button>
  <RankingModal 
    :isVisible="isVisibleRankingModal" 
    @close-modal="closeRankingModal"
    :rankings="rankings"  
  />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { db } from '../../firebase/firebase'
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import RankingModal from '../modal/RankingModal.vue';
import { useStageStore } from '../../store/stageStore'

const store = useStageStore()

const isVisibleRankingModal = ref(false)

let rankings = reactive<any[]>([])

const showRankingModal = async (): Promise<void> => {
  rankings.splice(0)
  const querySnapshot = await getDocs(query(collection(db, store.collectionName), orderBy('score', 'desc'), limit(10)));
  querySnapshot.forEach((doc) => {
    rankings.push(doc.data())
  });
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