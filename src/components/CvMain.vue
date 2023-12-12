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
      project:
          [
            {
            name: 'HM',
            role:'FULL-STACK',
            timeStart:'Sep 2022',
            timeEnd:'Oct 2022',
            organization:'QASoft',
            description:
                {
                  aboutThis: '+ This is a purchasing management system, including:',
                  details: [
                    '- Order Management',
                    '- Products',
                    '- Show, develop features: Customers, Stocks, Debt, Dashboard...'
                  ],
                  mainJob: '- Develop features on demand'
                },
            teamSize:'5 members, 1 tech lead',
            responsibilities: [
              '+ Analyze & design the base source with the team',
              '+ Develop features as required.'
            ],
            technologies:'Laravel, VueJS, HTML, CSS, Javascript, Git.' },
            {
              name: 'ABIO',
              role:'FULL-STACK',
              timeStart:'May 2022',
              timeEnd:'Sep 2022',
              organization:'QASoft',
              description:
                  {
                    aboutThis: '+ This is a purchasing management system, including:',
                    details: [
                      '- Order Management',
                      '- Products',
                      '- Show, develop features: Customers, Stocks, Dashboard...'
                    ],
                    mainJob: '- Develop features on demand'
                  },
              teamSize:'6 members, 1 tech lead',
              responsibilities: [
                '+ Analyze & design the base source with the team',
                '+ Develop features as required.'
              ],
              technologies:'Laravel, VueJS, InertiaJS, CSS, Javascript, Git.' },
            {
              name: 'matxi',
              role:'FULL-STACK',
              timeStart:'Mar 2022',
              timeEnd:'May 2022',
              organization:'QASoft',
              description:
                  {
                    aboutThis: '+ This is a purchasing management system, including:',
                    details: [
                      '- Members',
                      '- Products',
                      '- Orders',
                      '- Export stock',
                      '- Transaction history',
                    ],
                    mainJob: '- Develop features on demand'
                  },
              teamSize:'8 members, 1 tech lead',
              responsibilities: [
                '+ Analyze & design the base source with the team',
                '+ Develop features as required.'
              ],
              technologies:'Laravel, VueJS, NuxtJS, CSS, Javascript, Git.' },
            {
              name: 'geneagoly',
              role:'Frontend',
              timeStart:'Jan 2022',
              timeEnd:'Mar 2022',
              organization:'QASoft',
              description:
                  {
                    aboutThis: '+ Manage family members generic nextwork page design for genealogy:',
                    details: [
                      '- Family tree diagram',
                      '- Social networking site like facebook',
                      '- Social networking site like facebook',
                    ],
                    mainJob: '- Develop features on demand'
                  },
              teamSize:'5 members, 1 tech lead',
              responsibilities: [
                '+ Analyze & design the base source with the team',
                '+ Develop features as required.'
              ],
              technologies:'Laravel, VueJS, NuxtJS, CSS, Javascript, Git.' },
            {
              name: 'hpg',
              role:'frontend',
              timeStart:'Oct 2021',
              timeEnd:'Dec 2021',
              organization:'QASoft',
              description:
                  {
                    aboutThis: '+  Project about managing the working process of a factory:',
                    details: [
                      '- Order Management',
                      '- Show, develop features : Delivery manager, employee manager,warehouse manager...',
                    ],
                    mainJob: '- Develop features on demand'
                  },
              teamSize:'5 members, 1 tech lead',
              responsibilities: [
                '+ Analyze & design the base source with the team',
                '+ Develop features as required.'
              ],
              technologies:'Laravel, VueJS, NuxtJS, CSS, Javascript, Git.' },
          ]

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
        <div class="profile divide-black dark:divide-slate-50 divide-y-2">
          <div class="titleProject font-bold text-xl">
            PROJECT
          </div>
          <project v-for="(project,index) in project" :key="index" :project="project" />
        </div>
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
