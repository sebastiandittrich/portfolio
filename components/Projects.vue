<template>
  <div class="flex flex-col items-stretch gap-8 max-w-5xl">
    <Project
      v-for="project in projects"
      :name="project.name"
      :url="project.link"
      :description="project.description"
      :image="project.logo"
      :links="{ 'Read more': 'test.de' }"
      :discontinued="project.discontinued"
    ></Project>
  </div>
</template>

<script lang="ts" setup>
import Project from "./Project.vue";

defineProps<{ projects: { name: string; link: string; description: string; logo: string; discontinued: boolean }[] }>();
</script>
