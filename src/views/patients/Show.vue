<template>
  <div class="h-full space-y-5">
    <div class="flex justify-end items-center bg-white py-3 px-5 space-x-5 shadow-md rounded-md">
      <router-link to="/edit/1" class="py-2 px-5 bg-blue-500 hover:bg-blue-600 rounded-md text-white transition-all duration-300">Modifier</router-link>
      <router-link to="/edit/1" class="py-2 px-5 bg-red-500 hover:bg-red-600 rounded-md text-white transition-all duration-300">Suppromer</router-link>
    </div>
    
    <div class="grid grid-cols-2 gap-10">
      <div class="h-[40vh] bg-white shadow-md rounded-md"> </div>
      <div class="h-[40vh] bg-white shadow-md rounded-md"></div>
      <div class="h-[40vh] bg-white shadow-md rounded-md"></div>
      <div class="h-[40vh] bg-white shadow-md rounded-md"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>