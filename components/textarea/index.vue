<template>
  <div
    :style="{
      fontSize: fontSizeVW,
      lineHeight: lineHeightVW,
      height: fullHeight ? (rows ? '' : maxHeightVW) : 'auto'
    }"
    class="auto-textarea-wrapper"
  >
    <pre
      :style="{
        fontSize: fontSizeVW,
        lineHeight: lineHeightVW,
        minHeight: fullHeight ? maxHeightVW : 'auto',
        maxHeight: fullHeight ? maxHeightVW : 'auto'
      }"
      class="auto-textarea-block"
    ><br>{{temp_value}} </pre>
    <textarea
      ref="vTextarea"
      :maxlength="maxLength"
      :row="rows"
      :autofocus="s_autofocus"
      @keyup="change"
      spellcheck="false"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="temp_value"
      style="overflow: auto"
      :style="{
        fontSize: fontSizeVW,
        lineHeight: lineHeightVW,
        maxHeight: maxHeightVW
      }"
      :class="{ 'no-border': !border, 'no-resize': !resize }"
      class="auto-textarea-input"
    ></textarea>
  </div>
</template>

<script>
import {ui} from '../_util'
export default {
  name: 'n22-textarea',
  data() {
    return {
      fontSizeVW: ui.dealPxToVw(this.fontSize,true),
      lineHeightVW: ui.dealPxToVw(this.lineHeight,true),
      maxHeightVW: ui.dealPxToVw(this.maxHeight,true),
      temp_value: this.value,
      s_autofocus: (() => {
        if (this.autofocus) {
          return 'autofocus'
        } else {
          null
        }
      })(),
    }
  },
  created() {},
  props: {
    fullHeight: {
      type: Boolean,
      default: true,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    resize: {
      type: Boolean,
      default: false,
    },
    onchange: {
      type: Function,
      default: null,
    },
    fontSize: {
      type: Number,
      default: 14,
    },
    lineHeight: {
      type: Number,
      default: 20,
    },
    maxHeight: {
      type: Number,
      default: 160,
    },
    maxLength: {
      type: [String, Number],
      default: '',
    },
    rows: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    change($event) {
      if (this.onchange) {
        this.onchange(this.temp_value, $event)
      }
    },
  },
  watch: {
    value: function(val) {
      this.temp_value = val
    },
    temp_value: function(val) {
      this.$emit('input', val)
    },
  },
}

</script>
<style lang="stylus">
.auto-textarea-wrapper {
    margin 10px;
    position: relative;
    // width: 100%;
    // margin: 0;
    padding: 0;
    line-height: normal;

    .auto-textarea-block {
        display: block;
        white-space: pre-wrap;
        word-wrap: break-word !important;
        visibility: hidden;
        overflow: hidden;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 100%;
    }

    .auto-textarea-input {
        font-family: Menlo, 'Ubuntu Mono', Consolas, 'Courier New', 'Microsoft Yahei', 'Hiragino Sans GB', 'WenQuanYi Micro Hei', sans-serif;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        overflow-y: hidden;
        color: #2C3E50;

        &.no-border {
            outline: 0 none;
            border: none !important;
        }

        &.no-resize {
            resize: none;
        }
    }
}
</style>
