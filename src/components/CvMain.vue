<script>
import { Icon } from '@iconify/vue2';
// import ContactInformation from './components/ContactInformation/index.vue'

export default {
  name: 'App',
  components: {
    Icon
    // ContactInformation
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
        <div class="project divide-black divide-y-2">
          <div class="titleProject font-bold text-xl">
            PROJECT
          </div>
          <div class="bodyProject flex gap-3 divide-black divide-x-2 p-2 ">
            <div class="timeline flex-row justify-center text-center">
              <div class="font-bold">2021</div>
              <div class="flex justify-center">
                <Icon class="text-2xl flex justify-center" icon="mdi:arrow-down-thin" />
              </div>
              <div class="font-bold">Present</div>
            </div>
            <div class="detailExperience p-2 pt-0">
              <div class="projectName font-bold">
                HM
              </div>
              <div class="role uppercase text-red-500">
                FULL-STACK
              </div>
              <div class="Organization">
                <p class="inline mr-1">Organization:</p>
                <p class="inline">QASoft</p>
              </div>
              <div class="description">
                <p class="font-bold">Description:</p>
                <p class=""> + This is a purchasing management system, including:</p>
              </div>
              <div class="teamSize">
                <p class="font-bold inline mr-1">Team size:</p> <p class="inline">5 members, 1 tech lead</p></div>
              <div class="responsibilities">
                <p class="font-bold">Responsibilities:</p>
                <p class="">+ Analyze & design the base source with the team.</p>
                <p class="">+ Develop features as required.</p>
              </div>
              <div class="technologies">
                <p class="font-bold inline">
                  Technologies:
                </p>
                <p class="inline">
                  Laravel, VueJS, HTML, CSS, Javascript, Git.
                </p>
              </div>
            </div>

          </div>


        </div>
          <div class="education">
            <div class="education divide-black divide-y-2">
              <div class="titleEducation font-bold text-xl uppercase">
                education
              </div>
              <div class="bodyEducation flex gap-3 divide-black divide-x-2 p-2">
                <div class="timeline flex-row justify-center text-center">
                  <div class="font-bold">Aug 2018</div>
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
        </div>
      <div class="rightProfile sm:basis-1 lg:basis-1/3">
        <div class="summary divide-black divide-y-2 lg:pl-3">
          <div class="titleSummary font-bold text-xl">
            SUMMARY
          </div>
          <div class="content p-2 pl-0">
           <div class="positive">
             <p>- 1+ year of experience in software
               development and Web technologies.</p>
             <p>- 1 year experience in VueJs
               Framework.</p>
             <p>- 6 months experience in Laravel
               Framework.</p>
             <p>- Proficient in grasping new
               technology, workplaces and
               requirements quickly and using it
               effectively.</p>
             <p>- Can perform well independently or
               in group.</p>
             <p>- Hard-working and openminded.</p>
           </div>
            <div class="skill p-2 pl-0">
              <div class="language ">
                <p class="font-bold inline">Programming Languages:</p><p class="inline">Java,PHP,JavaScript</p>
              </div>
              <div class="framework ">
                <p class="font-bold inline">Frameworks/Platforms:</p>
                <p class="inline">Spring,
                  Laravel, VueJS, Bootstrap, Tailwind,
                  Pug.</p>
              </div>
              <div class="database ">
                <p class="font-bold inline">Database:</p><p class="inline">MySQL,SQL server</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>

    </div>



</template>

<style scoped>
.header {
  width: 100%;
}
</style>
