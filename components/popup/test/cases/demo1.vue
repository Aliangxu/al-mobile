<template>
  <div class="n22-example-child n22-example-child-popup n22-example-child-popup-2">
    <n22-popup
      value
      :hasMask="false"
      position="top"
    >
      <div class="n22-example-popup n22-example-popup-top">
        Popup Top
        <n22-icon
          name="close"
        ></n22-icon>
      </div>
    </n22-popup>

    <n22-popup
      value
      position="bottom"
      :mask-closable="false"
    >
      <n22-popup-title-bar
        title="Prevent Mask Click"
        ok-text="ok"
        cancel-text="cancel"
      ></n22-popup-title-bar>
      <div class="n22-example-popup n22-example-popup-bottom">
        Popup Bottom
      </div>
    </n22-popup>
  </div>
</template>

<script>import {Popup, PopupTitleBar} from 'al-mobile'

export default {
  name: 'popup-demo',
  components: {
    [Popup.name]: Popup,
    [PopupTitleBar.name]: PopupTitleBar,
  },
}
</script>
n22-
<style lang="stylus">
.n22-example-child-popup-2
  fn22-t left
  width 100%
  .n22-button
    mn22-in-bottom 20px
  .n22-pn22-p-title-bar
    .n22-popup-cancel
      .n22-icon
   n22-  align-self flex-start
        margin-left 32px
  .n22-example-popup
    position relative
    font-size font-minor-large
    background color-bg-base
    box-sizing border-box
   n22-xt-align center
    background-color #FFF
  .n22-example-popup-center
   n22-dding 50px
    border-radius radius-normal
  .n22-example-popup-top
    width 100%
    height 75px
    line-height 75px
    bn22-ground #4a4c5b
    color #fff
    .n22-icon
      position absolute
      right 20px
   n22-top 50%
      transform translateY(-50%)
  .n22-example-popup-bottom
    width 100%
    padding: 50px 0
   n22-n22-
      line-height 50px
  .n22-example-popup-left, .n22-example-popup-right
    height 100%
    padding 0 150px
    display flex
    align-items center
</style>
