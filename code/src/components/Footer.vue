<template>
    <div class="p-8 bg-grey-lighter flex flex-col justify-center items-stretch border-t">
        <div class="font-bold text-sm tracking-wide uppercase text-center">Follow me on my social network accounts!</div>
        <div class="flex flex-row items-center justify-center mt-8">
            <social-profile link="https://twitter.com/@schnaubolaut" :image="images.TwitterImage" name="Twitter"></social-profile>
            <social-profile link="https://art.todoninja.de/@basti" :image="images.ArtfamilyImage" class="ml-8" name="Artfamily"></social-profile>
            <social-profile link="https://www.instagram.com/minus_banane/" :image="images.InstagramImage" class="ml-8" name="Instagram"></social-profile>
            <social-profile link="https://github.com/sebastiandittrich" :image="images.GithubImage" class="ml-8" name="Github"></social-profile>
            <social-profile link="https://gitlab.com/sebastiandittrich" :image="images.GitlabImage" class="ml-8" name="Gitlab"></social-profile>
        </div>

        <div class="font-bold text-sm tracking-wide uppercase text-center mt-16">Credits</div>
        <div class="text-center leading-loose mt-4">
            Built with <a href="http://tailwindcss.com" target="_blank" rel="noopener" class="link">Tailwind CSS</a>, <a target="_blank" rel="noopener" href="http://vuejs.org" class="link">Vue</a> and <a rel="noopener" target="_blank" href="https://code.visualstudio.com/" class="link">Visual Studio Code</a>
        </div>
        <div class="mt-4 text-center leading-loose">
            Special thanks to <a class="link" target="_blank" href="https://www.instagram.com/j1ss3l/" rel="noopener">Johannes Müller</a> for the avatar image!
        </div>
    </div>
</template>

<script>
import SocialProfile from '@/components/SocialProfile'

import TwitterImage from '@/assets/images/twitter.png'
import GithubImage from '@/assets/images/github.png'
import GitlabImage from '@/assets/images/gitlab.png'
import InstagramImage from '@/assets/images/instagram.png'
import ArtfamilyImage from '@/assets/images/artfamily.png'

export default {
    components: {
        SocialProfile,
    },
    data: () => ({
        images: {
            TwitterImage,
            GithubImage,
            GitlabImage,
            InstagramImage,
            ArtfamilyImage,
        }
    }),
}
</script>
