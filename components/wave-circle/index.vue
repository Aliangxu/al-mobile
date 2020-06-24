<template>
  <div>
    <div v-if="!isLoadCircle" class="n22_wave_circle">
      <div class="circle_title">
        <div class="circleTitleeclass" :style="circleTitleestyle">
          <!-- {{defaultNum}} -->
          <n22-amount
            :precision="precision"
            :value="defaultNum"
            :duration="800"
            transition
          ></n22-amount>
        </div>
        <div class="circleTitleeclassd" :style="circleTitleestyled">
          {{circleTitle}}
        </div>
      </div>
      <div class="container">
        <!-- <transition name="n22-base-slide-up"> -->
        <div ref="wave" class="wave"></div>
        <!-- </transition> -->
      </div>
    </div>
    <div v-else class="n22_wave_circle_c">
      <n22-progress
        :value="value / totalNum"
        :width="widthC"
        :size="sizeC"
        :rotate="-90"
        :color="value>=boundary?boundaryUpColor:boundaryDownColor"
        border-color="#98D1FE"
        transition
      >
        <span class="progress-value">
          <div class="circle_title_c">
            <div class="circleTitleeclass" :style="circleTitleestyle">
              <!-- {{defaultNum}} -->
              <n22-amount
                :precision="precision"
                :value="defaultNum"
                :duration="800"
                transition
              ></n22-amount>
            </div>
            <div class="circleTitleeclassd" :style="circleTitleestyled">
              {{circleTitle}}
            </div>
          </div>
        </span>
      </n22-progress>
    </div>
  </div>
</template>

<script>
import Amount from '../amount'
import Progress from '../progress'
import {ui, isType} from '../_util'

