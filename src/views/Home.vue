<template>
  <div class="bg-gray-100 p-8 flex flex-col items-center justify-start py-16" style="min-height: 100vh;">
    <div class="flex flex-col items-center space-around">
      <div class="p-2 border border-orange-200 rounded-full flex flex-row items-center justify-center">
        <div class="p-2 border-2 border-orange-400 rounded-full flex flex-row items-center justify-center">
          <div class="p-2 border-4 border-orange-500 rounded-full flex flex-row items-center justify-center">
            <img :src="avatar_image" class="w-48 h-48 rounded-full" alt="Me smiling" />
          </div>
        </div>
      </div>
      <h1 class="mt-16 text-4xl text-center text-black font-light">
        Hello, I'm
        <span class="font-bold whitespace-no-wrap">Sebastian Dittrich</span>.
      </h1>
      <div class="mt-8 text-2xl text-center font-light">
        I'm a <span class="font-bold">{{ age }} year old</span> programmer living in Dresden,
        <span class="font-bold"> Ge<span class="text-red-500">rma</span><span class="text-yellow-400">ny</span></span>
      </div>
    </div>

    <div>
      <div class="font-bold self-start mt-16 uppercase tracking-wide text-sm">
        Some of my Projects
      </div>
      <Projects class="self-start mt-4"></Projects>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatar_image from "../assets/images/avatar.jpg";
import Projects from "../components/Projects.vue";

const age = Math.floor((new Date().getTime() - new Date("10/30/2001").getTime()) / 1000 / 60 / 60 / 24 / 365.25);
</script>
