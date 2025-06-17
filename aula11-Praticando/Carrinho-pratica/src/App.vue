<script setup>
import FooterComponet from './components/FooterComponet.vue'
import HeaderComponent from './components/HeaderComponent.vue'


</script>

<template>
  <HeaderComponent @click-cart="showCart = !showCart"/>
  <main>
  <RouterView />
  </main>
  <FooterComponet/>

</template>
