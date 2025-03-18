<script setup>
import { ref } from 'vue'

const temperaturaCelsius = ref(0);
const temperaturaFahrenheit = ref(0);

function converterCelsius() {
  temperaturaCelsius.value = 5 / 9 * (temperaturaFahrenheit.value - 32)
}
</script>

<template>
  <h1>Conversor de Temperatura</h1>
  <input v-model="temperaturaFahrenheit" type="number" step="0.1" />
  <button v-on:click="converterCelsius">CONVERTER</button>
  <p>A Temperatura é: {{ temperaturaCelsius }}</p>

</template>

<style scoped></style>
