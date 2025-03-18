<script setup>
import { ref } from 'vue'
const valor = ref(10);

const temperaturaCelsius = ref(0);
const temperaturaFahrenheit = ref(0);

function converterFahrenheit() {
  temperaturaFahrenheit.value = (temperaturaCelsius.value * 9) / 5 + 32
}

function decrementar() {
  valor.value--
  console.log(valor.value)
}

function duplicar() {
  valor.value *= 2
}
</script>

<template>
  <h1>Olá mundo!</h1>
  <button v-on:click="valor++">Incrementar</button>
  <button v-on:click="decrementar">Decrementar</button>
  <button v-on:click="duplicar">Duplicar</button>
  <p>Valor: {{ valor }}</p>
  <hr>
  <h2>Conversor para Temperatura</h2>
  <input v-model="temperaturaCelsius" type="number" step="0.1" />
  <button v-on:click="converterFahrenheit">Converter</button>
  <p>Temperatura em Fahrenheit: {{ temperaturaFahrenheit }}</p>
</template>

<style scoped>

button {
  font-weight: bold;
}

</style>
