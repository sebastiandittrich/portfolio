<template>
  <div>
    <a rel="noopener" :href="link" target="_blank">
      <img :src="image" class="w-8 h-auto" :alt="name" :title="name" />
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ link: string; image: string; name: string }>();
</script>

<style lang="stylus" scoped>
a img
    transition all 100ms
a:hover img
    transform scale(1.1)
</style>
