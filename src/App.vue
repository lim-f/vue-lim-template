<!--
 * @Author: chenzhongsheng
 * @Date: 2024-07-12 22:08:25
 * @Description: Coding something
-->
<script setup>
import Counter from './components/Counter.vue'
</script>

<template>
  <div>
    <a href="https://github.com/lim-f/docs" target="_blank">
      <img src="/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <img src="/vite.svg" class="logo" alt="Vite logo" />
  </div>
  <h1>
    <a href='https://github.com/lim-f/vue-lim'>Vue Lim</a>
  </h1>
  <h2>Make Vue easier to Use</h2>

  <div class="card">
    <Counter />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.read-the-docs {
  color: #888;
}
</style>
