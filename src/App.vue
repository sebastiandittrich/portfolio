<template>
  <transition name="opacity">
    <div v-images-loaded="imagesloaded" v-show="($route.path != '/') || imagesready" style="display: grid; grid-template: 'content' 1fr 'footer' auto / 100%">
      <router-view style="grid-area: content"/>
      <div class="p-8 bg-grey-lighter flex flex-col justify-center items-center" style="grid-area: footer">
          <div class="text-center leading-loose">
              Built with <a href="http://tailwindcss.com" target="_blank" class="link">Tailwind CSS</a>, <a target="_blank" href="http://vuejs.org" class="link">Vue</a> and <a target="_blank" href="https://code.visualstudio.com/" class="link">Visual Studio Code</a>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
import '@/assets/css/main.css'
import '@/assets/css/iconfont.css'
import '@/assets/css/transitions.css'
import imagesLoaded from 'vue-images-loaded'

export default {
  directives: {
    imagesLoaded,
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
