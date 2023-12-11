<script>
import { Icon } from '@iconify/vue2';
import Project from './Project.vue'
import Summary from './Summary.vue'
import Education from './Education.vue'

export default {
  name: 'App',
  components: {
    Icon,
    Project,
    Summary,
    Education
  }
}
</script>

<template>
  <div class="border-solid divide-black divide-y-4 p-4">
    <div class="header inline-flex justify-between py-2">
      <div class="leftInfor">
        <h1 class="font-bold text-3xl">Bui Duc Manh</h1>
        <h6>Developer</h6>
      </div>
      <div class="rightInfor text-right">
        <h6>HoChiMinh,Vietnam</h6>
        <h6>buiducmanh.work@gmail.com</h6>
        <h6></h6>
      </div>
    </div>
    <div class="cvProfile sm:flex-wrap lg:flex py-2">
      <div class="leftProfile sm:basis-1 lg:basis-2/3">
        <div class="workExperience divide-black divide-y-2">
          <div class="titleExperience font-bold text-xl">
            WORK EXPERIENCE
          </div>
          <div class="bodyExperience flex gap-3 divide-black divide-x-2 p-2">
            <div class="timeline flex-row justify-center text-center">
              <div class="font-bold">2021</div>
              <div class="flex justify-center">
                <Icon class="text-2xl flex justify-center" icon="mdi:arrow-down-thin" />
              </div>
              <div class="font-bold">Present</div>
            </div>
            <div class="detailExperience p-2 pt-0">
              <div class="company font-bold">
                QASOFT
              </div>
              <div class="position text-red-500">
                Developer
              </div>
              <div class="role">
                Full-stack
              </div>
            </div>

          </div>
        </div>
        <project />
        <education />
        </div>
      <div class="rightProfile sm:basis-1 lg:basis-1/3">
        <Summary />
      </div>

      </div>

    </div>



</template>

<style scoped>
.header {
  width: 100%;
}
</style>
