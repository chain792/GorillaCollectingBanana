<template>
  <button class="btn text-xl mr-3" @click="reload">もう一度プレイ</button>
</template>

<script setup lang="ts">

const reload = (): void => {
  document.location.reload()
}

</script>

<style scoped>

</style>