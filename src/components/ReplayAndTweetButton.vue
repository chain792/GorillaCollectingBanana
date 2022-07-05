<template>
  <div class="flex justify-center">
    <button class="btn text-xl mr-3" @click="reload">もう一度プレイ</button>
    <a :href="`https://twitter.com/intent/tweet?url=https://gorilla-collecting-banana.netlify.app/&hashtags=ゴリラのバナナ集め&text=ゴリラが集めたバナナの本数は${score}本でした！`" class="twitter-btn  text-xl" target="_blank">ツイートする</a>
    <button class="btn text-xl mr-3" @click="registerRanking">ランキングに登録する</button>
  </div>
</template>

<script setup lang="ts">
import { db } from '../firebase/firebase'
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface Props {
  score: number
}
const props = defineProps<Props>()

const reload = (): void => {
  document.location.reload()
}

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
</script>

<style scoped>
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
</style>