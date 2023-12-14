<script>
import {defineComponent} from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  data(){
    return {
      contact:{
        location:'HoChiMinh City',
        email:'manhbd334@gmail.com',
        phone:0368896093
      }
    }
  },


})
</script>

<template>
<div class="contact">
  <h6 class="">{{ contact.location }}</h6>
  <h6>{{contact.email}}</h6>
  <h6>{{contact.phone}}</h6>
</div>
</template>

<style scoped>

</style>
