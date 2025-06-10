<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponet from '@/components/HeaderComponent.vue'


import { useCartStore } from '@/store/cart.js'
const cartStore = useCartStore()
</script>

<template>
  <HeaderComponet @click-cart="cartStore.showCart = !cartStore.showCart"></HeaderComponet>
<main>
  <RouterView />
</main>

  <FooterComponent></FooterComponent>
</template>

<style scoped>


</style>