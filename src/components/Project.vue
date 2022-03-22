<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener"
    :class="{
      [!discontinued ? 'bg-white shadow-lg' : 'border']: true,
      [url ? 'hover:shadow-md' : '']: true,
    }"
    class="rounded-lg overflow-hidden mb-4 project transition"
  >
    <img :src="image" alt="" class="h-auto w-auto" />
    <div class="flex flex-col items-stretch justify-start p-8 pl-0 w-full">
      <div
        :class="{
          link: !!url,
        }"
        class="mb-2 border-none hover:border-none font-bold flex flex-row items-center justify-between"
      >
        <div>
          {{ name }}
        </div>
        <div v-if="discontinued" class="tracking-wide text-xs font-bold px-2 py-1 rounded bg-gray-500 text-white uppercase">discontinued</div>
      </div>
      <div class="font-light">{{ description }}</div>
    </div>
  </a>
</template>

<script lang="ts" setup>
defineProps<{ url?: string; image: string; name: string; description: string; discontinued?: boolean; links?: Record<string, string> }>();
</script>

<style scoped>
.project {
  display: grid;
  grid-template: "image content" auto / 7rem 1fr;
  align-items: center;
  justify-items: center;
}
.project > img {
  grid-area: image;
}
.project > div {
  grid-area: content;
  justify-self: start;
}
</style>
