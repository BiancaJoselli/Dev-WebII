<script setup>
import{ computed, ref } from 'vue';


const cidade = ref('');
const cidades = ref([
  'São Paulo',
  'Rio de Janeiro',
  'Belo Horizonte',
  'Salvador',
  'Fortaleza',
  'Curitiba',
  'Manaus',
  'Recife',
  'Porto Alegre',
  'Brasília',
]);

const cidadesOrdenadas = computed(() => [...cidades.value].sort()); // está criando uma cópia da lista (por isso ...) e ordenando. Computed serve para fazer isso automáticamente 

function adicionarCidade() {
  cidades.value.push(cidade.value);
  cidade.value = '';

}

function removerCidade(index) {
  cidades.value.splice(index, 1);
}
</script>

<template>
  <div class="correcao">

    <h1>Correção dos exercícios</h1>

    <div class="form">
      <h2>Formulário de cidades</h2>
      <input type="text" v-model="cidade" />
      <button @click="adicionarCidade">Adicionar</button>
    </div>

    <div class="resultados">

      <div class="cidades">

        <h2>Lista de cidades</h2>
        <ul>
          <li v-for="(cidade, index) in cidades" :key="index">
            {{ cidade }} 
            <button @click="removerCidade(index)">Remover</button>
          </li>
        </ul>
      </div>

      <div class="cidades">
        <h2>Cidades ordenadas</h2>
        <ul>
          <li v-for="cidade in cidadesOrdenadas" :key="cidade">
            {{ cidade }} 
          </li>
        </ul>
      </div>

    </div>
  </div>

</template>

<style scoped>

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #ff0077;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #fa98c6;
  }

  .correcao {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form {
    margin: 20px auto;
    background-color: #f3f3f3;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 70%;
  }

  .form input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    width: 50%;
  }

  .resultados {
    display: flex;
    justify-content: space-between;
    width: 72%;
  }

  .cidades {
    margin-bottom: 20px;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cidades ul {
    list-style: none;
    padding: 0;
    width: 80%;
  }

  .cidades li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .cidades button {
    margin-left: 10px;
  }

</style>
