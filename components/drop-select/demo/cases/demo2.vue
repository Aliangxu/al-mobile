<template>
  <div class="n22-example-child n22-example-child-drop-select n22-example-child-drop-select-0">
    <router-link to="/zh-CN/docs/components/business/work">
      移步
    </router-link>
  </div>
</template>

<script>
import { DropSelectItem } from "al-mobile";

export default {
  name: "drop-select-demo",
  /* DELETE */
  title: "表单弹出滑动选择-简单下拉菜单-职业",
  titleEnUS: "Drop Select item",
  height: 120,
  /* DELETE */
  components: {
    [DropSelectItem.name]: DropSelectItem,
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="stylus">
.head-left-children
  position absolute
  margin-left 20px
.head-right-children
  span
    margin-left 10px
</style>
