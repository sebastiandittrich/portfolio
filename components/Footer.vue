<template>
  <div class="p-8 bg-gray-100 flex flex-col justify-center items-stretch border-t">
    <div class="font-bold text-sm tracking-wide uppercase text-center">Follow me on my social network accounts!</div>
    <div class="flex flex-row items-center justify-center mt-8">
      <social-profile link="https://twitter.com/@schnaubolaut" :image="twitter_image" name="Twitter"></social-profile>
      <social-profile link="https://www.instagram.com/minus_banane/" :image="instagram_image" class="ml-8" name="Instagram"></social-profile>
      <social-profile link="https://github.com/sebastiandittrich" :image="github_image" class="ml-8" name="Github"></social-profile>
      <social-profile link="https://gitlab.com/sebastiandittrich" :image="gitlab_image" class="ml-8" name="Gitlab"></social-profile>
    </div>

    <div class="font-bold text-sm tracking-wide uppercase text-center mt-16">Credits</div>
    <div class="text-center leading-loose mt-4">
      Built with <Link href="http://tailwindcss.com" target="_blank" rel="noopener" class="link">Tailwind CSS</Link>,
      <Link target="_blank" rel="noopener" href="http://vuejs.org" class="link">Vue</Link> and
      <Link rel="noopener" target="_blank" href="https://code.visualstudio.com/" class="link">Visual Studio Code</Link>
    </div>
    <div class="mt-4 text-center leading-loose">
      Special thanks to
      <Link class="link" target="_blank" href="https://www.instagram.com/muellershalde/" rel="noopener">Johannes Müller</Link>
      for the avatar image!
    </div>
  </div>
</template>

<script lang="ts" setup>
import twitter_image from "../assets/images/twitter.png";
import github_image from "../assets/images/github.png";
import gitlab_image from "../assets/images/gitlab.png";
import instagram_image from "../assets/images/instagram.png";
import SocialProfile from "./SocialProfile.vue";
import Link from "@/components/Link.vue";
</script>
