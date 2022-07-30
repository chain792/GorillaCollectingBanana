<template>
  <teleport to="body">
    <div class="modal" id="setting-modal" v-show="isVisible" @click="close"></div>
    <div class="modal-content" v-show="isVisible">
      <h1 class="text-2xl mb-6">設定</h1>
      <div class="mt-3">
      
        <p class="text-center text-lg">BGM</p>
        <div class="flex">
          <SvgIcon v-if="volumeStore.bgmVolume" type="mdi" :path="mdiVolumeHigh" class="icon" @click="muteBgmVolume" />
          <SvgIcon v-else type="mdi" :path="mdiVolumeOff" class="icon" @click="unmuteBgmVolume" />
          <input ref="bgmRange" type="range" :value="volumeStore.bgmVolume" min="0" max="100" @change="changeBgmVolume">
        </div>
      </div>
      <div class="mt-3">
        <p class="text-center text-lg">効果音</p>
        <div class="flex">
          <SvgIcon v-if="volumeStore.effectVolume" type="mdi" :path="mdiVolumeHigh" class="icon" @click="muteEffectVolume" />
          <SvgIcon v-else type="mdi" :path="mdiVolumeOff" class="icon" @click="unmuteEffectVolume" />
          <input ref="effectRange" type="range" :value="volumeStore.effectVolume" min="0" max="100" @change="changeEffectVolume">
        </div>
      </div>

    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mdiVolumeHigh, mdiVolumeOff } from '@mdi/js';
import SvgIcon from '@jamescoyle/vue-icon'
import { useVolumeStore } from '../../store/volumeStore'

const volumeStore = useVolumeStore()

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


const bgmRange = ref<HTMLInputElement>()
const changeBgmVolume = (): void => {
  if(bgmRange.value){
    console.log(bgmRange.value.value)
    volumeStore.setBgmVolume(Number(bgmRange.value.value))
  }
}
const muteBgmVolume = (): void => {
  if(bgmRange.value){
    bgmRange.value.value = '0'
    volumeStore.muteBgmVolume()
  }
}
const unmuteBgmVolume = (): void => {
  if(bgmRange.value){
    bgmRange.value.value = String(volumeStore.bgmVolumeBeforeMute)
    volumeStore.unmuteBgmVolume()
  }
}

const effectRange = ref<HTMLInputElement>()
const changeEffectVolume = (): void => {
  if(effectRange.value){
    console.log(effectRange.value.value)
    volumeStore.setEffectVolume(Number(effectRange.value.value))
  }
}
const muteEffectVolume = (): void => {
  if(effectRange.value){
    effectRange.value.value = '0'
    volumeStore.muteEffectVolume()
  }
}
const unmuteEffectVolume = (): void => {
  if(effectRange.value){
    effectRange.value.value = String(volumeStore.effectVolumeBeforeMute)
    volumeStore.unmuteEffectVolume()
  }
}

</script>

<style lang="scss" scoped>
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


/*
https://webdesignfacts.net/entry/range-slider-css/#i-2
*/
input[type="range"] {
  outline: 0;
  border: 0;
  border-radius: 500px;
  width: 400px;
  max-width: 100%;
  margin: 10px 0 16px;
  transition: box-shadow 0.2s ease-in-out;
  // Chrome
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    & {
      overflow: hidden;
      height: 40px;
      -webkit-appearance: none;
      background-color: #ddd;
    }
    &::-webkit-slider-runnable-track {
      height: 40px;
      -webkit-appearance: none;
      color: #444;
      // margin-top: -1px;
      transition: box-shadow 0.2s ease-in-out;
    }
    &::-webkit-slider-thumb {
      width: 40px;
      -webkit-appearance: none;
      height: 40px;
      cursor: ew-resize;
      background: #fff;
      box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 40px #1597ff;
      border-radius: 50%;
      transition: box-shadow 0.2s ease-in-out;
      position: relative;
      // top: 1px;
    }
    &:active::-webkit-slider-thumb {
      background: #fff;
      box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 3px #1597ff;
    }
  }
  // Firefox
  &::-moz-range-progress {
    background-color: #43e5f7; 
  }
  &::-moz-range-track {  
    background-color: #9a905d;
  }
  // IE
  &::-ms-fill-lower {
    background-color: #43e5f7; 
  }
  &::-ms-fill-upper {  
    background-color: #9a905d;
  }
}

.icon{
  height: 40px;
  widows: 40px;
  margin: 10px 10px 16px 0px;
}
</style>