<template>
  <div class="n22-example-child n22-example-child-popup n22-example-child-popup-2">
    <n22-button @click="showPopUp('top')">无遮罩层</n22-button>
    <n22-popup
      v-model="isPopupShow.top"
      :hasMask="false"
      position="top"
    >
      <div class="n22-example-popup n22-example-popup-top">
        Popup Top
        <n22-icon
          name="close"
          @click.native="hidePopUp('top')"
        ></n22-icon>
      </div>
    </n22-popup>

    <n22-button @click="showPopUp('mask')">禁用遮罩层点击</n22-button>
    <n22-popup
      v-model="isPopupShow.mask"
      position="bottom"
      :mask-closable="false"
    >
      <n22-popup-title-bar
        title="Prevent Mask Click"
        ok-text="ok"
        cancel-text="cancel"
        @confirm="hidePopUp('mask')"
        @cancel="hidePopUp('mask')"
      ></n22-popup-title-bar>
      <div class="n22-example-popup n22-example-popup-bottom">
        Popup Bottom
      </div>
    </n22-popup>
  </div>
</template>

<script>
import {Popup, PopupTitleBar, Button, Icon} from 'al-mobile'

export default {
  name: 'popup-demo',
  /* DELETE */
  title: '其他配置',
  titleEnUS: 'Other configurations',
  /* DELETE */
  components: {
    [Popup.name]: Popup,
    [PopupTitleBar.name]: PopupTitleBar,
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  data() {
    return {
      isPopupShow: {},
    }
  },
  methods: {
    showPopUp(type) {
      this.$set(this.isPopupShow, type, true)
    },
    hidePopUp(type) {
      this.$set(this.isPopupShow, type, false)
    },
  },
}

</script>

<style lang="stylus">
.n22-example-child-popup-2
  float left
  width 100%
  .n22-button
    margin-bottom 20px
  .n22-popup-title-bar
    .n22-popup-cancel
      .n22-icon
        align-self flex-start
        margin-left 32px
  .n22-example-popup
    position relative
    font-size font-minor-large
    background color-bg-base
    box-sizing border-box
    text-align center
    background-color #FFF
  .n22-example-popup-center
    padding 50px
    border-radius radius-normal
  .n22-example-popup-top
    width 100%
    height 75px
    line-height 75px
    background #4a4c5b
    color #fff
    .n22-icon
      position absolute
      right 20px
      top 50%
      transform translateY(-50%)
  .n22-example-popup-bottom
    width 100%
    padding: 50px 0
    p
      line-height 50px
  .n22-example-popup-left, .n22-example-popup-right
    height 100%
    padding 0 150px
    display flex
    align-items center
</style>
