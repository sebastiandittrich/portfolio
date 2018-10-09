<template>
  <transition name="opacity">
    <div v-images-loaded="imagesloaded" v-show="imagesready">
      <router-view/>
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
