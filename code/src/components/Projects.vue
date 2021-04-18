<template>
  <div>
    <a
      v-for="project of projects"
      :key="project.name"
      :href="project.url"
      target="_blank"
      rel="noopener"
      class="bg-white shadow-lg hover:shadow-md rounded-lg overflow-hidden mb-4 project transition"
    >
      <img :src="project.image" alt="" class="h-auto w-auto" />
      <div class="flex flex-col items-start justify-start p-8 pl-0">
        <div class="mb-2 link border-none hover:border-none">
          {{ project.name }}
        </div>
        <div>{{ project.description }}</div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.project {
  display: grid;
  grid-template: 'image content' auto / 7rem 1fr;
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


<script>
import OpaqueLogo from '@/assets/images/opaque.png'
import ArtfamilyLogo from '@/assets/images/artfamily.png'
import AsozialesNetzwerkLogo from '@/assets/images/asozialesnetzwerk.png'
import DKDLogo from '@/assets/images/dkd.svg'
import RememberLinkLogo from '@/assets/images/rememberlink.svg'
import TodoninjaLogo from '@/assets/images/todoninja.svg'

export default {
  data() {
    return {
      projects: [
        {
          name: 'Opaque JS',
          description: 'A client-side Javascript ORM for any API.',
          image: OpaqueLogo,
          url: 'https://opaquejs.github.io',
        },
        {
          name: 'Todoninja',
          description: 'An extended Todo-App optimized for mobile usage.',
          image: TodoninjaLogo,
          url: 'https://todoninja.de',
        },
        {
          name: 'remember.link',
          description:
            'A link shortener with customizable and better memorizable links.',
          image: RememberLinkLogo,
          url: 'https://link.playground.todoninja.de',
        },
        {
          name: 'Artfamily',
          description:
            'An online artwork forum for sharing your creations and sketches with artists around the world.',
          image: ArtfamilyLogo,
          url: 'https://art.todoninja.de',
        },
        {
          name: 'DKD',
          description:
            'A kind of fashion brand that we wear and design with my friends.',
          image: DKDLogo,
          url: 'https://dkdmerch.de',
        },
        {
          name: 'Asocial Network',
          description:
            'This is an anti-social network inspired by the "Känguru-Chroniken" authored by Marc Uwe Kling.',
          image: AsozialesNetzwerkLogo,
          url: 'http://asozialesnetzwerk.com',
        },
      ],
    }
  },
}
</script>
