<template>
  <div>BIENVENIDOS A ELECTRO</div>
  <PersonsElectro :title="titulo" :data="persons" />
  <button @click="addPerson">add</button>
  <button @click="changeTitle">change</button>
</template>

<script setup lang="ts">
import PersonsElectro from '@/components/PersonsElectro.vue'
import { reactive, ref } from 'vue'
let titulo = ref('Este es el listado de el Equipo')
let persons = ref(['bernardo', 'leo', 'werner', 'ale', 'gabriel', 'facundo'])

const addPerson = () => {
  persons.value.push('nuevo miembro')
  console.log('persons::: ', persons)
}
const changeTitle = () => {
  titulo.value = 'Equipo cambiado'
  console.log('titulo::: ', titulo)
}
</script>

<style scoped></style>
