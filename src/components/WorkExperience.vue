<script>
import {defineComponent} from 'vue'
import { Icon } from "@iconify/vue2";


export default defineComponent({
  name: "WorkExperience",
  components:{
    Icon
  },
  data() {
    return {
      workExperience: {
        title: 'WorkExperience',
        timeStart: '2021',
        timeEnd:'Oct 2022',
        companyName: 'QASoft',
        position: 'Developer',
        role:'Full-stack',
      },
    }
  },
})
</script>

<template>
  <div class="workExperience divide-black dark:divide-slate-50 divide-y-2">
    <div class="titleExperience font-bold text-xl">
      {{ workExperience.title }}
    </div>
    <div class="bodyExperience flex gap-3 divide-black dark:divide-slate-50 divide-x-2 p-2">
      <div class="timeline flex-row justify-center text-center">
        <div class="font-bold">{{ workExperience.timeStart }}</div>
        <div class="flex justify-center">
          <Icon class="text-2xl flex justify-center" icon="mdi:arrow-down-thin" />
        </div>
        <div class="font-bold">{{ workExperience.timeEnd }}</div>
      </div>
      <div class="detailExperience p-2 pt-0">
        <div class="company font-bold">
          {{ workExperience.companyName }}
        </div>
        <div class="position text-red-500 dark:text-cyan-400">
          {{ workExperience.position }}
        </div>
        <div class="role">
          {{ workExperience.role }}
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>