<template>
  <div class="container">
    <h1>ゴリラのバナナ集め</h1>
    <router-link to="/play" class="btn">バナナを集める</router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.container{
  text-align: center;
}
.btn {
  background-color: #eb6100;
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
.btn:hover{
  background: #f56500;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
  padding: 11px;
}
</style>