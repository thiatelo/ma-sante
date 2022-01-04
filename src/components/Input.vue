<template>
  <label :for="id">{{ label }}</label>
  <input :type="type" :id="id" :placeholder="placeholder">
</template>

<script setup>

const props = defineProps({
  type: String,
  id: String,
  label: String,
  placeholder: String,
})

</script>

<style scoped>

</style>