<script setup>
import { computed, ref } from 'vue'

const contador1 = ref(0)
const contador2 = ref(0)
const valorBooleano = ref(true)

function incrementar(contador) {
  eval(contador).value++
}

function decrementar(contador) {
  if (eval(contador).value > 0) {
    eval(contador).value--
  }
}

const soma = computed(() => contador1.value + contador2.value)
const somaPar = computed(() => soma.value % 2 === 0)
const somaMaiorQue10 = computed(() => soma.value > 10)
</script>

<template>
  <h1>Correção dos exercícios</h1>
  <div class="booleano">
    <button @click="valorBooleano = !valorBooleano">
      {{ valorBooleano ? 'Esconder Resultado' : 'Mostrar Resultado' }}
    </button>
  </div>
  <div v-if="valorBooleano">
    <div class="contador">
      <h2>Contador 1</h2>
      <button @click="incrementar('contador1')">Incrementar</button>
      <button @click="decrementar('contador1')">Decrementar</button>
      <p>Valor: {{ contador1 }}</p>
    </div>

    <div class="contador">
      <h2>Contador 2</h2>
      <button @click="incrementar('contador2')">Incrementar</button>
      <button @click="decrementar('contador2')">Decrementar</button>
      <p>Valor: {{ contador2 }}</p>
    </div>

    <div class="soma">
      <h2>Soma</h2>

      <p>Valor: {{ soma }}</p>

      <div v-if="somaMaiorQue10">
        <p>A soma é maior que 10</p>
      </div>

      <div v-else>
        <p>A soma é menor que 10</p>
      </div>

      <div v-if="somaPar">
        <p>A soma é par</p>
      </div>

      <div v-else>
        <p>A soma é ímpar</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  
h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2vw;
  margin: 1vw 0.5vw;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5vw;
  margin: 1vw 0.5vw;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0.6vw 0.5vw;
}

button {
  border: none;
  padding: 1vw;
  background-color: rgb(133, 133, 252);
  color: black;
  margin: 0.5vw;
  border-radius: 1vw;
}
</style>
