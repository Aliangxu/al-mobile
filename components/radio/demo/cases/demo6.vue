<template>
  <div class="n22-example-child n22-example-child-radio n22-example-child-radio-6">
    <n22-field title="radio">
      <n22-radio name="0" type="radio" v-model="checked" :options="options"/>
      <n22-radio name="1" mode="exam" :itemObject="itemObject" type="radio" v-model="checked2" :options="options2" />
    </n22-field>
    <n22-field title="内联">
      <n22-radio name="0" type="radio" v-model="checked" :options="options" inline/>
    </n22-field>
    <n22-radio name="0" type="radio" v-model="checked" :options="options" inline/>
  </div>
</template>

<script>
import { Field, Radio, RadioItem, Toast } from 'al-mobile'

export default {
  name: 'radio-demo',
  /* DELETE */
  title: '7、普通单选项 radio',
  titleEnUS: 'Normal radio',
  /* DELETE */
  components: {
    [Field.name]: Field,
    [Radio.name]: Radio,
    [RadioItem.name]: RadioItem,
    [Toast.name]: Toast,
  },
  data() {
    return {
      //1、2
      checked: 'aa',
      checked2: 'a',
      options: [{text:"低低低",value:'0'},{text:"中中中",value:'1'},{text:"高高高",value:'2'},{text:"高高高",value:'3'},{text:"高高高",value:'4'}],
      options2: [{optionDes:"低",optionId:'0'},{optionDes:"中",optionId:'1'},{optionDes:"高",optionId:'2'}],
      itemObject: {topicAnswer:'1'},
    }
  },
  methods: {
  },
}

</script>

<style lang="stylus" scoped>
.n22-example-child-radio-6
  .n22-field
    margin-top 20px
</style>
