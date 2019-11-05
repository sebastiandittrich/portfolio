<template>
    <div class="p-8 bg-grey-lighter flex flex-col justify-center items-center border-t">
        <div class="font-bold text-sm tracking-wide uppercase">Follow me on my social network accounts!</div>
        <div class="flex flex-row items-center justify-center mt-8">
            <social-profile link="https://twitter.com/@schnaubolaut" image="/img/twitter.svg.webp" name="Twitter"></social-profile>
            <social-profile link="https://art.todoninja.de/@basti" image="/img/artfamily.png" class="ml-8" name="Artfamily"></social-profile>
            <social-profile link="https://www.instagram.com/minus_banane/" image="/img/instagram.png" class="ml-8" name="Instagram"></social-profile>
            <social-profile link="https://github.com/sebastiandittrich" image="/img/github.png" class="ml-8" name="Github"></social-profile>
            <social-profile link="https://gitlab.com/sebastiandittrich" image="/img/gitlab.png" class="ml-8" name="Gitlab"></social-profile>
        </div>

        <div class="text-center leading-loose mt-16">
            Built with <a href="http://tailwindcss.com" target="_blank" class="link">Tailwind CSS</a>, <a target="_blank" href="http://vuejs.org" class="link">Vue</a> and <a target="_blank" href="https://code.visualstudio.com/" class="link">Visual Studio Code</a>
        </div>
        <div class="mt-4">
            Special thanks to <a class="link" href="https://www.instagram.com/j1ss3l/">Johannes Müller</a> for the avatar image!
        </div>
    </div>
</template>

<script>
import SocialProfile from '@/components/SocialProfile'

export default {
    components: {
        SocialProfile,
    }
}
</script>
