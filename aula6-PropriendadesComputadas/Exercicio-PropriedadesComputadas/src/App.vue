<script setup>
  import { ref } from 'vue';

  const professor = ref({
    nome: 'Eduardo da Silva',
    disciplinas: [
      'Desenvolvimento Web II',
      'Desenvolvimento de Aplicativos para Dispositivos Móveis',
    ],
  });

  function possuiDisciplinas() {
    return professor.value.disciplinas.length > 0;
  }

  function incrementar() {
  contador.value++
}

function decrementar() {
  if (contador.value > 0) {
      contador.value--;
    }
}

</script>

<template>
  <div>
    <h1>Professor</h1>
    <p>Nome: {{ professor.nome }}</p>
    <p v-if="!possuiDisciplinas">O professor não possui disciplinas.</p>
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