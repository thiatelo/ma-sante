<template>
  <form action="" method="post" class="">
    <div class="grid grid-cols-2 gap-8 py-5 mb-10">
      <div class="flex flex-col space-y-1">
        <label for="nom">Nom de l'antécedent</label>
        <input type="text" name="nom" id="nom" v-model="form.nom" placeholder="Entrez le nom de l'antecedent familial"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="satuts">Statut de l'antécedant</label>
        <input type="text" id="satuts" v-model="form.satuts" placeholder="Entrez le statut"/>
      </div>
    </div>
  </form>
</template>
<script setup>
import Select from "./Select.vue";
import Input from "./Input.vue";
import {usePatientId} from "../hooks/usePatientId"
import axios from "axios";
import emitter from 'tiny-emitter/instance'
import {reactive} from "vue";

const {patient_id} = usePatientId()

const form = reactive({
  nom: "",
  satuts:""
})

emitter.on('submit-subFrom', (form) => {
  if (form === 'antecedent_familial'){
    submit()
  }
})

function resetForm() {
  form.nom = ''
  form.satuts = ''
}

const submit = () => {
  axios.post(`antecedent_familliauxs/${patient_id.value}`, form)
      .then((res) => {
        console.log(res.data)
        resetForm()
      })
      .catch((err) => {
        console.log(err.response.data)
      })
}
</script>
