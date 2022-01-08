<template>
  <div class="fixed inset-0 flex justify-center items-center z-[100] overflow-hidden">
    <div @click="$emit('close')" class="z-10 w-full h-full bg-black/30 backdrop-blur-sm"/>

    <div class="absolute w-3/5 bg-white rounded-md shadow-xl z-50">
      <div class="w-full px-5 pt-5 pb-2 flex justify-between items-center">
        <div class="flex items-center space-x-3 w-11/12">
          <h2 class="text-lg text-blue-600 font-bold uppercase">Modifier la consultation</h2>
        </div>
        <div class="">
          <button @click="$emit('close')"
                  class="px-2 py-2 shadow rounded-lg border border-gray-200 hover:border-gray-300 text-xs uppercase">esc
          </button>
        </div>
      </div>
      <div class="border-b border-gray-300 my-3"/>
      <div class="h-[70vh] px-10 overflow-y-auto py-5">
        <div class="grid grid-cols-1 grid-rows-1 gap-2">
          <form action="" method="post" class="">
            <div class="grid grid-cols-2 gap-8 py-5 mb-10">
              <div class="flex flex-col space-y-1">
                <label for="diagnostic">Diagnostic</label>
                <input type="text" name="diagnostic" id="diagnostic" class="" v-model="form.Diagnostic" placeholder="Entrez le diagnostic"/>
              </div>
              <div class="flex flex-col space-y-1">
                <label for="examen">Examen</label>
                <input type="text" id="examen" v-model="form.examen" placeholder="Entrez l'examen"/>
              </div>

              <div class="flex flex-col space-y-1">
                <label for="traitement">Traitement</label>
                <input type="text" v-model="form.traitement" id="traitement" placeholder="Entrez le traitement du patient"/>
              </div>
              <div class="flex flex-col space-y-1">
                <label for="date">Date</label>
                <input type="date" v-model="form.date" id="date" placeholder="Entrez la date de consultation"/>
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
            <div class="py-5 text-right">
              <button type="button" @click="submit" class="btn btn-submit">Modifier</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {reactive} from "vue";
import axios from "axios";

const props = defineProps({
  consultation: Object
})

const emit = defineEmits(['close'])

const form = reactive({
  Diagnostic: props.consultation.Diagnostic,
  examen: props.consultation.examen,
  date: props.consultation.date,
  hypothese: props.consultation.hypothese,
  Bilan_demander: props.consultation.Bilan_demander,
  traitement: props.consultation.traitement
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
  axios.put(`consultations/${props.consultation.id}`, form)
    .then((res) => {
      emit('close')
    })
    .catch((err) => {
      console.log(err.response.data)
    })
}

</script>

<style scoped>

</style>