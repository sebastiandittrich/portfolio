<template>
  <div class="p-8 flex flex-col items-center justify-start py-16" style="min-height: 100vh">
    <div class="flex flex-col items-center space-around">
      <div class="avatar-img rounded-full h-48 w-48 bg-white flex flex-row items-center align-stretch overflow-hidden">
        <img src="/img/avatar.jpg" >
      </div>
      <div class="mt-16 text-4xl text-center text-black">
        Hello, I'm <span class="font-bold whitespace-no-wrap">Sebastian Dittrich</span>.
      </div>
      <div class="mt-8 text-2xl text-center">
        I'm a <span class="font-bold">{{age}} year old</span> programmer living in Dresden, <span class="font-bold"> Ge<span class="text-red-light">rma</span><span class="text-yellow-dark">ny</span></span>
      </div>
    </div>

    <div>
      <div class="font-bold self-start mt-16 uppercase tracking-wide text-sm">Some of my Projects</div>
      <projects class="self-start mt-4"></projects>
    </div>

    <!-- <div>
        <div class="font-bold self-start mt-16 uppercase tracking-wide text-sm">How to support me</div>
        <support-me class="mt-4"></support-me>
    </div> -->

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

export default {
  components: {
    Projects,
    SupportMe,
  },
  computed: {
    age() {
      return Math.floor((new Date().getTime() - new Date('10/30/2001').getTime()) / 1000 / 60 / 60 / 24 / 365.25)
    }
  }
};
</script>
