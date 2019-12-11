<template>
  <div class="n22-example-child n22-example-child-input-item-4">
    <n22-field>
      <n22-input-item
        ref="input9"
        title="清空按钮"
        placeholder="normal text"
        clearable
      ></n22-input-item>
      <n22-input-item
        ref="input10"
        title="金融键盘"
        placeholder="financial number keyboard"
        is-virtual-keyboard
        clearable
      ></n22-input-item>
      <n22-input-item
        ref="input11"
        placeholder="left/right slots"
      >
        <n22-icon name="bank-zs" slot="left" svg></n22-icon>
        <n22-icon name="info" slot="right"></n22-icon>
      </n22-input-item>
    </n22-field>
  </div>
</template>

<script>
import {InputItem, Field, Icon} from 'al-mobile'
import '@examples/assets/images/bank-zs.svg'

export default {
  name: 'input-item-demo',
  components: {
    [InputItem.name]: InputItem,
    [Field.name]: Field,
    [Icon.name]: Icon,
  },
}

</script>

<style lang="stylus">
.n22-example-child-input-item-2
  .n22-number-keyboard .n22-popup-box
    max-width 720px
</style>
