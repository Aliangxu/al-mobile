<template>
  <div class="n22-example-child n22-example-child-input-item-1">
    <n22-field>
      <n22-input-item
        ref="name"
        title="真实姓名"
        placeholder="投保人姓名"
        is-title-latent
        clearable
      ></n22-input-item>
      <n22-input-item
        ref="id"
        title="身份证号"
        placeholder="投保人身份证号"
        is-title-latent
        clearable
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

<style lang="stylus">
.n22-example-child-input-item-1
  .n22-field
    padding-bottom 40px
</style>
