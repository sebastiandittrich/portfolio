<template>
  <router-view style="grid-area: content" v-slot="{ Component }">
    <Transition name="opacity">
      <div v-show="imagesloaded" style="display: grid; grid-template: 'content' 1fr 'footer' auto / 100%" class="min-h-screen">
        <component :is="Component"></component>
        <Footer style="grid-area: footer"></Footer>
      </div>
    </Transition>
  </router-view>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Footer from "./components/Footer.vue";

const imagesloaded = ref(false);

onMounted(async () => {
  const id = setInterval(() => {
    const imgs = Array.from(document.getElementsByTagName("img"));
    const done = imgs.length > 0 && imgs.every((img) => img.complete && img.height > 0);
    if (done) {
      clearInterval(id);
      imagesloaded.value = true;
    }
  }, 50);
});
</script>
