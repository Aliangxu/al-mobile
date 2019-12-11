<template>
  <div class="n22-cashier">
    <n22-popup
      v-model="isCashierShow"
      position="bottom"
      :mask-closable="false"
      prevent-scroll-exclude=".choose-channel"
      prevent-scroll
      @show="$_onPopupShow"
      @hide="$_onPopupHide"
    >
      <n22-popup-title-bar
        :title="title"
        :describe="describe"
        @cancel="$_onPopupCancel"
      >
        <n22-icon name="close" size="lg" slot="cancel"></n22-icon>
      </n22-popup-title-bar>
      <div class="n22-cashier-container">
        <slot name="header" :scene="scene"></slot>

        <!-- Choose pay channel -->
        <div
          v-if="scene === 'choose'"
          class="n22-cashier-block n22-cashier-choose"
          :key="sceneKey">
          <n22-cashier-channel
            ref="channel"
            :payment-title="paymentTitle"
            :payment-amount="paymentAmount"
            :payment-describe="paymentDescribe"
            :more-button-text="moreButtonText"
            :pay-button-text="payButtonText"
            :pay-button-disabled="payButtonDisabled"
            :channels="channels"
            :channelLimit="channelLimit"
            :default-index="defaultIndex"
            v-on="$listeners"
          >
            <slot name="channel"></slot>
            <template slot="button">
              <slot name="payButton"></slot>
            </template>
          </n22-cashier-channel>
        </div>

        <!-- Captcha -->
        <div
          v-else-if="scene === 'captcha'"
          class="n22-cashier-block n22-cashier-captcha"
          :key="sceneKey">
          <n22-captcha
            ref="captcha"
            :maxlength="sceneOption.captcha.maxlength"
            :count="sceneOption.captcha.count"
            :countNormalText="sceneOption.captcha.countNormalText"
            :countActiveText="sceneOption.captcha.countActiveText"
            :auto-countdown="sceneOption.captcha.autoCountdown"
            :brief="sceneOption.captcha.brief"
            is-view
            @send="sceneOption.captcha.onSend"
            @submit="sceneOption.captcha.onSubmit"
          >
            <div v-text="sceneOption.captcha.text"></div>
          </n22-captcha>
        </div>

        <!-- Loaing, Success -->
        <div
          v-else-if="scene === 'loading' || scene === 'success'"
          class="n22-cashier-block"
          :class="{
            'n22-cashier-loading': scene === 'loading',
            'n22-cashier-success': scene === 'success'
          }"
          :key="sceneKey">
          <div class="n22-cashier-block-icon">
            <n22-activity-indicator-rolling-success
              ref="rolling"
              :is-success="scene === 'success'"
            ></n22-activity-indicator-rolling-success>
          </div>
          <div class="n22-cashier-block-text">{{ scene === 'success' ? sceneOption.success.text : sceneOption.loading.text }}</div>
          <n22-cashier-channel-button
            v-if="scene === 'success'"
            :actions="
              sceneOption.success.actions ||
              [{
                buttonText: sceneOption.success.buttonText,
                handler: sceneOption.success.handler
              }]
            "
          />
        </div>

        <!-- Fail -->
        <div
          v-else-if="scene === 'fail'"
          class="n22-cashier-block n22-cashier-fail"
          :key="sceneKey">
          <div class="n22-cashier-block-icon">
            <n22-icon name="warn-color"></n22-icon>
          </div>
          <div class="n22-cashier-block-text" v-text="sceneOption.fail.text"></div>
          <n22-cashier-channel-button
            :actions="
              sceneOption.fail.actions ||
              [{
                buttonText: sceneOption.fail.buttonText,
                handler: sceneOption.fail.handler
              }]
            "
          />
        </div>

        <!-- Custom -->
        <div
          v-else-if="scene === 'custom'"
          class="n22-cashier-block n22-cashier-custom"
          :key="sceneKey">
          <slot name="scene"></slot>
        </div>

        <slot name="footer" :scene="scene"></slot>
      </div>
    </n22-popup>
  </div>
</template>

<script>
import Popup from '../popup'
import PopupTitlebar from '../popup/title-bar'
import popupMixin from '../popup/mixins'
import popupTitleBarMixin from '../popup/mixins/title-bar'
import Captcha from '../captcha'
import Icon from '../icon'
import RollerSuccess from '../activity-indicator/roller-success'
import {noop, extend} from '../_util'
import Channel from './channel'
import ChannelButton from './channel-button'

