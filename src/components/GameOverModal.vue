<template>
  <teleport to="body">
    <div class="modal" id="sample-modal" v-show="isVisible" @click="close"></div>
    <div class="modal-content" v-show="isVisible">
      <p>GAME OVER</p>
      <p>集めたバナナの本数</p>
      <p>{{props.score}} 本</p>
      <div class="flex">
        <button class="btn" @click="reload">もう一度プレイ</button>
        <a :href="`https://twitter.com/intent/tweet?url=https://gorilla-collecting-banana.netlify.app/&hashtags=ゴリラのバナナ集め&text=ゴリラが集めたバナナの本数は${props.score}本でした！`" class="twitter-btn" target="_blank">ツイートする</a>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
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

const reload = (): void => {
  document.location.reload()
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
  height: auto;
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
</style>