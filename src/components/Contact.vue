<script>
import {defineComponent} from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  data(){
    return {
      contact:{
        location:'HoChiMinh City',
        email:'buiducmanh.work@gmail.com',
      }
    }
  },


})
</script>

<template>
<div class="contact">
  <h6 class="">{{ contact.location }}</h6>
  <h6>{{contact.email}}</h6>
</div>
</template>

<style scoped>

</style>