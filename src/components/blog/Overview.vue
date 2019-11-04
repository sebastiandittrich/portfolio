<template>
    <router-link :to="'/blog/' + article.slug" class="block">
        <img :src="article.image" alt="" class="rounded-lg mb-4">
        <div class="font-bold text-xl text-black">
            {{ article.title }}
        </div>
        <div class="text-grey-dark text-sm mt-2">
            {{ article.description }}
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        article: Object,
    }
}
</script>
