<template>
  <div
    target="_blank"
    rel="noopener"
    :class="{
      [!discontinued ? 'bg-white shadow-md' : 'border']: true,
    }"
    class="rounded-lg flex flex-col md:flex-row items-center p-8 gap-8"
  >
    <img :src="image" alt="" class="w-32 p-4" />
    <div class="flex flex-col items-center text-center gap-2 md:flex-1 md:text-left md:items-start">
      <div class="font-bold flex flex-row items-center justify-between flex-wrap gap-2">
        <div>
          {{ name }}
        </div>
        <div v-if="discontinued" class="tracking-wide text-xs font-bold px-2 py-1 rounded bg-gray-500 text-white uppercase">discontinued</div>
      </div>
      <div class="font-light">{{ description }}</div>
    </div>
    <Link v-if="url" target="_blank" :href="url" class="flex flex-row items-center gap-2">
      Visit Website
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
      </svg>
    </Link>
  </div>
</template>

<script lang="ts" setup>
import Link from "@/components/Link.vue";
defineProps<{ url?: string; image: string; name: string; description: string; discontinued?: boolean; links?: Record<string, string> }>();
</script>
