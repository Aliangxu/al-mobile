<template>
  <div class="n22-example-child n22-example-child-tip n22-example-child-tip-4">
    <n22-tip
      name="n22-tip-4"
      icon="security"
      content="完善信息，领取5元免息券"
      :offset="{top: -10}"
      fill
      @show="onShow"
      @hide="onHide"
    >
      <n22-button type="default">点击我</n22-button>
    </n22-tip>
  </div>
</template>

<script>
import {Tip, Button, Toast} from 'al-mobile'
export default {
  name: 'tips-demo',
  /* DELETE */
  title: '其他配置',
  titleEnUS: 'Other configurations',
  /* DELETE */
  components: {
    [Tip.name]: Tip,
    [Button.name]: Button,
  },
  methods: {
    onShow(name) {
      Toast({
        content: `显示了${name}`,
      })
    },
    onHide(name) {
      Toast({
        content: `隐藏了${name}`,
      })
    },
  },
}

</script>

<style lang="stylus">
.n22-tip-4
  .n22-tip-bg
    background-color #FFEBDF
    &:after
      border-width 10px 11px 0 11px
      border-color #FFEBDF transparent transparent transparent
  .n22-tip-content
    padding-left 80px
    color #C37447
    .n22-icon-security
      position absolute
      left 32px
      width 64px !important
      height 64px !important
  .n22-tip-bg
    box-shadow none
    opacity 1
</style>

