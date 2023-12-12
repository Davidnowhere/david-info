<script>
import { Icon } from "@iconify/vue2";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Project',
  components: {
    Icon,
  },
  props: {
    project:{
      type: Object,
      default: null
    } ,
  },
  data() {
    return {

    };
    },
  mounted() {
  }

}

</script>

<template>
  <div>
    <div class="project">
      <div class="bodyProject flex gap-3 divide-black dark:divide-slate-50 divide-x-2 p-2 ">
        <div class="timeline flex-row justify-center text-center">
          <div class="font-bold">{{ project.timeStart }}</div>
          <div class="flex justify-center">
            <Icon class="text-2xl flex justify-center" icon="mdi:arrow-down-thin" />
          </div>
          <div class="font-bold">{{ project.timeEnd }}</div>
        </div>
        <div class="detailExperience p-2 pt-0">
          <div class="projectName font-bold uppercase">
            {{ project.name }}
          </div>
          <div class="role uppercase text-red-500 dark:text-cyan-400">
            {{ project.role }}
          </div>
          <div class="Organization">
            <p class="inline font-bold mr-1">Organization:</p>
            <p class="inline">{{ project.organization }}</p>
          </div>
          <div class="description">
            <p class="font-bold">Description:</p>
            <div v-for="(description,index) in project" :key="index"  class="" >
              {{description.aboutThis}}
              <div v-for="(sub,index) in description.details" :key="index"  class="sub-description ml-4">
                {{sub}}
              </div>
            </div>
            <p class="mainJob-description">+ Main job:</p>
            <p class="ml-4">{{ project.description.mainJob }}</p>
          </div>
          <div class="teamSize">
            <p class="font-bold inline mr-1">Team size:</p> <p class="inline">5 members, 1 tech lead</p></div>
          <div class="responsibilities">
            <p class="font-bold">Responsibilities:</p>
            <p v-for="(item,index) in project.responsibilities" :key="index" class="ml-4">
              {{ item }}
            </p>
          </div>
          <div class="technologies">
            <p class="font-bold inline">
              Technologies:
            </p>
            <p class="inline">
              {{project.technologies}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>