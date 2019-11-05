<template>
  <transition name="opacity">
    <div v-images-loaded="imagesloaded" v-show="($route.path != '/') || imagesready" style="display: grid; grid-template: 'content' 1fr 'footer' auto / 100%" class="min-h-screen">
      <keep-alive>
        <router-view style="grid-area: content"/>
      </keep-alive>
      <app-footer style="grid-area: footer"></app-footer>
    </div>
  </transition>
</template>

<script>
import '@/assets/css/main.css'
import '@/assets/css/iconfont.css'
import '@/assets/css/transitions.css'
import imagesLoaded from 'vue-images-loaded'
import AppFooter from '@/components/Footer'

export default {
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Sebastian Dittrich',
    meta: [
        { vmid: 'description', name: 'description', content: 'I am Sebastian Dittrich and this is my portfolio!' }
    ]
  },
  directives: {
    imagesLoaded,
  },
  components: {
      AppFooter,
  },
  data() {
    return {
      imagesready: false
    }
  },
  methods: {
    imagesloaded() {
      this.imagesready = true
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
