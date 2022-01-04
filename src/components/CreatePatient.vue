<template>
  <form action="" method="post" class="">
    <div class="grid grid-cols-2 gap-8 py-5 mb-10">
      <div class="flex flex-col space-y-1">
        <label for="nom">Nom</label>
        <input type="text" name="nom" id="nom" label="Nom" v-model="form.nom" placeholder="Entrez le nom de patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="prenom">Prenom</label>
        <input type="text" id="prenom" v-model="form.prenom" label="Prenom" placeholder="Entrez le prenom de patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="email">Email du patient</label>
        <input type="email" v-model="form.email" id="email" label="Email du patient" placeholder="Entrez l'email du patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="telephone">Telephone du patient</label>
        <input type="text" v-model="form.telephone" id="telephone" label="Telephone du patient" placeholder="Entrez le telephone du patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="adresse">Adresse du patient</label>
        <input type="text" v-model="form.adresse" id="adresse" label="Adresse du patient" placeholder="Entrez le adresse du patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="date">Date de naissance</label>
        <input type="date" v-model="form.date_de_naissance" id="date" label="Date de naissance" placeholder="Entrez la date de naissance du patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="sexe">Le sexe du patient</label>
        <select v-model="form.sexe" id="sexe">
          <option v-for="(option, index) in ['masculin', 'feminin', 'transgenre']" :key="index" class="capitalize" :value="option">{{option}}</option>
        </select>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="matrimonial">Situation matrimoniale</label>
        <select v-model="form.matrimonial" id="matrimonial">
          <option v-for="(option, index) in ['marié(e)', 'célibataire', 'divorcé(e)', 'veuf(ve)']" :key="index" class="capitalize" :value="option">{{option}}</option>
        </select>
      </div>
    </div>
  </form>
</template>
<script setup>

import Select from "./Select.vue";
import Input from "./Input.vue";
import {reactive} from "vue";

const form = reactive({
  nom: '',
  prenom: '',
  sexe: '',
  telephone: '',
  email: '',
  matrimonial: '',
  adresse: '',
  date_de_naissance: '',
})




</script>
