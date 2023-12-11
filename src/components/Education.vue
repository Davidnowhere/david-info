<script>
import { Icon } from "@iconify/vue2";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Education',
  components: {
    Icon,
  },
  data() {
    return {
      education: {
        title: 'Education',
        timeStart: 'Aug 2018',
        timeEnd:'Dec 2021',
        collegeName: 'FPT POLYTECHNIC',
        major:'Software application, Web developer',
        status: 'Graduated'
      },
    }
  }
}
</script>

<template>
  <div class="education">
    <div class="education divide-black divide-y-2">
      <div class="titleEducation font-bold text-xl uppercase">
        {{ education.title }}
      </div>
      <div class="bodyEducation flex gap-3 divide-black divide-x-2 p-2">
        <div class="timeline flex-row justify-center text-center">
          <div class="font-bold">{{ education.timeStart }}</div>
          <div class="flex justify-center">
            <Icon class="text-2xl flex justify-center" icon="mdi:arrow-down-thin" />
          </div>
          <div class="font-bold">Dec 2021</div>
        </div>
        <div class="detailEducation p-2 pt-0">
          <div class="college font-bold uppercase">
            fpt polytechnic
          </div>
          <div class="major text-red-500">
            Major: Software application, Web developer
          </div>
          <div class="status">
            GRADUATED
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>