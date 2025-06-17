<script setup>
import BooksListing from './components/BooksListing.vue'
import HeroComponent from './components/HeroComponent.vue'
import FeatureComponent from './components/FeatureComponent.vue'

import CartComponent from './components/CartComponent.vue'

</script>

<template>
    <main v-if="showCart">
    <CartComponent 
    :cart="cart"
    @hide-car="showCart = false"
    @increment-book="incrementBookToCart"
    @decrement-book="decrementBookToCart"
    />
    </main>
    <main v-else>
    <HeroComponent/>
    <FeatureComponent/>
    <BooksListing :books="books" @add-to-cart="addToCart"/>
    </main>

</template>
