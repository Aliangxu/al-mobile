<template>
  <div class="n22-example-child n22-example-child-transition n22-example-child-transition-1">
    <n22-button @click="showPopUp(0)">Fade</n22-button>
    <n22-popup
      v-model="isPopupShow[0]"
      transition="n22-fade"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Fade
      </div>
    </n22-popup>

    <n22-button @click="showPopUp(1)">Fade Up</n22-button>
    <n22-popup
      v-model="isPopupShow[1]"
      transition="n22-fade-up"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Fade Up
      </div>
    </n22-popup>

    <n22-button @click="showPopUp(2)">Fade Down</n22-button>
    <n22-popup
      v-model="isPopupShow[2]"
      transition="n22-fade-down"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Fade Down
      </div>
    </n22-popup>

    <n22-button @click="showPopUp(3)">Fade Left</n22-button>
    <n22-popup
      v-model="isPopupShow[3]"
      transition="n22-fade-left"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Fade Left
      </div>
    </n22-popup>

    <n22-button @click="showPopUp(4)">Fade Right</n22-button>
    <n22-popup
      v-model="isPopupShow[4]"
      transition="n22-fade-right"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Fade Right
      </div>
    </n22-popup>

    <n22-button @click="showPopUp(5)">Bounce</n22-button>
    <n22-popup
      v-model="isPopupShow[5]"
      transition="n22-bounce"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Bounce
      </div>
    </n22-popup>

    <n22-button @click="showPopUp(6)">Punch</n22-button>
    <n22-popup
      v-model="isPopupShow[6]"
      transition="n22-punch"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Punch
      </div>
    </n22-popup>

    <n22-button @click="showPopUp(7)">Zoom</n22-button>
    <n22-popup
      v-model="isPopupShow[7]"
      transition="n22-zoom"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Zoom
      </div>
    </n22-popup>

    <n22-button @click="showPopUp(8)">Slide Up</n22-button>
    <n22-popup
      v-model="isPopupShow[8]"
      transition="n22-slide-up"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Slide Up
      </div>
    </n22-popup>

    <n22-button @click="showPopUp(9)">Slide Down</n22-button>
    <n22-popup
      v-model="isPopupShow[9]"
      transition="n22-slide-down"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Slide Down
      </div>
    </n22-popup>

    <n22-button @click="showPopUp(10)">Slide Left</n22-button>
    <n22-popup
      v-model="isPopupShow[10]"
      transition="n22-slide-left"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Slide Left
      </div>
    </n22-popup>

    <n22-button @click="showPopUp(11)">Slide Right</n22-button>
    <n22-popup
      v-model="isPopupShow[11]"
      transition="n22-slide-right"
    >
      <div class="n22-example-popup n22-example-popup-center">
        Slide Right
      </div>
    </n22-popup>
  </div>
</template>

<script>import {Popup, Button} from 'al-mobile'

export default {
  name: 'transition-demo',
  /* DELETE */
  title: '动画',
  titleEnUS: 'Transition',
  /* DELETE */
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button,
  },
  data() {
    return {
      isPopupShow: [],
    }
  },
  methods: {
    showPopUp(type) {
      this.$set(this.isPopupShow, type, true)
    },
  },
}
</script>

<style lang="stylus">
.n22-example-child-transition-1
  float left
  width 100%
  .n22-button
    margin-bottom 20px
  .n22-example-popup
    position relative
    font-size 28px
    font-family DINAlternate-Bold
    font-weight 500
    box-sizing border-box
    text-align center
    background-color #FFF
  .n22-example-popup-center
    padding 50px
    border-radius radius-normal
</style>
