<template>
  <div class="n22-example-child n22-example-child-cell-item n22-example-child-cell-item-1">
    <n22-field>
      <n22-cell-item title="余额" addon="可用8000.34" arrow />
      <n22-cell-item title="余额" addon="可用8000.34" />
      <n22-cell-item title="使用余额">
        <n22-switch slot="right" v-model="open" />
      </n22-cell-item>
      <n22-cell-item title="使用余额" disabled>
        <n22-switch slot="right" :value="true" disabled/>
      </n22-cell-item>
      <n22-cell-item title="余额" addon="可用8000.34" arrow no-border>
        <div class="holder" slot="left"></div>
      </n22-cell-item>
    </n22-field>
  </div>
</template>

<script>import {Field, CellItem, Switch} from 'al-mobile'

export default {
  name: 'cell-item-demo',
  /* DELETE */
  title: '单行列表',
  titleEnUS: 'Simple List',
  align: 'left',
  /* DELETE */
  components: {
    [Field.name]: Field,
    [CellItem.name]: CellItem,
    [Switch.name]: Switch,
  },
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style lang="stylus" scoped>
.holder
  display block
  width 24px
  height 24px
  background-color #E6E6E6
</style>
