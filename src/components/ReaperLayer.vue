<template>
  <div id="reaper-layer"></div>
</template>

<script setup lang="ts">
import { onMounted, watch, toRefs, onBeforeUnmount } from "vue";
import { Reaper } from "../core/reaper";

interface Props {
  isFinished: boolean;
}
const props = defineProps<Props>();
const { isFinished } = toRefs(props);

interface Emits {
  (e: "create-reaper", value: Reaper): void;
}
const emit = defineEmits<Emits>();

let reaperLayer: HTMLElement;
let intervalID: number;

onMounted(() => {
  reaperLayer = document.getElementById("reaper-layer")!;
  addReaper()
});

const addReaper = (): void => {
  const reaper = new Reaper(reaperLayer);
  emit("create-reaper", reaper);
};

watch(isFinished, () => {
  if (isFinished.value) {
    window.clearInterval(intervalID);
    Reaper.initialize();
  }
});

onBeforeUnmount(() => {
  window.clearInterval(intervalID);
  Reaper.initialize();
});
</script>

<style scoped>
#reaper-layer {
  width: 800px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
