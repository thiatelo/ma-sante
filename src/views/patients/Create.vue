<template>
  <div class="">
    <div class="">
      <div class="bg-white space-x-5 px-5 py-3 rounded-md">
        <button v-for="(form, index) in forms" @click="changeFrom(form, index)" :key="index" type="button" :class="form.key === currentForm ? 'tab-active' : ''" class="tab">{{ form.value }}</button>
      </div>

      <div class="bg-white space-x-5 px-5 py-3 rounded-md flex justify-center items-center">
        <div class="w-3/5">
          <CreatePatient v-if="currentForm === 'patient'"/>
          <CreateConsultation v-if="currentForm === 'consultation'"/>
          <CreateAntecedent v-if="currentForm === 'antecedent'"/>
          <CreateAntecedentFamilial v-if="currentForm === 'antecedent_familial'"/>
          <CreateTraitement v-if="currentForm === 'traitement'"/>
          <CreateBilan v-if="currentForm === 'bilan'"/>

          <div class="col-span-2 flex justify-end items-center space-x-4 py-5">
            <button type="button" :disabled="currentIndex <= 1" @click="prevForm" class="btn btn-neutral">Prev</button>
            <button type="button" @click="submitCurrentForm" class="btn btn-submit">Submit</button>
            <button type="button" :disabled="currentIndex === lastIndex" @click="nextForm" class="btn btn-neutral">Next</button>
            <button type="button" class="btn btn-danger">Terminer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CreatePatient from "../../components/CreatePatient.vue";
import CreateConsultation from "../../components/CreateConsultation.vue";
import {ref} from "vue";
import CreateAntecedent from "../../components/CreateAntecedent.vue";
import CreateAntecedentFamilial from "../../components/CreateAntecedentFamilial.vue";
import CreateTraitement from "../../components/CreateTraitement.vue";
import CreateBilan from "../../components/CreateBilan.vue";
import emitter from 'tiny-emitter/instance'
import {usePatientId} from "../../hooks/usePatientId";

const currentForm = ref('patient')
const { patient_id } = usePatientId()

const forms = [
  {
    active: true,
    key: 'patient',
    value: 'Ajouter un patient',
  },
  {
    active: false,
    key: 'consultation',
    value: 'Ajouter une fiche de consultation',
  },
  {
    active: false,
    key: 'antecedent',
    value: 'Ajouter un antécedent',
  },
  {
    active: false,
    key: 'antecedent_familial',
    value: 'Ajouter un antécedent familial',
  },
  {
    active: false,
    key: 'traitement',
    value: 'Ajouter un tratement',
  },
  {
    active: false,
    key: 'bilan',
    value: 'Ajouter un bilan',
  },
]

const currentIndex = ref(0)
const prevIndex = ref(-1)
const nextIndex = ref(1)
const lastIndex = ref(forms.length - 1)

emitter.on('patient-is-created', () => {
  patientIsCreated()
})

const submitCurrentForm = () => {
  emitter.emit('submit-subFrom', forms[currentIndex.value].key)
}

const patientIsCreated = () => {

  forms.forEach((form) => {
    form.active = form.key !== 'patient';
  })

  changeFrom(forms[1], currentIndex.value + 1)
}

const changeFrom = (form, index) => {
  if (form.active){
    currentForm.value = form.key
    setIndex(index)
  }
}

const nextForm = () => {
  if (nextIndex.value <= lastIndex.value){
    changeFrom(forms[nextIndex.value], nextIndex.value)
  }
}

const prevForm = () => {
  changeFrom(forms[prevIndex.value], prevIndex.value)
}

const setIndex = (index) => {
  currentIndex.value = index
  nextIndex.value = index + 1
  prevIndex.value = index - 1
}

</script>

