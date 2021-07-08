<template>
  <div class="n22-example-child n22-example-child-radio n22-example-child-radio-10">
    <n22-field title="RadioItem单选修改码表key value取值">
      <n22-radio-item
        v-model="checked5"
        title="交费方式"
        valueKey="code"
        textKey="desc"
        name="radio"
        plain
        is-show-required
        :options="jffsOptionsX"
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
  title: '11、单选修改码表key value取值 RadioItem',
  titleEnUS: 'change key value RadioItem',
  /* DELETE */
  components: {
    [Field.name]: Field,
    [Radio.name]: Radio,
    [RadioItem.name]: RadioItem,
    [Toast.name]: Toast,
  },
  data() {
    return {
      checked5: '5',
      jffsOptionsX: [{'code':'1','desc':'1年交'},{'code':'5','desc':'5年交'}],
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
.n22-example-child-radio-10
  .n22-field
    margin-top 20px
</style>
