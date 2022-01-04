<template>
  <form action="" method="post" class="">
    <div class="grid grid-cols-2 gap-8 py-5 mb-10">
      <div class="flex flex-col space-y-1">
        <Input type="text" id="nom" label="Nom" placeholder="Entrez le nom de patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <Input type="text" id="prenom" label="Prenom" placeholder="Entrez le prenom de patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <Input type="email" id="email" label="Email du patient" placeholder="Entrez l'email du patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <Input type="text" id="telephone" label="Telephone du patient" placeholder="Entrez le telephone du patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <Input type="text" id="adresse" label="Adresse du patient" placeholder="Entrez le adresse du patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <Input type="date" id="date" label="Date de naissance" placeholder="Entrez la date de naissance du patient"/>
      </div>
      <div class="flex flex-col space-y-1">
        <Select id="sexe" label="Choisissez le sexe du patient" :options="['masculin', 'feminin', 'transgenre']"/>
      </div>
    </div>
  </form>
</template>
<script setup>
import Select from "./Select.vue";
import Input from "./Input.vue";
</script>
