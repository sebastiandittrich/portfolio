import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Blog from './views/Blog.vue';
import Article from './views/Article.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
        },
        {
            path: '/blog/:slug',
            name: 'article',
            component: Article,
            props: route => ({ slug: route.params.slug })
        }
    ],
});