export default {
  name: 'n22-cashier',

  mixins: [popupMixin, popupTitleBarMixin],

  components: {
    [Popup.name]: Popup,
    [PopupTitlebar.name]: PopupTitlebar,
    [Captcha.name]: Captcha,
    [Icon.name]: Icon,
    [RollerSuccess.name]: RollerSuccess,
    [Channel.name]: Channel,
    [ChannelButton.name]: ChannelButton,
  },

  props: {
    channels: {
      type: Array,
      default() {
        return []
      },
    },
    channelLimit: {
      type: Number,
      default: 2,
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    paymentTitle: {
      type: String,
      default: '\u652f\u4ed8\u91d1\u989d\u0028\u5143\u0029', // 支付金额
    },
    paymentAmount: {
      type: String,
      default: '0.00',
    },
    paymentDescribe: {
      type: String,
      default: '',
    },
    payButtonText: {
      type: String,
      default: '\u786e\u5b9a\u652f\u4ed8', // 确定支付
    },
    loadingText: {
      type: String,
      default: '\u652f\u4ed8\u7ed3\u679c\u67e5\u8be2\u4e2d\u002e\u002e\u002e', // 支付结果查询中...
    },
    payButtonDisabled: {
      type: Boolean,
      default: false,
    },
    moreButtonText: {
      type: String,
      default: '\u66f4\u591a\u652f\u4ed8\u65b9\u5f0f', // 更多支付方式
    },
    title: {
      default: '\u652f\u4ed8', // 支付
    },

    // Mixin Props
    // value: {
    //   type: Boolean,
    //   default: false,
    // },
    // describe: {
    //   type: String,
    //   default: '',
    // },
  },

  data() {
    return {
      isCashierShow: false,
      scene: 'choose', // choose, captcha, loading, success, fail
      sceneKey: Date.now(),
      sceneOption: {
        loading: {
          text: this.loadingText, // 支付结果查询中...
        },
        success: {
          text: '\u652f\u4ed8\u6210\u529f', // 支付成功
          buttonText: '\u6211\u77e5\u9053\u4e86', // 我知道了
          handler: null,
        },
        fail: {
          text: '\u652f\u4ed8\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5', // 支付失败，请稍后重试
          buttonText: '\u6211\u77e5\u9053\u4e86', // 我知道了
          handler: null,
        },
        captcha: {
          text: '',
          brief: '',
          maxlength: 4,
          count: 60,
          autoCountdown: true,
          onSend: noop,
          onSubmit: noop,
        },
      },
    }
  },

  watch: {
    value(val) {
      this.isCashierShow = val
    },
    isCashierShow(val) {
      this.$emit('input', val)
    },
  },

  created() {
    this.$_initialCashier()

    if (this.channels.length < 3) {
      this.isChannelShow = true
      this.isChannelActive = true
    }
  },

  methods: {
    // MARK: private methods
    $_initialCashier() {
      this.isCashierShow = this.value
    },
    $_resetCashier() {
      this.scene = 'choose'
      this.isChannelShow = false
      this.isChannelActive = false
    },
    // MARK: events handler, 如 $_onButtonClick
    $_onPopupShow() {
      this.$emit('show')
    },
    $_onPopupHide() {
      this.$_resetCashier()
      this.$emit('hide')
    },
    $_onPopupCancel() {
      this.isCashierShow = false
      this.$emit('cancel')
    },

    // MARK: public methods
    next(scene, option = {}) {
      if (this.sceneOption[scene]) {
        extend(this.sceneOption[scene], option)
      }
      this.scene = scene
      this.sceneKey = Date.now()
    },
  },
}

</script>

<style lang="stylus">
.n22-cashier
  .n22-popup-title-bar .n22-popup-cancel
    .n22-icon
      align-self flex-start
      margin-left h-gap-lg
  .n22-popup-box
    background-color color-bg-inverse
    border-radius popup-title-bar-radius popup-title-bar-radius 0 0
  .n22-cashier-container
    block()
    position relative
    background cashier-bg
    -webkit-touch-callout none
    -webkit-user-select none
    transition all .3s
    overflow hidden
    .n22-cashier-block
      clearfix()
      .n22-cashier-block-icon
        position relative
        left 50%
        float left
        width 50px
        height 50px
        margin-top 37px
        transform translateX(-50%)
        .n22-activity-indicator-svg
          width 50px !important
          height 50px !important
      .n22-cashier-block-text
        block()
        margin-top 10px
        margin-bottom 90px
        font-size font-minor-large
        color color-text-minor
        text-align center
      .n22-cashier-block-btn
        block()
        padding 0 20px 20px
        box-sizing border-box
      // &.n22-cashier-choose
        
      &.n22-cashier-captcha
        .n22-captcha
          block()
        .n22-captcha-content
          margin-top 22px
          margin-bottom 10px
          color color-text-caption
        .n22-codebox
          margin-bottom 13px
        .n22-captcha-content,
        .n22-captcha-message,
        .n22-codebox,
        .n22-captcha-footer
          margin-left 20px
          margin-right 20px
        .n22-captcha-footer
          margin-bottom 22px

      &.n22-cashier-fail
        .n22-cashier-block-icon
          position relative
          text-align center
          line-height 50px
          .n22-icon-warn-color
            position relative
            z-index 2
            color #FFF6F1
            width 50px
            height 50px
</style>
