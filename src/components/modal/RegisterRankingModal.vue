<template>
  <teleport to="body">
    <div class="modal" id="register-ranking-modal" v-show="isVisible" @click="close"></div>
    <div class="modal-content" v-show="isVisible">
      <h1 class="text-2xl">ランキング登録</h1>
      <p class="mt-6 text-base">集めたバナナの本数 :&nbsp; {{ score }} 本</p>
      <form @submit.prevent class="mt-3">
        <div class="mb-6">
          <label for="text" class="block mb-2 text-sm font-medium text-gray-900">名前</label>
          <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="名前を入力"
            v-model="name"
          >
        </div>
      </form>
      <button class="btn text-xl" @click="submit">登録する</button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { db } from '../../firebase/firebase'
import { collection, addDoc, Timestamp} from "firebase/firestore";
import { useStageStore } from '../../store/stageStore'

const store = useStageStore()

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

const close = ():void => {
  emit('close-modal')
}

const name = ref('')

const submit = async (): Promise<void> => {
  try {
    const docRef = await addDoc(collection(db, "rankings"), {
      name: name.value,
      score: props.score,
      createdAt: Timestamp.now()
    })
    store.registered()
    close()
  } catch (e) {
    console.error("Error adding firestore: ", e)
  }
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