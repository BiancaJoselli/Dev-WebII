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
  <div></div>

</template>

<style scoped>

</style>
