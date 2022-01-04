<template>
  <label :for="id">{{ label }}</label>
  <select :id="id">
    <option v-for="(option, index) in options" :key="index" class="capitalize" :value="option">{{option}}</option>
  </select>
</template>

<script setup>

const props = defineProps({
  id: String,
  label: String,
  options: Array,
})

</script>

<style scoped>

</style>