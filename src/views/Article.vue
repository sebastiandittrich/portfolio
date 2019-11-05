<template>
    <div>
        <div class="p-8 border-b bg-grey-lighter text-sm">
            <div class="container mx-auto flex flex-row justify-between items-center max-w-lg">
                <h1 class="text-black text-xl text-center">Sebastian's Blog</h1>
                <router-link to="/blog" class="link border-none">
                    <i class="feather icon-chevron-left"></i>
                    All Articles
                </router-link>
            </div>
        </div>
        <div class="p-8 lg:px-0 article container max-w-lg mx-auto">
            <component class="" :is="article"></component>
        </div>
        <div class="p-8 bg-grey-lightest border-t flex flex-col items-center">
            <div class="font-bold text-center uppercase tracking-wide text-sm mb-8">About the author</div>
            <router-link to="/" class="flex flex-row items-center">
                <div class="p-1 border-2 border-blue rounded-full flex flex-row items-center justify-center">
                    <img src="/img/avatar.pjpeg" class="w-12 h-12 rounded-full" alt="Me taking a Picture with my mobile phone">
                </div>
                <div class="ml-8 flex flex-col items-start justify-start">
                    <div class="font-bold text-black">Sebastian Dittrich</div>
                    <router-link to="/" class="link mt-2 block">Read more</router-link>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo() {
        return {
            title: `${this.meta.title || 'Article'} | Blog | Sebastian Dittrich`,
            meta: [
               { vmid: 'description', name: 'description', content: this.meta.description },
            ]
        }
    },
    props: {
        slug: String
    },
    data: () => ({
        article: null
    }),
    computed: {
        meta() {
            return this.article ? this.article.meta : {}
        }
    },
    methods: {
        async loadArticle() {
            this.article = (await import('@/blog/' + this.slug + '.md')).default
        }
    },
    watch: {
        slug: 'loadArticle'
    },
    created() {
        this.loadArticle()
    },
}
</script>

<style lang="stylus" scoped>
.article /deep/
    @apply text-grey-darkest w-full
    h1, h2, h3, h4
        color black
    h1
        @apply mb-4
    h2, h3, h4
        @apply mb-2
    h3, h4
        @apply text-base
    p
        @apply mb-8
        line-height: 150%
        & + p
            @apply -mt-4
    blockquote
        @apply mb-8 border-l-4 border-blue p-4
        p
            @apply mb-0
    code
        @apply bg-grey-lighter px-2 rounded-lg
    pre code
        @apply p-4 rounded-lg shadow-md mb-4
        display: block;
        overflow-x: auto;
        color: #abb2bf;
        background: #282c34
        line-height 150%
    img
        @apply mb-4 rounded-lg h-auto mx-auto block
        max-height 50vh
    ul, ol
        @apply mb-8
    hr
        @apply h-px bg-grey-light my-8
    table
        @apply block overflow-x-auto mb-8
        td, th
            @apply p-2 px-4
        thead
            @apply border-grey border-b
        tr:nth-child(2n)
            @apply bg-grey-lighter rounded-lg
</style>

<style>
/*
Atom One Dark by Daniel Gamage
Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax
base:    #282c34
mono-1:  #abb2bf
mono-2:  #818896
mono-3:  #5c6370
hue-1:   #56b6c2
hue-2:   #61aeee
hue-3:   #c678dd
hue-4:   #98c379
hue-5:   #e06c75
hue-5-2: #be5046
hue-6:   #d19a66
hue-6-2: #e6c07b
*/

.hljs-comment,
.hljs-quote {
  color: #5c6370;
  font-style: italic;
}

.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #c678dd;
}

.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e06c75;
}

.hljs-literal {
  color: #56b6c2;
}

.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta-string {
  color: #98c379;
}

.hljs-built_in,
.hljs-class .hljs-title {
  color: #e6c07b;
}

.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #d19a66;
}

.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #61aeee;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}
</style>
