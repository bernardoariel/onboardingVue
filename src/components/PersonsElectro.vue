<template>
  <div>{{ title }}</div>
  <ul>
    <li v-for="person of data" :key="person">{{ person }}</li>
  </ul>
</template>

<script setup lang="ts">
const { title, data } = defineProps<{ title: string; data: string[] }>()
</script>

<style scoped></style>
