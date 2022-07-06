<template>
  <teleport to="body">
    <div class="modal" id="ranking-modal" v-show="isVisible" @click="close"></div>
    <div class="modal-content" v-show="isVisible">
      <h1 class="text-2xl">ランキング</h1>
      <div class="shadow-md mt-5">
        <table class="w-full text-left width-600">
          <thead class="text-gray-700 bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" class="px-8 py-3 w-3/12">
                順位
              </th>
              <th scope="col" class="px-6 py-3 w-5/12">
                名前
              </th>
              <th scope="col" class="px-6 py-3 w-4-12">
                集めたバナナの本数
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b odd:bg-yellow-100 even:bg-yellow-50"
              v-for="(ranking, index) in rankings"
            >
              <th scope="row" class="px-8 py-4 font-semibold">
                {{ index + 1 }}位
              </th>
              <td class="px-6 py-4 min-width-200" >
                {{ ranking.name }}
              </td>
              <td class="px-6 py-4">
                {{ ranking.score }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { db } from '../../firebase/firebase'
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

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


const rankings = reactive<any[]>([])

onMounted(async () => {
  const querySnapshot = await getDocs(query(collection(db, "rankings"), orderBy('score', 'desc'), limit(10)));
  querySnapshot.forEach((doc) => {
    rankings.push(doc.data())
  });
})

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

.width-600{
  width: 600px;
}


</style>