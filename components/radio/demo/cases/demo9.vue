<template>
  <div class="n22-example-child n22-example-child-radio n22-example-child-radio-9">
    <n22-field title="RadioItem单选镂空">
      <n22-radio-item
        v-model="checked4"
        title="交费方式"
        name="radio"
        plain
        is-show-required
        :options="jffsOptions"
        @changeData="$_changeData"
        @dropSelectClick="$_dropSelectClick"
      >
      </n22-radio-item>
    </n22-field>
  </div>
</template>

<script>
import { Field, Radio, RadioItem, Toast } from 'al-mobile'

export default {
  name: 'radio-demo',
  /* DELETE */
  title: '10、单选镂空 RadioItem',
  titleEnUS: 'Normal plain RadioItem',
  /* DELETE */
  components: {
    [Field.name]: Field,
    [Radio.name]: Radio,
    [RadioItem.name]: RadioItem,
    [Toast.name]: Toast,
  },
  data() {
    return {
      checked4: '5',
      jffsOptions: [{'value':'1','text':'1年交'},{'value':'5','text':'5年交'},{'value':'10','text':'10年交'}],
    }
  },
  methods: {
    //更改回调
    $_changeData({ name }, val, oldval, isHand, type, key) {
      console.log("%c $_changeData-name", "color:green;", name);
      console.log("%c $_changeData", "color:green;", val);
    },
    $_dropSelectClick (value, callback){
      if (value === "10") {
        Toast.failed("不能选择10年交")
        return callback(false);
      }
      return;
    }
  },
}

</script>

<style lang="stylus" scoped>
.n22-example-child-radio-9
  .n22-field
    margin-top 20px
</style>
