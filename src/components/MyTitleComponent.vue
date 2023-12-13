<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MyTitleComponent",
  data() {
    return {
      myName: "Bui Duc Manh",
      title: 'Developer',
      isDark: true,
    }
  }
})
</script>

<template>
<div class="flex">
  <div class="thumbnail ">
    <img src="../assets/david-avt.png"
         alt="my-avatar" class="inline-block max-sm:hidden h-40 w-40 rounded-full ring-white dark:ring-slate-800" />
  </div>
  <div class="title pl-4 pt-4 max-sm:pl-0 max-sm:flex-wrap max-sm:pt-10 max-sm:justify-end max-sm:items-end">
    <div class="block myName h-9 relative">
      <h1 class="font-bold text-3xl absolute w-max">{{ myName }}</h1>
    </div>
    <h6 class="">{{ title }}</h6>
  </div>
</div>
</template>

<style scoped>

</style>