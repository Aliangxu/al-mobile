<template>
  <span>
    <span v-if="animateType==1" class="n22-amount" :class="{numerical: !isCapital,'n22-amount-num':(amountNumSty&&formatValue!=0)}">
      <template v-if="!isCapital">{{ formatValue | doPrecision(legalPrecision, isRoundUp,zeroText) | doFormat(hasSeparator, separator) }}</template> <template v-else> {{ formatValue | doPrecision(4, isRoundUp,zeroText) | doCapital}} </template>
    </span>
    <transition-group v-if="animateType==2" :name="amountNumChangeType">
      <span
        v-for="item in items"
        v-bind:key="item"
        :class="{'number-item': true,'n22-amount-num':(amountNumSty)}"
      >
        {{ item | dealPrefix(zeroText,amountNumTemplate)}}
      </span>
    </transition-group>
  </span>
</template>

<script>
import {noop, inBrowser} from '../_util'
import Animate from '../_util/animate'
import {formatValueByGapStep} from '../_util/formate-value'
import numberCapital from './number-capital'

export default {
  name: 'n22-amount',

  filters: {
    dealPrefix(value, zeroText, amountNumTemplate) {
      if(zeroText&&(value==0||value=="0")){
        // console.log('%c this.zeroText','color:green;',zeroText);
        return zeroText
      }
      if(amountNumTemplate&&((value+"").length!=amountNumTemplate)){
        let num = amountNumTemplate-((value+"").length)
        let zeroString = ""
        for (let index = 0; index < num; index++) {
          zeroString="0"+zeroString
        } 
        return zeroString+value
      }else{
        return value
      }
    },
    doPrecision(value, precision, isRoundUp,zeroText) {
      if(zeroText&&value==0){
        // console.log('%c this.zeroText','color:green;',zeroText);
        return zeroText
      }
      const exponentialForm = Number(`${value}e${precision}`)
      const rounded = isRoundUp ? Math.round(exponentialForm) : Math.floor(exponentialForm)
      return Number(`${rounded}e-${precision}`).toFixed(precision)
    },
    doFormat(value, hasSeparator, separator) {
      if (!hasSeparator) {
        return value
      }

      const numberParts = value.split('.')
      const integerValue = numberParts[0]
      const decimalValue = numberParts[1] || ''
      const formateValue = formatValueByGapStep(3, integerValue, separator, 'right', 0, 1)
      return decimalValue ? `${formateValue.value}.${decimalValue}` : `${formateValue.value}`
    },
    doCapital(value) {
      return numberCapital(value)
    },
  },

  props: {
    value: {
      // type: Number,
      default: 0,
    },
    initNum: {
      type: Number,
      default: 100000,
    },
    zeroText: {
      type: String,
      default: "",
    },
    precision: {
      type: Number,
      default: 2,
    },
    isRoundUp: {
      type: Boolean,
      default: true,
    },
    hasSeparator: {
      type: Boolean,
      default: false,
    },
    separator: {
      type: String,
      default: ',',
    },
    isAnimated: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: Boolean,
      default: false,
    },
    isCapital: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 1000,
    },

    amountNumTemplate: {
      type: Number,
      default: 1,
    },

    animateType: {
      type: Number,
      default: 1,
    },
    amountNumChangeType: {
      type: String,
      default: "number-add",
    },

    amountNumSty: {
      type: Boolean,
      default: false,
    },
    zeroIsInit: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      items: [this.initNum],
      formatValue: 0,
      isMounted: false,
    }
  },
  activated(){
    // console.log('%c amount=>>>activated','color:green;',this.value);
    // const z = this.value
    // this.value = this.initNum
    // setTimeout(() => {
    //   this.value = z
    // }, 500)
  },

  watch: {
    value: {
      handler(val, oldVal) {
        let valnum = Number(val || '0')
        let oldValnum = Number(oldVal || '0')
        // console.log('%c valnum','color:green;',valnum);
        /* istanbul ignore if  */
        if (!inBrowser && !this.isMounted) {
          this.formatValue = valnum
          return
        }
        if (this.animateType===1&&(this.isAnimated || this.transition)) {
          this.$_doAnimateDisplay(oldValnum, valnum)
        } else if(this.animateType===2&&this.transition){
          this.items.splice(0, 1, valnum)
        } else {
          if(this.animateType===1){
            this.formatValue = valnum
          }else if(this.animateType===2){
            //this.items.splice(0, 1, valnum)
          }
        }
        // console.log('%c formatValue','color:green;',this.formatValue);
      },
      immediate: true,
    },
  },

  computed: {
    legalPrecision() {
      return this.precision > 0 ? this.precision : 0
    },
  },

  mounted() {
    this.isMounted = true
  },

  methods: {
    // MARK: private methods
    $_doAnimateDisplay(fromValue = 0, toValue = 0) {
        // console.log('%c fromValue','color:green;',fromValue);
        // console.log('%c toValue','color:green;',toValue);
      if (this.zeroIsInit&&toValue==0) {
        fromValue = this.initNum
      }
      /* istanbul ignore next  */
      const step = percent => {
        this.formatValue = fromValue + (toValue - fromValue) * percent
      }
      // console.log('%c formatValue---2','color:green;',this.formatValue);

      /* istanbul ignore next  */
      const verify = id => id
      Animate.start(step, verify, noop, this.duration)
    },
  },
}

</script>

<style lang="stylus" scoped>
.n22-amount{
  
}
.n22-amount-num{
  // color: #ffcf10;
  // font-size: 33px;
  // font-weight: 500;
  // text-shadow: 1px 1px 1px #deb306;
  color: #111a34;
  text-shadow: 1px 1px 1px #5d594a;
}
  

.number-item {
  transition: all 1s;
  display: inline-block;
}
//+加
.number-add-enter {
  opacity: 0;
  transform: translateY(20px);
}
.number-add-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
//-减
.number-subtract-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.number-subtract-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.number-add-leave-active, .number-subtract-leave-active {
  position: absolute;
}
</style>
