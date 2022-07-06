<template>
  <a :href="`https://twitter.com/intent/tweet?url=https://gorilla-collecting-banana.netlify.app/&hashtags=ゴリラのバナナ集め&text=ゴリラが集めたバナナの本数は${score}本でした！`" class="twitter-btn  text-xl" target="_blank">ツイートする</a>
</template>

<script setup lang="ts">

interface Props {
  score: number
}
const props = defineProps<Props>()

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