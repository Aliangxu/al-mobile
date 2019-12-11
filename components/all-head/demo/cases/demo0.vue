<template>
  <div class="n22-example-child n22-example-child-agree n22-example-child-0">
    <al-all-head @click-left="back" :opacityStyle="opacityStyle">
      <div slot="head_bottom">
        <n22-tab-bar ref="listMenu" :items="tabs" v-model="curIndex" @changeTab="changeTab"></n22-tab-bar>
      </div>
    </al-all-head>
  </div>
</template>

<script>
import { Allhead, tabBar } from "al-mobile";

export default {
  name: "agree-demo",
  /* DELETE */
  title: "选中状态",
  titleEnUS: "Selected state",
  height: 120,
  /* DELETE */
  components: {
    [Allhead.name]: Allhead
  },
  data() {
    return {
      agreeConf: {
        checked: true,
        name: "agree0",
        size: "md",
        disabled: false,
        introduction: "选中状态"
      }
    };
  },
  methods: {
    onChange(name, checked) {
      console.log(
        `agree name = ${name} is ${checked ? "checked" : "unchecked"}`
      );
    }
  }
};
</script>
