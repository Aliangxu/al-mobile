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
    >
      <template #left>
        左侧插槽
      </template>
      <template #right="{value}">
        右侧插槽 {{value}}
      </template>
      <template #right-children>
        右侧二级插槽
      </template>
      <template #children>
        底部插槽
      </template>
    </n22-drop-select>
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
      :mark="true"
      @changeData="$_changeData"
      @markFun="$_markFun"
    >
      <template #right-children>
        右侧二级插槽
      </template>
      <template #children>
        底部插槽
      </template>
    </n22-drop-select>
  </div>
</template>

<script>
import { DropSelectItem, Dialog } from "al-mobile";

export default {
  name: "drop-select-demo",
  /* DELETE */
  title: "表单弹出滑动选择-简单下拉菜单",
  titleEnUS: "Drop Select item",
  height: 120,
  /* DELETE */
  components: {
    [DropSelectItem.name]: DropSelectItem,
    [Dialog.name]: Dialog,
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
    $_markFun(title, name){
      Dialog.alert({
        title: '温馨提示',
        content: `${title}-${name}`,
        cancelText: '取消',
        confirmText: '确定',
        onConfirm: () => console.log('[Dialog.alert] confirm clicked'),
      });
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
