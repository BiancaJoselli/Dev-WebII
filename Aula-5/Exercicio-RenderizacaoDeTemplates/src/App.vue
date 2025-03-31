<script setup>
const nome = `bianca`
const idade = 16

function inverter(texto) {
  return texto.split('').reverse().join('').toUpperCase()
  // const textoInvertido = Array.from(texto).reverse().join('')
  // return `${textoInvertido.at(-1).toUpperCase()}`
}

function saudacao() {
  return `Olá, ${nome}!`
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
</style>
