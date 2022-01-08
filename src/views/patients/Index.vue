<template>
  <div class="">
    <div class="grid grid-cols-5 gap-6">
      <router-link v-for="(patient , index) in patients" :key="index"  :to="'/show/' + patient.id" class="p-3 bg-white shadow-md space-y-3">
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
</template>

<script setup>
import {usePatients} from "../../hooks/usePatients"

const {patients} = usePatients()

</script>

<style scoped>

</style>