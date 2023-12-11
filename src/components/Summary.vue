<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Summary',
  data() {
    return {
      summary:
          {
        title:"summary",
        content:{
          detail:[
              '- 1+ year of experience in software development and Web technologies.',
              '- 1 year experience in VueJs Framework.',
              '- 6 months experience in Laravel Framework.',
              '- Proficient in grasping new technology, workplaces and requirements quickly and using it effectively.',
              '- Can perform well independently or in group.',
              '- Hard-working and open minded.'
          ],
          languages:'Java,PHP,JavaScript',
          framework:'Spring, Laravel, VueJS, Bootstrap, Tailwind, Pug.',
          dataBase:'MySQL,SQL server'
        }
      }
    }
  },
  methods: {}
}
</script>

<template>
  <div class="summary divide-black divide-y-2 lg:pl-3">
    <div class="titleSummary font-bold text-xl uppercase">
      {{summary.title}}
    </div>
    <div class="content p-2 pl-0">
      <p v-for="item in summary.content.detail" :key="item" class="positive">
        {{item}}
      </p>
      <div class="skill p-2 pl-0">
        <div class="language ">
          <p class="font-bold inline mr-2">Programming Languages:</p><p class="inline">{{summary.content.languages}}</p>
        </div>
        <div class="framework ">
          <p class="font-bold inline mr-2">Frameworks/Platforms:</p>
          <p class="inline">{{summary.content.framework}}</p>
        </div>
        <div class="database ">
          <p class="font-bold inline mr-2">Database:</p><p class="inline">{{summary.content.dataBase}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>