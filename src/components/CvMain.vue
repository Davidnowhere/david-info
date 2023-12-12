<script>
import MyTitleComponent from "@/components/MyTitleComponent.vue";
import Contact from "@/components/Contact.vue";
import Project from './Project.vue'
import Summary from './Summary.vue'
import Education from './Education.vue'
import WorkExperience from "@/components/WorkExperience.vue";
import DarkLightToggle from "@/components/darkLightToggle.vue";

export default {
  name: 'App',
  components: {
    DarkLightToggle,
    MyTitleComponent,
    Contact,
    WorkExperience,
    Project,
    Education,
    Summary,
  },
  data(){
    return {
  }
  },

}
</script>

<template>
  <div class="border-solid divide-black dark:divide-slate-50 divide-y-4 p-4">
    <div class="header inline-flex justify-between py-2">
      <div class="darkMode absolute top-4 right-4">
        <dark-light-toggle />
      </div>
      <div class="leftInfo">
        <my-title-component />
      </div>
      <div class="rightInfo pt-10 text-right flex justify-end items-end ">
        <contact />
      </div>
    </div>
    <div class="cvProfile sm:flex-wrap lg:flex py-2">
      <div class="leftProfile sm:basis-1 lg:basis-2/3">
        <work-experience />
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
