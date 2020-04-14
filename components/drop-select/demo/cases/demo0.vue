<template>
  <div class="n22-example-child n22-example-child-drop-select n22-example-child-drop-select-0">
    <n22-drop-select
      v-model="modelDropSelectSingle"
      name="singleName"
      title="简单下拉菜单"
      :options="options"
      :itemObject="{ name: 'insured.birthday' }"
      pickerTitle="请选择xxxx"
      ispickerValue="请选择yyyy"
      type="single"
      :isAppendTo="false"
      @changeData="$_changeData"
    ></n22-drop-select>
  </div>
</template>

<script>
import { DropSelectItem } from "al-mobile";

export default {
  name: "drop-select-demo",
  /* DELETE */
  title: "表单弹出滑动选择-简单下拉菜单",
  titleEnUS: "Drop Select item",
  height: 120,
  /* DELETE */
  components: {
    [DropSelectItem.name]: DropSelectItem,
  },
  data() {
    return {
      modelDropSelectSingle: "",
      options: [
        {
          text: "测试一",
          value: "1",
        },
        {
          text: "测试二",
          value: "2",
        },
        {
          text: "测试三",
          value: "3",
        }
      ],
    };
  },
  methods: {
    $_changeData({ name }, val, oldval, isHand, type, key) {
      console.log("%c $_changeData-name", "color:green;", name);
      console.log("%c $_changeData", "color:green;", val);
    },
  }
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
