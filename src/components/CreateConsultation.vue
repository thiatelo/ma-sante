<template>
  <form action="" method="post" class="">
    <div class="grid grid-cols-2 gap-8 py-5 mb-10">
      <div class="flex flex-col space-y-1">
        <label for="diagnostic">Diagnostic</label>
        <input type="text" name="diagnostic" id="diagnostic" v-model="form.Diagnostic" placeholder="Entrez le nom de patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="examen">Examen</label>
        <input type="text" id="examen" v-model="form.examen" placeholder="Entrez le prenom de patient"/>
      </div>

      <div class="flex flex-col space-y-1">
        <label for="traitement">Traitement</label>
        <input type="text" v-model="form.traitement" id="traitement" placeholder="Entrez le telephone du patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="date">Date</label>
        <input type="date" v-model="form.date" id="date" placeholder="Entrez la date de naissance du patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="bilan">Bilan Demandé</label>
        <textarea type="text" v-model="form.Bilan_demander" id="bilan" placeholder="Saisissez le bilan demandé"></textarea>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="hypothese">Hypothese</label>
        <textarea type="text" v-model="form.hypothese" id="hypothese" placeholder="Saisissez l'hypothese"></textarea>
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
  Diagnostic: "",
  examen: "",
  date: "",
  hypothese: "",
  Bilan_demander: "",
  traitement:""
})

emitter.on('submit-subFrom', (form) => {
  if (form === 'consultation'){
    submit()
  }
})

function resetForm() {
  form.Bilan_demander = ''
  form.Diagnostic = ''
  form.date = ''
  form.examen = ''
  form.traitement = ''
  form.hypothese = ''
}

const submit = () => {
  axios.post(`consultations/${patient_id.value}`, form)
    .then((res) => {
      console.log(res.data)
      resetForm()
    })
    .catch((err) => {
      console.log(err.response.data)
    })
}

</script>
