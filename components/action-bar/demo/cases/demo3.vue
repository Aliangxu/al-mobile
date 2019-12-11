<template>
  <div class="n22-example-child n22-example-child-action-bar n22-example-child-3">
    <n22-action-bar :actions="data" @click="onBtnClick">
      <span class="price">
        &yen;128.00<small>起</small>
      </span>
    </n22-action-bar>
  </div>
</template>

<script>
import {ActionBar, Dialog} from 'al-mobile'

export default {
  name: 'action-bar-demo',
  /* DELETE */
  title: '使用插槽',
  titleEnUS: 'With slot',
  height: 150,
  /* DELETE */
  components: {
    [ActionBar.name]: ActionBar,
  },
  data() {
    return {
      data: [
        {
          text: '主要按钮',
        },
      ],
    }
  },
  methods: {
    onBtnClick(event, action) {
      Dialog.alert({
        content: `${action.text}点击`,
      })
    },
  },
}

</script>

<style lang="stylus" scoped>
.price
  font-weight 500
  font-size 24px
  color #FF823A
  small
    margin-left 10px
    font-size 16px
    color #858B9C
</style>

