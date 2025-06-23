<script setup>
import HeroComponent from '@/components/HeroComponent.vue'
import CartComponent from '@/components/CartComponent.vue'
import FeatureComponent from '@/components/FeatureComponent.vue'
import BooksListing from '@/components/BooksListing.vue'

import { useCartStore } from '@/store/cart.js'
import { useBooksStore } from '@/store/books.js'
const booksStore = useBooksStore()
const cartStore = useCartStore()
</script>

<template>
  <main v-if="cartStore.showCart">
    <CartComponent
      :cart="cartStore.cart"
      @hide-cart="cartStore.showCart = false"
      @increment-book="cartStore.incrementBookToCart"
      @decrement-book="cartStore.decrementBookToCart"
    />
  </main>

  <main v-else>
    <HeroComponent></HeroComponent>

    <FeatureComponent></FeatureComponent>

    <BooksListing :books="booksStore.books" @add-to-cart="cartStore.addToCart"></BooksListing>
  </main>

  <FooterComponent></FooterComponent>
</template>
