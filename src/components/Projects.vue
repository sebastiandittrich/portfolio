<template>
    <div>
        <a v-for="project of projects" :key="project.name" :href="project.url" target="_blank"
            class="bg-white shadow-lg hover:shadow-md rounded-lg overflow-hidden mb-4 project transition">
            <img :src="project.image" alt="" class="h-auto w-auto">
            <div class="flex flex-col items-start justify-start p-8 pl-0">
                <div class="font-bold mb-2 group-hover:text-black"> {{project.name}} </div>
                <div> {{project.description}} </div>
            </div>
        </a>
    </div>
</template>

<style scoped>
    .project {
        display: grid;
        grid-template: "image content" auto / 7rem 1fr;
        align-items: center;
        justify-items: center;
    }
    .project > img {
        grid-area: image;
    }
    .project > div {
        grid-area: content;
    }
</style>


<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: 'Todoninja',
                    description: 'An extended Todo-App optimized for mobile usage.',
                    image: 'img/todoninja.png',
                    url: 'https://todoninja.de'
                },{
                    name: 'Artfamily',
                    description: 'An online artwork forum for sharing your creations and sketches with artists around the world.',
                    image: 'img/artfamily.jpg',
                    url: 'https://art.todoninja.de'
                },{
                    name: 'Asocial Network',
                    description: 'This is an anti-social network inspired by the "Känguru-Chroniken" authored by Marc Uwe Kling.',
                    image: 'img/asozialesnetzwerk.png',
                    url: 'http://asozialesnetzwerk.com'
                },
            ]
        }
    }
}
</script>
