<template>
  <div class="n22-example-child n22-example-child-switch n22-example-child-switch-0">
    <n22-switch-item
      v-model="modelswitch1"
      title="滑块表单默认功能"
      vvalidateModal=""
      data-vv-as="xxxx"
      name="switch"
      @changeData="$_changeData"
      @markFun="$_markFun"
    >
      <div class="active">是</div>
      <div class="inactive">否</div>
    </n22-switch-item>
    <n22-switch-item
      v-model="modelswitch2"
      title="滑块表单更改颜色"
      vvalidateModal=""
      data-vv-as="xxxx"
      name="switch"
      activeColor="green"
      inactiveColor="red"
      @changeData="$_changeData"
      @markFun="$_markFun"
    >
      <div class="active">是</div>
      <div class="inactive">否</div>
    </n22-switch-item>
  </div>
</template>

<script>
import {Dialog, SwitchItem} from 'al-mobile'

export default {
  name: 'switch-demo',
  /* DELETE */
  title: '滑块表单',
  titleEnUS: 'Item',
  /* DELETE */
  components: {
    [Dialog.name]: Dialog,
    [SwitchItem.name]: SwitchItem,
  },
  data() {
    return {
      modelswitch1: "",
      modelswitch2: "",
    }
  },
  methods: {
    //更改回调
    $_changeData(val, item, key, type) {
      console.log("%c $_changeData", "color:green;", val);
    },
    $_markFun() {
      Dialog.alert({
        title: "友情提示",
        content: "功能暂未开放，敬请期待",
        // cancelText: '取消',
        confirmText: "确定",
        onConfirm: () => console.log("[Dialog.alert] confirm clicked"),
      });
    },
  },
}

</script>

<style scoped>
.active {
  position: absolute;
  margin: 5px 0 0 2px;
  color: #ffffff;
}
.inactive {
  position: absolute;
  margin: 5px 0 0 24px;
}
</style>