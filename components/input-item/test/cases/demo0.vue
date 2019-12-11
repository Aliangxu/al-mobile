<template>
  <div class="n22-example-child n22-example-child-input-item-0">
    <n22-field>
      <n22-input-item
        ref="input0"
        title="普通文本"
        placeholder="普通文本"
        is-amount
        :maxlength="5"
      ></n22-input-item>
      <n22-input-item
        ref="input1"
        title="禁用表单"
        value="禁用表单"
        disabled
      ></n22-input-item>
      <n22-input-item
        ref="input12"
        title="只读表单"
        value="只读表单"
        readonly
      ></n22-input-item>
      <n22-input-item
        ref="input13"
        title="高亮表单"
        placeholder="高亮表单"
        is-highlight
      ></n22-input-item>
      <n22-input-item
        ref="input3"
        title="文本居中"
        placeholder="文本居中"
        align="center"
      ></n22-input-item>
      <n22-input-item
        ref="input4"
        title="文本居右"
        placeholder="文本居右"
        align="right"
      ></n22-input-item>
    </n22-field>
  </div>
</template>

<script>
import {InputItem, Field} from 'al-mobile'

export default {
  name: 'input-item-demo',
  components: {
    [InputItem.name]: InputItem,
    [Field.name]: Field,
  },
}

</script>