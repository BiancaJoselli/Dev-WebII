<script setup>
import{ ref } from 'vue';

const nome =`Bianca`;
const idade = 16;
const contador = ref(0);

function inverter(texto) {
  return texto.split('').reverse().join('').toUpperCase()
}

function saudacao() {
  return `Olá, ${nome}!`
}

function incrementar() {
  contador.value++
}

function decrementar() {
  if (contador.value > 0) {
      contador.value--;
    }
}

function reiniciar() {
  contador.value = 0;
}

</script>

<template>
  <div class="info">
    <h1>Exemplo 1 - Mostrando informações na tela</h1>
    <p>Nome: {{ nome }}</p>
    <p>Idade: {{ idade }} anos</p>
    <hr />
    <p>Para completar 50 anos faltam: {{ 50 - idade }} anos</p>
    <p>O nome tem {{ nome.length }} caracteres</p>
    <p>O nome invertido é: {{ inverter(nome) }}</p>
    <hr />
    <p>Exemplo de saudação usando função</p>
    <p>{{ saudacao() }}</p>
  </div>

  <div class="contator">
    <h2>Meu contador</h2>
    <p>Valor do contador: {{ contador }}</p>
    <button v-on:click="incrementar">+</button>
    <button v-on:click="decrementar">-</button>
    <button v-on:click="reiniciar">Reiniciar</button>

    <div       
    :style="{ backgroundColor: contador > 10 ? 'green' : 'red' }" 
      >  <!--Por que assim?-->
    <p v-if="contador > 10">Valor maior que 10</p>
    <p v-else>Valor menor que 10</p>
    </div>
  </div>

</template>

<style scoped>
.info {
  background-color: rgba(35, 12, 22, 1);
  padding: 20px 30px;
  color: rgb(183, 210, 219);
  border-radius: 10px;
}

h1 {
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}

button {
    margin: 8px;
    padding: 8px;
    border: 0;
    border-radius: 9px;
    background-color: #80b0ff;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(140, 188, 216);
  }

  div {
    margin: 8px 0;
    padding: 9px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    background: #c9e0e4;
  }

</style>
