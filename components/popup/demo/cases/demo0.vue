<template>
  <div class="n22-example-child n22-example-child-popup n22-example-child-popup-0">
    <n22-button @click="showPopUp('center')">屏幕中弹出</n22-button>
    <n22-popup v-model="isPopupShow.center">
      <div class="n22-example-popup n22-example-popup-center">
        Popup Center
      </div>
    </n22-popup>

    <n22-button @click="showPopUp('bottom')">底部弹出</n22-button>
    <n22-popup
      v-model="isPopupShow.bottom"
      position="bottom"
    >
      <n22-popup-title-bar
        title="Popup Title"
        describe="Popup Description"
        ok-text="ok"
        cancel-text="cancel"
        @confirm="hidePopUp('bottom')"
        @cancel="hidePopUp('bottom')"
      ></n22-popup-title-bar>
      <div class="n22-example-popup n22-example-popup-bottom">
        Popup Bottom
      </div>
    </n22-popup>

    <n22-button @click="showPopUp('top')">顶部弹出</n22-button>
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

    <n22-button @click="showPopUp('left')">左侧弹出</n22-button>
    <n22-popup
      v-model="isPopupShow.left"
      position="left"
    >
      <div class="n22-example-popup n22-example-popup-left">
        Popup Left
      </div>
    </n22-popup>

    <n22-button @click="showPopUp('right')">右侧弹出</n22-button>
    <n22-popup
      v-model="isPopupShow.right"
      position="right"
    >
      <div class="n22-example-popup n22-example-popup-right">
        Popup Right
      </div>
    </n22-popup>
  </div>
</template>

<script>
import {Popup, PopupTitleBar, Button, Icon} from 'al-mobile'

export default {
  name: 'popup-demo',
  /* DELETE */
  title: '不同位置',
  titleEnUS: 'Different positions',
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
.n22-example-child-popup-0
  float left
  width 100%
  .n22-button
    margin-bottom 20px
  .n22-example-popup
    position relative
    font-size 28px
    font-family DINPro
    font-weight 500
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
    padding 100px 0
    p
      line-height 50px
  .n22-example-popup-left, .n22-example-popup-right
    height 100%
    padding 0 150px
    display flex
    align-items center
</style>
