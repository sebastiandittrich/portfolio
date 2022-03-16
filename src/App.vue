<script setup lang="ts">
import Footer from "./components/Footer.vue";
</script>

<template>
  <div style="display: grid; grid-template: 'content' 1fr 'footer' auto / 100%" class="min-h-screen">
    <router-view style="grid-area: content" />
    <Footer style="grid-area: footer"></Footer>
  </div>
</template>
