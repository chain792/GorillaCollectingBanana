<template>
  <a :href="`https://twitter.com/intent/tweet?&text=${store.tweetPreMessage}ゴリラが集めたバナナの本数は${store.score}本でした！%0Ahttps://gorilla-collecting-banana.netlify.app/%0A&hashtags=ゴリラのバナナ集め`" class="twitter-btn  text-xl" target="_blank" @click="pi">ツイートする</a>
</template>

<script setup lang="ts">
import { useStageStore } from '../../store/stageStore'
import { pi } from '../../core/pi'

const store = useStageStore()

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
}
</style>