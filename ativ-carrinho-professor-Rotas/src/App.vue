<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponet from '@/components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponet @click-cart="showCart = !showCart"></HeaderComponet>
<main>
  <RouterView />
</main>

  <FooterComponent></FooterComponent>
</template>

<style scoped>


</style>