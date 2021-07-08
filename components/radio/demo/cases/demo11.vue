<template>
  <div class="n22-example-child n22-example-child-radio n22-example-child-radio-11">
    <n22-field title="RadioItem多选">
      <n22-radio-item
        v-model="checked6"
        title="收入来源"
        type="checkbox"
        name="radio"
        is-show-required
        :options="sllyOptions"
        @changeData="$_changeData"
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
  title: '12、普通多选 RadioItem',
  titleEnUS: 'Normal checkbox RadioItem',
  /* DELETE */
  components: {
    [Field.name]: Field,
    [Radio.name]: Radio,
    [RadioItem.name]: RadioItem,
    [Toast.name]: Toast,
  },
  data() {
    return {
      checked6: '2',
      sllyOptions: [{'value':'1','text':'工资'},{'value':'2','text':'稿酬'},{'value':'3','text':'自营'}],
    }
  },
  methods: {
    //更改回调
    $_changeData({ name }, val, oldval, isHand, type, key) {
      console.log("%c $_changeData-name", "color:green;", name);
      console.log("%c $_changeData", "color:green;", val);
    }
  },
}

</script>

<style lang="stylus" scoped>
.n22-example-child-radio-11
  .n22-field
    margin-top 20px
</style>
