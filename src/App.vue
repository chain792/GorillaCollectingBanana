<script setup lang="ts">
</script>

<template>
  <router-view></router-view>
</template>

<style>
body{
  background-color: aliceblue;
  font-family: monospace;
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
}
</style>
