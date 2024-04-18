<script setup>
let currentYear = new Date().getFullYear();
</script>

<template>
  <main>
    <div class="content text-red-500">
      <h1 class="content__heading">{{ currentYear }} Year Progress Bar</h1>
      <slot />
      <p>{{ currentYear }} is</p>
    </div>
  </main>
</template>

<style scoped>
.content {
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
</style>
