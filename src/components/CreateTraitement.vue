<template>
  <form action="" method="post" class="">
    <div class="grid grid-cols-2 gap-8 py-5 mb-10">
      <div class="flex flex-col space-y-1">
        <label for="traitement">Nom du traitement</label>
        <input type="text" name="traitement" id="traitement" v-model="form.nom" placeholder="Entrez le nom du traitement"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="type">Type</label>
        <input type="text" id="type" v-model="form.type" placeholder="Entrez le type de traitement"/>
      </div>

      <div class="flex flex-col space-y-1">
        <label for="duree">Duree Traitement</label>
        <input type="text" v-model="form.duree" id="duree" placeholder="Entrez la duree du traiment"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="date">Date Debut</label>
        <input type="date" v-model="form.date_debut" id="date" placeholder="Entrez la date de debutt"/>
      </div>
       <div class="flex flex-col space-y-1">
        <label for="date">Date Fin</label>
        <input type="date" v-model="form.date_fin" id="date" placeholder="Entrez la date de fin"/>
      </div>
     
    
    </div>
  </form>
</template>
<script setup>
import Input from "./Input.vue";
import {reactive} from "vue";
import {usePatientId} from "../hooks/usePatientId"
import axios from "axios";
import emitter from 'tiny-emitter/instance'

const {patient_id} = usePatientId()

const form = reactive({
    nom : "",
    type : "",
    date_debut : "",
    date_fin : "",
     duree : ""
})

emitter.on('submit-subFrom', (form) => {
  if (form === 'traitement'){
    submit()
  }
})

function resetForm() {
  form.nom = ''
  form.type = ''
  form.date_debut = ''
  form.date_fin = ''
  form.duree = ''
  
}

const submit = () => {
  axios.post(`traitements/${patient_id.value}`, form)
    .then((res) => {
      console.log(res.data)
      resetForm()
    })
    .catch((err) => {
      console.log(err.response.data)
    })
}

</script>
