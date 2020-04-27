<template>
  <div class="n22-example-child n22-example-child-radio n22-example-child-radio-0-0">
    <!-- Demo1 -->
    <n22-field title="1、radio">
      <n22-radio name="0" type="radio" v-model="checked" :options="options" />
      <n22-radio name="1" mode="exam" :itemObject="itemObject" type="radio" v-model="checked2" :options="options2" />
    </n22-field>
    <!-- Demo2 -->
    <n22-field title="2、checkbox">
      <n22-radio name="0" type="checkbox" v-model="checked21" :options="options" />
      <n22-radio name="1" mode="exam" :itemObject="itemObject" type="checkbox" v-model="checked22" :options="options2" />
    </n22-field>
    <!-- Demo3 -->
    <n22-field title="3、RadioItem单选">
      <n22-radio-item
        v-model="checked3"
        title="性别"
        name="radio"
        :options="sexOptions"
        @changeData="$_changeData"
      >
      </n22-radio-item>
    </n22-field>
    <!-- Demo4 -->
    <n22-field title="4、RadioItem单选镂空">
      <n22-radio-item
        v-model="checked4"
        title="交费方式"
        name="radio"
        plain
        is-show-required
        :options="jffsOptions"
        @changeData="$_changeData"
      >
      </n22-radio-item>
    </n22-field>
    <!-- Demo5 -->
    <n22-field title="5、RadioItem单选修改码表key value取值">
      <n22-radio-item
        v-model="checked4"
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
    <!-- Demo6 -->
    <n22-field title="6、RadioItem多选">
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
import { Field, Radio, RadioItem } from 'al-mobile'

export default {
  name: 'radio-demo',
  /* DELETE */
  title: '普通单选项 radio',
  titleEnUS: 'Normal radio',
  /* DELETE */
  components: {
    [Field.name]: Field,
    [Radio.name]: Radio,
    [RadioItem.name]: RadioItem,
  },
  data() {
    return {
      //1、2
      checked: 'aa',
      checked2: 'a',
      checked21: [],
      checked22: [],
      options: [{text:"低",value:'0'},{text:"中",value:'1'},{text:"高",value:'2'}],
      options2: [{optionDes:"低",optionId:'0'},{optionDes:"中",optionId:'1'},{optionDes:"高",optionId:'2'}],
      itemObject: {topicAnswer:'1'},
      //3
      checked3: 'a',
      sexOptions: [{'value':'a','text':'男'},{'value':'b','text':'女'}],
      //4、5
      checked4: '5',
      jffsOptions: [{'value':'1','text':'1年交'},{'value':'5','text':'5年交'}],
      jffsOptionsX: [{'code':'1','desc':'1年交'},{'code':'5','desc':'5年交'}],
      //6
      checked6: '2',
      sllyOptions: [{'value':'1','text':'工资'},{'value':'2','text':'稿酬'},{'value':'3','text':'自营'}],
    }
  },
  methods: {
    //更改回调
    $_changeData({ name }, val, oldval, isHand, type, key) {
      console.log("%c $_changeData-name", "color:green;", name);
      console.log("%c $_changeData", "color:green;", val);
    },
  },
}

</script>

<style lang="stylus" scoped>
.n22-example-child-radio-0-0
  .n22-field
    margin-top 20px
</style>
