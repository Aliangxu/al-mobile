<template>
  <div class="n22-example-child n22-example-child-cell-item n22-example-child-cell-item-2">
    <n22-field>
      <n22-cell-item title="交通银行(尾号3089)" brief="展示摘要描述" />
      <n22-cell-item title="招商银行(尾号2342)" brief="展示摘要描述">
        <n22-switch v-model="open" slot="right" />
      </n22-cell-item>
      <n22-cell-item title="交通银行(尾号3089)" brief="展示摘要描述" addon="附加文案" arrow />
      <n22-cell-item title="交通银行" brief="展示摘要描述" addon="附加文案" arrow>
        <span class="holder" slot="left"></span>
      </n22-cell-item>
      <n22-cell-item title="招商银行" brief="展示摘要描述" addon="禁用的项目" disabled arrow>
        <span class="holder" slot="left"></span>
      </n22-cell-item>
      <n22-cell-item title="Mand Mobile" brief="A mobile UI toolkit" arrow>
        <p slot="children" style="font-size:0.12rem;color:#858B9C;">
          面向金融场景的Vue移动端UI组件库，丰富、灵活、实用，快速搭建优质的金融类产品，让复杂的金融场景变简单。基于「合理、好用」设计价值观，从交互操作、视觉抽象、图形可视等角度共同解决问题。
        </p>
      </n22-cell-item>
    </n22-field>
  </div>
</template>

<script>import {Field, CellItem, Switch} from 'al-mobile'

export default {
  name: 'cell-item-demo',
  /* DELETE */
  title: '多行列表',
  titleEnUS: 'Content List',
  align: 'right',
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
  width 44px
  height 44px
  border-radius 22px
  background-color #E6E6E6
</style>
