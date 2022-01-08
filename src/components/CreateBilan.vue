<template>
  <form action="" method="post" class="">
    <div class="grid grid-cols-2 gap-8 py-5 mb-10">
      <div class="flex flex-col space-y-1">
        <label for="type">Type Bilan</label>
        <input type="text" name="typeB" id="typeB" v-model="form.type" placeholder="Entrez le bilan"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="resultat">Resultat</label>
        <input type="text" id="resultat" v-model="form.resultat" placeholder="Entrez le resultat"/>
      </div>

      <div class="flex flex-col space-y-1">
        <label for="date">Date</label>
        <input type="date" v-model="form.date" id="date" placeholder="Entrez la date "/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="description">Description</label>
        <textarea type="text" v-model="form.description" id="description" placeholder="Saisissez la description"></textarea>
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
  type: "",
  resultat: "",
  date: "",
  description: ""
 
})

emitter.on('submit-subFrom', (form) => {
  if (form === 'bilan'){
    submit()
  }
})

function resetForm() {
  form.type = ''
  form.resultat = ''
  form.date = ''
  form.description = ''
  
}

const submit = () => {
  axios.post(`bilans/${patient_id.value}`, form)
    .then((res) => {
      console.log(res.data)
      resetForm()
    })
    .catch((err) => {
      console.log(err.response.data)
    })
}

</script>
