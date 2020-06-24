<template>
  <div
    class="n22-example-child n22-example-child-wave-circle n22-example-child-wave-circle-0"
  >
    <div class="title">
      <div>当前数值num：{{ num }}</div>
      <div>最大totalNum：{{ totalNum }}</div>
      <div>分界线boundary：{{ boundary }}</div>
      <p>尝试下拉更新数值</p>
    </div>
    <div class="wave-circle-demo">
      <n22-wave-circle
        boundaryDownColor="red"
        v-model="num"
        :totalNum="totalNum"
        :boundary="boundary"
        circle-title="当前考试得分"
        ref="waveCircle"
      ></n22-wave-circle>
    </div>
    <br />
    <div class="wave-circle-demo_c">
      <n22-wave-circle
        v-model="num"
        :widthC="widthC"
        :sizeC="sizeC"
        :totalNum="totalNum"
        :boundary="boundary"
        circle-title="当前考试得分"
        isLoadCircle
        boundaryDownColor="red"
        ref="waveCircle"
      >
      </n22-wave-circle>
    </div>
  </div>
</template>

<script>
import {WaveCircle} from 'al-mobile'

export default {
  name: 'wave-circle-demo',
  title: '水纹球',
  titleEnUS: 'wave circle',
  message: '请在移动设备中扫码预览',
  messageEnUS: 'Please scan QR code and preview on mobile device',
  components: {
    [WaveCircle.name]: WaveCircle,
  },
  data() {
    return {
      sizeC: 185,
      widthC: 12,
      headBottom: true,
      num: 0,
      totalNum: 200,
      boundary: 90,
    }
  },
  mounted() {
    let _this = this
    setTimeout(() => {
      _this.num = 180
    }, 2000)
  },
  methods: {
    upRefreshFun() {
      let _this = this
      // _this.num = 0;
      // setTimeout(() => {
      _this.num = parseInt(Math.random() * 100)
      // }, 2000);
    },
  },
}

</script>
<style lang="stylus" scoped>
.n22-example-child-wave-circle
  .title
    font-size 16px
    >div:nth-child(1)
      color green
    >div:nth-child(2)
      color red
    >div:nth-child(3)
      color blue
  .wave-circle-demo
    margin-top 34px
    position relative
  >>>.container
    left: 1.675rem;
  >>>.circle_title
    left: .75rem;
  >>>.wave
    margin-left: -.17rem
    height 1000px
  >>>.n22_wave_circle_c
    margin-left 75px;
  .wave-circle-demo_c
    background-color #32A2FC;
</style>
