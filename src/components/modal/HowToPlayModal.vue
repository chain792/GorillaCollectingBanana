<template>
  <teleport to="body">
    <div class="modal" id="sample-modal" v-show="isVisible" @click="close"></div>
    <div class="modal-content" v-show="isVisible">
      <h1 class="text-2xl">遊び方</h1>
      <div>
        <p class="text-lg mt-5">1. ステージをクリックしてゴリラを移動させよう！</p>
        <div>
          <img src="/src/assets/play_movie.gif" alt="" width="380">
        </div>
        <div class="text-base mt-3">
          ※移動距離が長いほど速く移動できます！<br/>
          ※移動が終わるまで、他の場所に移動できません
        </div>
        <p class="text-lg mt-5">2. バナナを集めてポイントを獲得しよう！</p>
        <p class="text-lg mt-5">3. 敵に当たるとゲームオーバーです！</p>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
interface Props {
  isVisible: boolean
}
const props = withDefaults(defineProps<Props>(),{
  isVisible: false
})

interface Emits {
  (e: 'close-modal', value: void): void
}
const emit = defineEmits<Emits>()

const close = ():void => {
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
  height: auto;
  border-radius: 20px;
  padding: 20px;
}
</style>