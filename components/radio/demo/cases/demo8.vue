<template>
  <div class="n22-example-child n22-example-child-radio n22-example-child-radio-8">
    <n22-field title="RadioItem单选">
      <n22-radio-item
        v-model="checked3"
        title="性别"
        name="radio"
        :options="sexOptions"
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
  title: '9、普通单选项 RadioItem',
  titleEnUS: 'Normal RadioItem单选',
  /* DELETE */
  components: {
    [Field.name]: Field,
    [Radio.name]: Radio,
    [RadioItem.name]: RadioItem,
    [Toast.name]: Toast,
  },
  data() {
    return {
      checked3: 'a',
      sexOptions: [{'value':'a','text':'男'},{'value':'b','text':'女'}],
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
.n22-example-child-radio-8
  .n22-field
    margin-top 20px
</style>
