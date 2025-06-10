<script setup>
import { onMounted, ref } from 'vue'
import { useBooksStore } from '@/stores/books'
const props = defineProps(['id'])
const booksStore = useBooksStore()
const currentBook = ref({})

onMounted(() => {
  currentBook.value = booksStore.getBooksById(props.id)
})
</script>

<template>
  <h1>Detalhes do livro: {{ props.id }}</h1>
  <div v-if="currentBook.id">
    <p>Título: {{ currentBook.title }}</p>
    <img :src="currentBook.cover" alt="Capa do livro" />
  </div>
  <div v-else>
    <p>Livro não encontrado...</p>
  </div>
</template>
