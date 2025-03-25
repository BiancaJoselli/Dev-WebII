<script setup>
import { ref } from 'vue'

const contador = ref(0)

function decrementar() {
  if (contador.value > 0) {
    contador.value--
  } else {
    alert(`O contador não pode ser menor que zero!`)
  }
}

function incrementar() {
  contador.value++
}
</script>

<template>
  <h1>Meu contador</h1>
  <p>Valor do contador: {{ contador }}</p>
  <button v-on:click="incrementar">+</button>
  <button @click="decrementar">-</button>
</template>
