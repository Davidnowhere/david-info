<template>
  <cv-main/>
</template>

<script>
import CvMain from './components/CvMain.vue'

export default {
  name: 'App',
  components: {
    CvMain
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  @apply font-Popin transition-colors bg-slate-50 dark:bg-slate-900 text-black dark:text-white duration-200 ease-in-out;
}
</style>
