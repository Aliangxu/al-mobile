<template>
  <div class="n22-cashier-channel">
    <div class="choose-text">
      <p class="choose-title" v-if="paymentTitle" v-html="paymentTitle"></p>
      <p class="choose-number" v-if="paymentAmount" v-html="paymentAmount"></p>
      <p class="choose-describe" v-if="paymentDescribe" v-html="paymentDescribe"></p>
    </div>
    <div class="choose-channel" :class="{active: isChannelActive}">
      <slot></slot>
      <div class="choose-channel-list" v-if="isChannelShow || isSingle">
        <template v-for="(item, index) in channels">
          <n22-cashier-channel-item
            :class="{default: index === defaultIndex}"
            :key="index"
            :data="item"
            :active="index === activeChannelIndex"
            @click.native="$_onChannelItemClick(item, index)"
          />
        </template>
      </div>
      <div class="choose-channel-list" v-else-if="channels[defaultIndex]">
        <n22-cashier-channel-item
          class="default"
          :data="channels[defaultIndex]"
          active
          @click.native="$_onChannelItemClick(channels[defaultIndex], defaultIndex)"
        />
      </div>
      <div
        v-if="!isSingle"
        class="choose-channel-more"
        :class="{disabled: isChannelActive}"
        v-html="moreButtonText"
        @click="$_onChannelMoreClick"
      ></div>
    </div>
    <div class="n22-cashier-block-btn">
      <n22-button
        class="n22-cashier-pay-button"
        :type="payButtonDisabled ? 'disabled': 'primary'"
        @click="$_onChannelBtnClick"
      >
        <slot name="button">{{ payButtonText }}</slot>
      </n22-button>
    </div>
  </div>
</template>

<script>import Button from '../button'
// import Icon from '../icon'
import ChannelItem from './channel-item'

export default {
  name: 'n22-cashier-channel',

  components: {
    [Button.name]: Button,
    // [Icon.name]: Icon,
    [ChannelItem.name]: ChannelItem,
  },

  props: [
    'paymentTitle',
    'paymentAmount',
    'paymentDescribe',
    'moreButtonText',
    'payButtonText',
    'payButtonDisabled',
    'channels',
    'channelLimit',
    'defaultIndex',
  ],

  data() {
    return {
      isChannelShow: false,
      isChannelActive: false,
      activeChannelIndex: -1,
    }
  },

  created() {
    // console.log(this.$listeners.select)
    this.activeChannelIndex = this.defaultIndex
  },

  computed: {
    isSingle() {
      if (this.channelLimit < 1) {
        return true
      }
      return !(this.channels.length > this.channelLimit)
    },
  },

  watch: {
    defaultIndex(val) {
      this.activeChannelIndex = val
    },
  },

  methods: {
    $_onChannelItemClick(item, index) {
      if (item.disabled) {
        return
      }
      this.activeChannelIndex = index
      this.$emit('select', item)
    },
    $_onChannelMoreClick() {
      if (this.isChannelActive) {
        return
      }
      this.isChannelShow = true
      this.$nextTick(() => {
        this.isChannelActive = true
      })
    },
    $_onChannelBtnClick() {
      const item = this.channels[this.activeChannelIndex]
      this.$emit('pay', item)
    },
  },
}
</script>

<style lang="stylus">
.n22-cashier-channel
  .choose-text
    clearfix()
    position relative
    padding 32.5px 0 12.5px
    hairline(bottom, color-border-minor)
    p
      block()
      text-align center
      &.choose-title
        font-size cashier-choose-title-font-size
        color cashier-choose-title-color
      &.choose-number
        margin-top 10px
        margin-bottom 2px
        font-size cashier-choose-amount-font-size
        font-family font-family-number
        color cashier-choose-amount-color
        letter-spacing -2px
      &.choose-describe
        font-size cashier-choose-describe-font-size
        color cashier-choose-describe-color
  .choose-channel
    clearfix()
    max-height 250px
    padding 20px 30px
    box-sizing border-box
    overflow auto
    .choose-channel-list
      clearfix()
      // max-height 64px
      transition all .5s ease-in
      overflow hidden
      
    .choose-channel-more
      margin-top 10px
      font-size cashier-choose-more-font-size
      color cashier-choose-more-color
      text-align center
      &:after
        content ""
        position relative
        top 10px
        width 0
        height 0
        margin-left 5px
        border-left solid 4px transparent
        border-right solid 4px transparent
        border-top solid 4px color-text-caption
      &.disabled
        visibility hidden
    &.active
      .choose-channel-list .choose-channel-item
        display block
      .choose-channel-list
        max-height 500px !important
</style>
