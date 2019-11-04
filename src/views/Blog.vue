<template>
    <div class="bg-grey-lighter">
        <div class="p-8 border-b">
            <div class="text-sm flex flex-row justify-between items-center">
                <h1 class="text-black text-xl text-center">Sebastian's Blog</h1>
                <router-link to="/" class="link border-none">
                    <i class="feather icon-chevron-left"></i>
                    Home
                </router-link>
            </div>
        </div>
        <div class="article container max-w-lg mx-auto">
            <div class="bg-white">
                <div v-for="article of entries" :key="article.slug" class="py-4 border-b">
                    <blog-overview :article="article" class="p-4"></blog-overview>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loading_entries from '@/blog'
import BlogOverview from '@/components/blog/Overview'

export default {
    metaInfo: {
        title: 'Blog'
    },
    components: {
        BlogOverview,
    },
    data: () => ({
        loading_entries,
    }),
    computed: {
        entries() {
            return this.loading_entries.filter(entry => entry.loaded)
        }
    }
};
</script>
