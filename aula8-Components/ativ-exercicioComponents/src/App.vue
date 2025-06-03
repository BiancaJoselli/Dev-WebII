<script setup>
import { ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import FeatureComponent from './components/FeatureComponent.vue'
import HeroComponent from './components/HeroComponent.vue'
import CartComponent from './components/CartComponent.vue'
import BooksComponent from './components/BooksComponent.vue'
const showCart = ref(false)
const cart = ref({
  items: [],
  total: 0,
})
const books = [
  {
    id: 1,
    title: 'Comigo na livraria',
    cover: '/covers/comigo-na-livraria.png',
    price: 23.24,
    author: 'Martha Medeiros',
  },
  {
    id: 2,
    title: 'Quincas Borba',
    cover: '/covers/quincas-borba.png',
    price: 23.24,
    author: 'Machado de Assis',
  },
  {
    id: 3,
    title: 'A livraria',
    cover: '/covers/a-livraria.png',
    price: 13.94,
    author: 'Penelope Fitzgerald',
  },
  {
    id: 4,
    title: 'A hora da estrela',
    cover: '/covers/a-hora-da-estrela.png',
    price: 16.84,
    author: 'Clarice Lispector',
  },
  {
    id: 5,
    title: 'O alienista',
    cover: '/covers/o-alienista.png',
    price: 266.92,
    author: 'Machado de Assis',
  },
  {
    id: 6,
    title: 'Mar morto',
    cover: '/covers/mar-morto.png',
    price: 13.95,
    author: 'Jorge Amado',
  },
  {
    id: 7,
    title: 'Grande sertão',
    cover: '/covers/grande-sertao-veredas.png',
    price: 26.04,
    author: 'Guimarães Rosa',
  },
  {
    id: 8,
    title: 'Flor de poemas',
    cover: '/covers/flor-de-poema.png',
    price: 15.81,
    author: 'Cecília Meireles',
  },
]

function decrementBookToCart(book) {
  const existingBook = cart.value.items.find((item) => item.id === book.id)
  if (existingBook.quantity === 1) {
    cart.value.items = cart.value.items.filter((item) => item.id !== book.id)
  } else {
    existingBook.quantity--
  }
  cart.value.total -= book.price
}

function incrementBookToCart(book) {
  const existingBook = cart.value.items.find((item) => item.id === book.id)
  existingBook.quantity++
  cart.value.total += book.price
}

function addToCart(book) {
  const existingBook = cart.value.items.find((item) => item.id === book.id)
  if (existingBook) {
    existingBook.quantity++
  } else {
    cart.value.items.push({ ...book, quantity: 1 })
  }
  cart.value.total += book.price
  alert(`Adicionado ${book.title} ao carrinho!`)
}
</script>

<template>
<HeaderComponent @click-cart ="showCart = !showCart "/> 
  <main v-if="showCart">
    <CartComponent 
    :cart="cart"  
    @hide-cart="showCart = false"
    @incremente-book="incrementBookToCart"
    @decremente-book="decrementBookToCart"
    />
  </main>
  <main v-else>
    <HeroComponent />
    <FeatureComponent />
    <BooksComponent :books= "books" @add-to-cart="addToCart"/>
  </main>
<FooterComponent />
</template>

<style scoped>

</style>