<script setup>
  import { reactive, computed } from 'vue';

  const professor = reactive({
    nome: 'Eduardo da Silva',
    disciplina: [
      'Desenvolvimento Web II',
      'Desenvolvimento de Aplicativos para Dispositivos Móveis',
    ],
  });

  const possuiDiciplinas = computed(() => { return professor.disciplina.length > 0;});

</script>

<template>
  <div>
    <h1>Professor</h1>
    <p>Nome: {{ professor.nome }}</p>
    <p v-if="!possuiDiciplinas">O professor não possui disciplinas.</p>

    <div v-else>
      <p>O professor possui disciplinas.</p>
      <ul>
        <li v-for="disciplina in professor.disciplinas" :key="disciplina">
          {{ disciplina }}
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>

</style>
