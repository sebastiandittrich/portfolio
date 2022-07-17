<template>
  <div class="bg-gray-100 p-8 flex flex-col items-center justify-start py-16" style="min-height: 100vh">
    <div class="flex flex-col items-center space-around">
      <div class="p-2 border border-orange-200 rounded-full flex flex-row items-center justify-center">
        <div class="p-2 border-2 border-orange-400 rounded-full flex flex-row items-center justify-center">
          <div class="p-2 border-4 border-orange-500 rounded-full flex flex-row items-center justify-center">
            <img src="@/assets/images/avatar.jpg?webp&h=300" class="w-48 h-48 rounded-full" alt="Me smiling" />
          </div>
        </div>
      </div>
      <h1 class="mt-16 text-4xl text-center text-black font-light">
        Hello, I'm
        <span class="font-bold whitespace-no-wrap">Sebastian Dittrich</span>.
      </h1>
      <div class="mt-8 text-2xl text-center font-light text-gray-800">
        I'm a <span class="font-bold">{{ age }} year old</span> programmer living in Dresden,
        <span class="font-bold"> Ge<span class="text-red-500">rma</span><span class="text-yellow-400">ny</span></span>
      </div>
    </div>

    <div>
      <div class="font-bold self-start mt-16 uppercase tracking-wide text-sm">Some of my Projects</div>
      <Projects :projects="projects" class="self-start mt-4"></Projects>
    </div>
    <Footer class="self-stretch mt-16 -m-8" />
  </div>
</template>

<script setup lang="ts">
import Projects from "@/components/Projects.vue";
import Footer from "../../components/Footer.vue";

defineProps<{ projects: { name: string; link: string; description: string; logo: string; discontinued: string }[] }>();

const age = Math.floor((new Date().getTime() - new Date("10/30/2001").getTime()) / 1000 / 60 / 60 / 24 / 365.25);
</script>
