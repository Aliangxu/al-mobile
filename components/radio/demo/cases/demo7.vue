<template>
  <div class="n22-example-child n22-example-child-radio n22-example-child-radio-7">
    <n22-field title="checkbox">
      <n22-radio name="0" type="checkbox" v-model="checked21" :options="options"/>
      <n22-radio name="1" mode="exam" :itemObject="itemObject" type="checkbox" v-model="checked22" :options="options2" />
    </n22-field>
  </div>
</template>

<script>
import { Field, Radio, RadioItem, Toast } from 'al-mobile'

export default {
  name: 'radio-demo',
  /* DELETE */
  title: '8、普通多选项 checkbox',
  titleEnUS: 'Normal checkbox',
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
      checked21: [],
      checked22: [],
      options: [{text:"低低低",value:'0'},{text:"中中中中",value:'1'},{text:"高",value:'2'},{text:"高高",value:'3'},{text:"高高高高",value:'4'}],
      options2: [{optionDes:"低",optionId:'0'},{optionDes:"中",optionId:'1'},{optionDes:"高",optionId:'2'}],
      itemObject: {topicAnswer:'1'},
    }
  },
  methods: {
  },
}

</script>

<style lang="stylus" scoped>
.n22-example-child-radio-7
  .n22-field
    margin-top 20px
</style>
