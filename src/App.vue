<template>
  <div class="bg-gray-300 min-h-screen">
    <div id="nav" class="flex justify-center items-center space-x-3 shadow-md sticky top-0 w-full py-5 px-10 bg-blue-700 text-sm text-white uppercase">
      <router-link to="/" class="bg-blue-700 hover:bg-blue-600 shadow-inner transition-all duration-300 px-2 py-1">Home</router-link>
      <router-link to="/create" class="bg-blue-700 hover:bg-blue-600 shadow-inner transition-all duration-300 px-2 py-1">Ajouter un Patient</router-link>
    </div>
    <div class="p-10">
      <router-view/>
    </div>
  </div>
</template>

<script setup>

</script>