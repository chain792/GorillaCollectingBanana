<template>
  <button class="text-xl mr-3 ranking-btn" @click="registerRanking">ランキング登録</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { db } from '../../firebase/firebase'
import { collection, addDoc, Timestamp } from "firebase/firestore";

const registerRanking = async (): Promise<void> => {
  try {
    const docRef = await addDoc(collection(db, "rankings"), {
      name: "test",
      score: 100,
      createdAt: Timestamp.now()
    });
  } catch (e) {
    console.error("Error adding firestore: ", e);
  }
}



/* モーダル処理 */
// const isVisibleRankingModal = ref(false)

// const showRanking = (): void => {
//   isVisibleRankingModal.value = true
// }

// const closeRankingModal = (): void => {
//   isVisibleRankingModal.value = false
// }

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