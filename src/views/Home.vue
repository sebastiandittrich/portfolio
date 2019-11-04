<template>
  <div class="bg-grey-lightest p-8 flex flex-col items-center justify-start py-16" style="min-height: 100vh">
    <div class="flex flex-col items-center space-around">
      <!-- <div class="avatar-img rounded-full h-48 w-48 bg-white flex flex-row items-center align-stretch overflow-hidden">
        <img src="/img/avatar.jpg" >
      </div> -->
      <div class="p-2 border border-blue-lighter rounded-full flex flex-row items-center justify-center">
        <div class="p-2 border-2 border-blue-light rounded-full flex flex-row items-center justify-center">
          <div class="p-2 border-4 border-blue rounded-full flex flex-row items-center justify-center">
              <img src="/img/avatar.jpg" class="w-48 h-48 rounded-full">
          </div>
        </div>
      </div>
      <div class="mt-16 text-4xl text-center text-black">
        Hello, I'm <span class="font-bold whitespace-no-wrap">Sebastian Dittrich</span>.
      </div>
      <div class="mt-8 text-2xl text-center">
        I'm a <span class="font-bold">{{age}} year old</span> programmer living in Dresden, <span class="font-bold"> Ge<span class="text-red-light">rma</span><span class="text-yellow-dark">ny</span></span>
      </div>
    </div>

    <div class="container mx-auto max-w-lg">
      <div class="font-bold self-start mt-16 uppercase tracking-wide text-sm">Blog Highlights</div>
      <div class="shadow-md bg-white rounded-lg mt-4">
        <blog-overview v-for="highlight of highlight" :key="highlight.slug" :image="false" class="p-6 border-b" :article="highlight"></blog-overview>
      </div>
      <router-link to="/blog" class="block mt-4 rounded-lg bg-grey-light p-2 font-bold uppercase leading-tight text-center text-sm">
        Read more
      </router-link>
    </div>

    <div>
      <div class="font-bold self-start mt-16 uppercase tracking-wide text-sm">Some of my Projects</div>
      <projects class="self-start mt-4"></projects>
    </div>

    <!-- <div>
        <div class="font-bold self-start mt-16 uppercase tracking-wide text-sm">How to support me</div>
        <support-me class="mt-4"></support-me> -->
    </div>

</template>

<style scoped>
  /* @keyframes avatar-in {
    0% {
      transform: scale(0);
    }
    33% {
      transform: scale(1);
      box-shadow: 0px 0px 0px .75rem #a54a2b70,
    }
    66% {
      box-shadow: 0px 0px 0px .75rem #a54a2b70,
                  0px 0px 0px 1.5rem #a54a2b30,
    }
    100% {
      box-shadow: 0px 0px 0px .75rem #a54a2b70,
                  0px 0px 0px 1.5rem #a54a2b30,
                  0px 0px 0px 2.25rem #a54a2b10;
    }
  } */

  .avatar-img {
    /* animation: avatar-in 3000ms ease-out forwards; */
    box-shadow: 0px 0px 0px .75rem #a54a2b70,
                  0px 0px 0px 1.5rem #a54a2b30,
                  0px 0px 0px 2.25rem #a54a2b10;
  }
</style>


<script>
import Projects from '@/components/Projects'
import SupportMe from '@/components/SupportMe'
import BlogOverview from '@/components/blog/Overview'

import { highlight } from '@/blog'

export default {
  components: {
    Projects,
    SupportMe,
    BlogOverview,
  },
  data: () => ({
      loading_highlight: highlight,
  }),
  computed: {
    age() {
      return Math.floor((new Date().getTime() - new Date('10/30/2001').getTime()) / 1000 / 60 / 60 / 24 / 365.25)
    },
    highlight() {
        return this.loading_highlight.filter(item => item.loaded)
    }
  }
};
</script>
