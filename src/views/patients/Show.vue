<template>
  <div class="h-full space-y-5">
    <div class="flex justify-end items-center bg-white py-3 px-5 space-x-5 shadow-md rounded-md">
      <button @click="editPatient" class="py-2 px-5 bg-blue-500 hover:bg-blue-600 rounded-md text-white transition-all duration-300">Modifier</button>
      <router-link to="/edit/1" class="py-2 px-5 bg-red-500 hover:bg-red-600 rounded-md text-white transition-all duration-300">Suppromer</router-link>
    </div>
    
    <div v-if="patient" class="grid grid-cols-2 gap-10">
      <div class="p-5 bg-white shadow-md rounded-md">
        <div class="flex justify-between items-center pb-3">
          <h4 class="text-sm text-slate-600 font-bold">Informations du patient</h4>
          <button type="button" @click="editPatient" class="btn btn-submit">Modifier</button>
        </div>
        <div class="grid grid-cols-2 gap-5">
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
        </div>
      </div>
      <div v-if="patient.consultations.length > 0" class="p-5 bg-white shadow-md rounded-md">
        <div class="text-right pb-3">
          <h4 class="text-sm text-slate-600 font-bold">Consultations</h4>
        </div>
        <div class="grid grid-cols-2 gap-5 h-[20vh] overflow-y-auto text-sm p-5">
          <div @click="editConsultation(consultation)" v-for="(consultation, index) in patient.consultations" :key="index" class="p-5 shadow-md shadow-gray-500 cursor-pointer">
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Diagnostic:</span>
              <span class="text-stale-800">{{consultation.Diagnostic}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Bilan demandé:</span>
              <span class="text-stale-800">{{consultation.Bilan_demander}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Date:</span>
              <span class="text-stale-800">{{ formatDate(consultation.created_at) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="patient.antecedents.length > 0" class="p-5 bg-white shadow-md rounded-md">
        <div class="text-right pb-3">
          <h4 class="text-sm text-slate-600 font-bold">Antécedants</h4>
        </div>
        <div class="grid grid-cols-2 gap-5 h-[20vh] overflow-y-auto text-sm p-5">
          <div @click="editAntecedent(antecedent)" v-for="(antecedent, index) in patient.antecedents" :key="index" class="p-5 shadow-md shadow-gray-500 cursor-pointer">
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Nom:</span>
              <span class="text-stale-800">{{antecedent.nom}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Status:</span>
              <span class="text-stale-800">{{antecedent.satuts}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Date:</span>
              <span class="text-stale-800">{{ formatDate(antecedent.created_at) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="patient.antecedent_familliaux.length > 0" class="p-5 bg-white shadow-md rounded-md">
        <div class="text-right pb-3">
          <h4 class="text-sm text-slate-600 font-bold">Antécedants Familliaux</h4>
        </div>
        <div class="grid grid-cols-2 gap-5 h-[20vh] overflow-y-auto text-sm p-5">
          <div @click="editAntecedent(antecedent)" v-for="(antecedent, index) in patient.antecedent_familliaux" :key="index" class="p-5 shadow-md shadow-gray-500 cursor-pointer">
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Nom:</span>
              <span class="text-stale-800">{{antecedent.nom}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Status:</span>
              <span class="text-stale-800">{{antecedent.satuts}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Date:</span>
              <span class="text-stale-800">{{ formatDate(antecedent.created_at) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div  v-if="patient.bilans.length > 0" class="p-5 bg-white shadow-md rounded-md">
        <div class="text-right pb-3">
          <h4 class="text-sm text-slate-600 font-bold">Bilans</h4>
        </div>
        <div class="grid grid-cols-2 gap-5 h-[20vh] overflow-y-auto text-sm p-5">
          <div @click="editBilan(bilan)" v-for="(bilan, index) in patient.bilans" :key="index" class="p-5 shadow-md shadow-gray-500 cursor-pointer">
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Type:</span>
              <span class="text-stale-800">{{bilan.type}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Date du bilan:</span>
              <span class="text-stale-800">{{bilan.date}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Date:</span>
              <span class="text-stale-800">{{ formatDate(bilan.created_at) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="patient.traitements" class="p-5 bg-white shadow-md rounded-md">
        <div class="text-right pb-3">
          <h4 class="text-sm text-slate-600 font-bold">Traitements</h4>
        </div>
        <div class="grid grid-cols-2 gap-5 h-[20vh] overflow-y-auto text-sm p-5">
          <div @click="editBilan(traitement)" v-for="(traitement, index) in patient.traitements" :key="index" class="p-5 shadow-md shadow-gray-500 cursor-pointer">
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Type:</span>
              <span class="text-stale-800">{{traitement.type}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Date du traitement:</span>
              <span class="text-stale-800">{{traitement.date}}</span>
            </div>
            <div class="flex justify-start space-x-2 items-center">
              <span class="text-gray-600">Date:</span>
              <span class="text-stale-800">{{ formatDate(bilan.created_at) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <EditConsultation v-if="showEditConsultation" @close="closeEditConsultation" :consultation="consultationToEdit" />
</template>

<script setup>

import {onMounted, ref} from "vue";
import axios from "axios";
import EditConsultation from "../../components/Edit/EditConsultation.vue";

const props = defineProps({
  id: String,
})

const patient = ref(null)
const showEditConsultation = ref(false)
const consultationToEdit = ref(null)

const showEditPatient = ref(false)

const formatDate = (dateString) => {
  let date = new Date(dateString)
  return date.toLocaleDateString('fr')
}

const closeEditConsultation = () => {
  showEditConsultation.value = false
  getPatient()
}

const editConsultation = (consultation) => {
  consultationToEdit.value = consultation
  showEditConsultation.value = true
}

const editPatient = () => {
  showEditPatient.value = true
}

function getPatient() {
  axios.get(`patients/${props.id}`)
      .then((res) => {
        patient.value = res.data
      })
      .catch((err) => {
        console.log(err.response.data)
      })
}

onMounted(() => {
  getPatient()
})

</script>