export default {
  name: 'n22-wave-circle',
  data() {
    return {
      size: ui.screenWidthR(this.sizeC, 3) || 185,
      width: ui.screenWidthR(this.widthC, 3) || 12,
      circleOnOff: true,
      offset: 20, // 去除水波纹上升的偏移量，保证计算值是从0-100计算
      offsetRate: 0.45,
      defaultNum: 0,
      circleWater: false,
      marginTop: 0,
      circleTitleestyle: {color: this.boundaryDownColor},
      circleTitleestyled: {color: this.boundaryDownColor},
    }
  },
  components: {
    [Amount.name]: Amount,
    [Progress.name]: Progress,
  },
  mounted() {
    this.init()
  },
  props: {
    // 1
    value: {
      type: Number,
      default: 50,
    },
    precision: {
      type: Number,
      default: 0,
    },
    boundaryUpColor: {
      type: String,
      default: '#FFFFFF',
    },
    boundaryDownColor: {
      type: String,
      default: '#FFFFFF',
    },
    circleTitle: {
      type: String,
      default: '',
    },
    boundary: {
      type: Number,
      default: 60,
    },
    totalNum: {
      type: Number,
      default: 100,
    },
    isLoadCircle: {
      type: Boolean,
      default: false,
    },
    sizeC: {
      type: Number,
      default: 185,
    },
    widthC: {
      type: Number,
      default: 12,
    },
  },
  computed: {},
  watch: {
    value(newvalue, oldvalue) {
      // eslint-disable-next-line
      if (newvalue != oldvalue) {
        // console.log('%c value','color:green;',this.value);
        setTimeout(() => {
          if (this.circleOnOff) {
            this.init()
          }
          this.circleOnOff = false
        }, 700)
      }
    },
  },
  methods: {
    init() {
      if (isType('Number', this.value) && this.value >= 0 && this.value / this.totalNum <= 1) {
        // console.log('%c this.num值正常，当前值为','color:green;',this.value)
        // eslint-disable-next-line
        if (String(this.value).indexOf('.') > -1 && this.precision == 0) {
          // this.value = parseInt(String(this.value))
        }
      } else {
        console.log(
          '%c this.num值异常，num/totalNum应为0-1的整数，当前值为',
          'color:green;',
          this.value + '>>>>>>>>' + this.value / this.totalNum,
        )
        return
      }
      // 1
      if (!this.isLoadCircle) {
        let marginTop = 0
        let _this = this
        // 运行水波动画定时器--每10ms刷新一次，top值加一，top满值为200即num值为100
        var clearInt = setInterval(function() {
          try {
            if (marginTop >= 0 && marginTop / _this.totalNum <= 1) {
              // if(marginTop%2==0){
              // console.log('%c defaultNum增加','color:green;',_this.defaultNum);
              _this.defaultNum = marginTop
              // }
              if (marginTop >= _this.boundary) {
                _this.circleTitleestyle.color = _this.boundaryUpColor
                _this.circleTitleestyled.color = _this.boundaryUpColor
              } else {
                _this.circleTitleestyle.color = _this.boundaryDownColor
                _this.circleTitleestyled.color = _this.boundaryDownColor
              }
              // eslint-disable-next-line
              if (marginTop / this.totalNum == 1) {
                _this.offset = 10
                // eslint-disable-next-line
              } else if (marginTop == 0) {
                _this.offset = -10
              } else {
                _this.offset = 0
              }
              _this.$refs.wave.style.marginTop =
                '-' + (marginTop / (_this.totalNum / 100) * _this.offsetRate + _this.offset) + 'vw'
              // console.log('%c marginTop','color:green;',marginTop);
              // eslint-disable-next-line
              if (marginTop == _this.value) {
                clearInterval(clearInt)
                _this.circleOnOff = true
              }
              marginTop++
            } else {
              console.log('%c 超出范围', 'color:green;', marginTop)
              clearInterval(clearInt)
            }
          } catch (error) {
            console.log('%c error', 'color:red;', error)
            clearInterval(clearInt)
          }
        }, 10)
      } else {
        // 2
        let marginTop = 0
        let _this = this
        // eslint-disable-next-line
        var clearInt = setInterval(function() {
          try {
            _this.defaultNum = marginTop
            if (marginTop >= _this.boundary) {
              _this.circleTitleestyle.color = _this.boundaryUpColor
              _this.circleTitleestyled.color = _this.boundaryUpColor
            } else {
              _this.circleTitleestyle.color = _this.boundaryDownColor
              _this.circleTitleestyled.color = _this.boundaryDownColor
            }
            // eslint-disable-next-line
            if (marginTop == _this.value) {
              clearInterval(clearInt)
              _this.circleOnOff = true
            }
            marginTop++
          } catch (error) {
            console.log('%c error', 'color:red;', error)
            clearInterval(clearInt)
          }
        }, 10)
      }
    },
  },
}

</script>

<style lang="stylus" scoped>
.n22_wave_circle {
  width: 185px;
  height: 185px;
}
.circleTitleeclass {
  font-size: 60px;
}
.circleTitleeclassd {
  font-size: 15px;
}
.circle_title {
  padding-top: 55px;
  left: 95px;
  position: relative;
  text-align: center;
  z-index: 30;
}
.circle_title_c {
  text-align: center;
}
.container {
  position: absolute;
  width: 185px;
  height: 185px;
  padding: 5px;
  border: 12px solid #d9e9fe;
  top: 92.5px;
  left: 187.5px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
}
.wave {
  position: relative;
  width: 185px;
  height: 185px;
  background-color: #4091fb;
  // border-radius: 50%;
  margin-left: -27px;
  margin-top: 0;
  height: 600px;
  width: 215px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    margin-top: 50px;
    width: 390px;
    height: 400px;
    top: 0;
    left: 99px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 45%;
    transform: translate(-50%, -70%) rotate(0);
    animation: rotate 4s linear infinite;
    z-index: 20;
  }

  &::after {
    border-radius: 47%;
    background-color: rgba(255, 255, 255, 0.9);
    transform: translate(-50%, -70%) rotate(0);
    animation: rotate 6s linear -3s infinite;
    z-index: 10;
  }
}

@keyframes rotate {
  50% {
    transform: translate(-50%, -73%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}
</style>
