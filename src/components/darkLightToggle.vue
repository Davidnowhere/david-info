<script>
import {defineComponent} from 'vue'
import { useDark,useToggle } from "@vueuse/core";


export default defineComponent({
  name: "darkLightToggle",
  data() {
    return{
      isDark: '',
    }
  },
  beforeMount() {
    this.isDark = useDark()
  },
  mounted() {
    this.isDark = useDark()
    const isChecked = document.querySelector("input")
    this.isDark ? isChecked.checked = false: isChecked.checked = true

  },
  methods: {
    toggleDark() {
      useToggle(this.isDark)
      const element = document.querySelector("html")
        element.classList.toggle("dark")
        this.isDark = !this.isDark
    },

  }
})
</script>

<template>
  <label class="switch">
    <input type="checkbox">
    <span class="slider" @click="toggleDark"></span>
  </label>
</template>

<style scoped>
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  --background: rgb(77, 77, 77);
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: .5s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: inset 8px -4px 0px 0px #e6e6e6;
  background: var(--background);
  transition: .5s;
}

input:checked + .slider {
  background-color: rgb(217, 217, 217);
}

input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 15px -4px 0px 15px #ffff99;
}
</style>