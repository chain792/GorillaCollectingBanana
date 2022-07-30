<template>
  <button class="btn text-xl mr-3" @click="reload">もう一度プレイ</button>
</template>

<script setup lang="ts">
import { pi } from '../../core/pi'

const reload = (): void => {
  pi()
  document.location.reload()
}

</script>

<style scoped>

</style>