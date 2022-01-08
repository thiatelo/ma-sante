<template>
  <div class="bg-gray-300 min-h-screen">
    <div id="nav" class="flex justify-center items-center space-x-3 shadow-md sticky top-0 w-full py-5 px-10 bg-blue-700 text-sm text-white uppercase">
      <router-link to="/" class="bg-blue-700 hover:bg-blue-600 shadow-inner transition-all duration-300 px-2 py-1">Home</router-link>
      <router-link to="/create" class="bg-blue-700 hover:bg-blue-600 shadow-inner transition-all duration-300 px-2 py-1">Ajouter un Patient</router-link>
      <button @click="search = true" type="button" class="flex justify-between items-center bg-white/90 shadow-inner rounded-full py-1 px-4 text-gray-700 font-bold space-x-4">
        <span class="flex items-center space-x-2">
          <span class="text-xl">
            <i class="bi bi-search"></i>
          </span>
          <span class="">Recherche rapide...</span>
        </span>
        <span class="px-2 py-1 bg-gray-300/80 shadow-md rounded-full">Ctl + K</span>
      </button>
    </div>
    <div class="p-10">
      <router-view/>
    </div>

    <Search v-if="search" @close="closeSearch"/>
  </div>
</template>

<script setup>
import Search from "./components/Search.vue";
import {ref, onMounted} from "vue";
import axios from "axios";
import {usePatients} from "./hooks/usePatients";

const search = ref(false)
const {patients} = usePatients()


const closeSearch = () => {
  search.value = false
}

const getPatients = () => {
  axios.get("patients")
      .then((reponse) => {
        patients.value = reponse.data
      })
      .catch((error) => {
        console.log(error)
      })
}

onMounted(() => {
  getPatients()
})

</script>