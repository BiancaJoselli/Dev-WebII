<script setup>
import { computed, reactive, watch } from 'vue'

const state = reactive({
  searchTerm: '',
})

const bookSearch = computed(() => state.searchTerm);

function searchBook() {
  console.log('Buscando por:', bookSearch.value);
}
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <a href="#">IFbooks</a>
        <hr />
        <p>Apreço a leitura</p>
      </div>

      <div class="pesquisa">
        <input type="text" v-model="state.searchTerm" placeholder="Buscar livro..." />
        <button @click="searchBook">🔍</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
</style>
