<template>
    <div>
        <a :href="link" target="_blank">
            <img :src="image" class="w-8 h-8" :alt="name" :title="name">
        </a>
    </div>
</template>

<script>
export default {
    props: {
        link: String,
        image: String,
        name: String,
    }
}
</script>

<style lang="stylus" scoped>
a img
    transition all 100ms
a:hover img
    transform scale(1.1)
</style>
