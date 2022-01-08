<template>
  <div class="fixed inset-0 flex justify-center items-center z-[100] overflow-hidden">
    <div @click="$emit('close')" class="z-10 w-full h-full bg-black/30 backdrop-blur-sm"/>

    <div class="absolute w-2/5 bg-white rounded-md shadow-xl z-50">
      <div class="w-full px-5 pt-5 pb-2 flex justify-between items-center">
        <div class="flex items-center space-x-3 w-11/12">
          <label for="search">
              <span class="text-xl">
                <i class="bi bi-search"></i>
              </span>
          </label>
          <input ref="searchInput" type="search" id="search" @input="recherche" v-model="searchText.data"
                 class="w-full border-0 outline-none ring-transparent place-content-start text-sm caret-gray-600 outline-transparent bg-transparent"
                 placeholder="Recherche par nom">
        </div>
        <div class="">
          <button @click="$emit('close')"
                  class="px-2 py-2 shadow rounded-lg border border-gray-200 hover:border-gray-300 text-xs uppercase">esc
          </button>
        </div>
      </div>
      <div class="border-b border-gray-300 my-3"/>
      <div class="h-[80vh] px-5 overflow-y-auto py-5">
        <div v-if="searchValues.length > 0" class="text-right py-3">
          <h4 class="text-sm text-gray-800/50">Resultat: {{searchValues.length}}</h4>
        </div>
        <div class="grid grid-cols-1 grid-rows-1 gap-2">
          <router-link v-if="searchValues.length > 0" @click="$emit('close')" v-for="(patient , index) in searchValues"
                       :key="index" :to="'/show/' + patient.id"
                       class="p-3 bg-white border border-gray-200 shadow shadow-md space-y-3">
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Nom:</span>
              <span class="text-stale-800">{{patient.nom}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Prenom:</span>
              <span class="text-stale-800">{{patient.prenom}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Date de Naissance:</span>
              <span class="text-stale-800">{{patient.date_de_naissance}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Sexe:</span>
              <span class="text-stale-800">{{patient.sexe}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import {usePatients} from "../hooks/usePatients"
import {onMounted, reactive, ref} from "vue";

const {patients} = usePatients()
const searchInput = ref(null)
const searchText = reactive({
  data: null
})

const searchValues = ref([])

const recherche = () => {
  if (searchText.data !== ''){
    searchValues.value = patients.value.filter(patient => patient.nom.match(searchText.data))
  }else {
    searchValues.value = []
  }
}

onMounted(() => {
  searchInput.value.focus()
})
</script>