<template>
  <div class="n22-example-child n22-example-child-input-item-5">
    <n22-field>
      <n22-input-item
        type="phone"
        title="手机号码"
        value="1999999999999"
        error="手机号码无效"
        clearable
      ></n22-input-item>
      <n22-input-item
        type="bankCard"
        title="储蓄卡号"
        v-model="bankCardNo"
        :key="bankCardKey"
        clearable
      >
        <p
          v-if="isError"
          class="error"
          slot="error"
        >
          不支持当前银行<span class="error-action">查看支持银行</span>
        </p>
      </n22-input-item>
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
  data() {
    return {
      bankCardNo: '',
      bankCardKey: Date.now(),
      isError: false,
    }
  },
}

</script>

<style lang="stylus">
.n22-example-child-input-item-5
  .error
    float left
    width 100%
    .error-action
      float right
      color #5878B4
</style>
