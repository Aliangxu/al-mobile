<template>
  <div
    class="n22-field-item"
    :class="[
      solid ? 'is-solid' : '',
      currentDisabled ? 'is-disabled' : '',
      alignRight ? 'is-align-right' : '',
      inputEnv
    ]"
    @click="$_onClick"
  >
    <div
      :class="[
        isLinefeed
          ? 'n22-field-item-content-Linefeed'
          : 'n22-field-item-content',
        isLine ? 'n22-field-item-content-line' : ''
      ]"
    >
      <slot name="isShowRequired">
        <span class="n22-show-required-star" v-if="isShowRequired"
          >*&nbsp;</span
        >
      </slot>
      <!-- <label class="n22-field-item-title" v-if="title" v-text="title"></label> -->
      <label
        class="n22-field-item-title"
        :class="dealFieldItemWidth ? 'pf-solid' : ''"
        v-if="title"
      >
        <span v-text="title"></span>
        <span class="svg_icon" v-if="mark" @click.stop="$emit('markFun')">
          <!-- <svg-icon :icon-class="markSvg"></svg-icon> -->
          <slot name="markSvg">
            <n22-icon :name="markSvg"></n22-icon>
          </slot>
        </span>
        <div class="n22-field-item-brief" v-if="titleBref">
          {{ titleBref }}
        </div>
      </label>
      <div class="n22-field-item-left" v-if="$slots.left">
        <slot name="left"></slot>
      </div>
      <div class="n22-field-item-control">
        <slot>
          <template v-if="content">{{ content }}</template>
          <div
            class="n22-field-item-placeholder"
            v-else-if="placeholder && addon === '请选择'"
            v-text="placeholder"
          ></div>
        </slot>
      </div>
      <div
        class="n22-field-item-right"
        :class="dealFieldItemWidth ? 'pf-solid' : ''"
        v-if="arrow || addon || $slots.right"
      >
        <slot name="right">{{ addon }}</slot>
        <!-- <span class="svg_icon" v-if="arrow">
          <svg-icon icon-class="right_arrow"></svg-icon>
        </span> -->
        <n22-icon v-if="arrow" :name="arrow === true ? '' : arrow" size="md" />
        <slot name="right-children"></slot>
      </div>
    </div>
    <div
      class="n22-field-item-children"
      :style="{ 'text-align': fieldItemChildrenAlign }"
      v-if="$slots.children"
    >
      <slot name="children"></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
import {isIOS, isAndroid} from '../_util'

export default {
  name: 'n22-field-item',

  components: {
    [Icon.name]: Icon,
  },

  inject: {
    rootField: {
      from: 'rootField',
      default() {
        /* istanbul ignore next */
        return {}
      },
    },
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    isShowRequired: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    addon: {
      type: String,
      default: '',
    },
    arrow: {
      type: [Boolean, String],
      default: false,
    },
    solid: {
      type: Boolean,
      default: false,
    },
    alignRight: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isLine: {
      type: Boolean,
      default: true,
    },
    isLinefeed: {
      type: Boolean,
      default: false,
    },

    // 2019-07-23新增
    fieldItemChildrenAlign: {
      type: String,
      default: 'right',
    },
    // 2019-07-31新增
    mark: {
      // 字段name后面的mark是否展示
      type: Boolean,
      default: false,
    },
    markSvg: {
      // 字段name后面的mark svg名字
      type: String,
      default: 'question_mark',
    },
    titleBref: {
      // title的描述内容（标题下、下划线上）-2019-08-15 aliang add
      type: String,
      default: '',
    },
  },

  computed: {
    inputEnv() {
      /* istanbul ignore next */
      if (isIOS) {
        return 'is-ios'
      } else if (isAndroid) {
        return 'is-android'
      } else {
        return 'is-browser'
      }
    },
    currentDisabled() {
      return this.rootField.disabled || this.disabled
    },
    dealFieldItemWidth() {
      return this.title + this.addon && (this.title + this.addon).length > 20
    },
  },

  methods: {
    $_onClick(e) {
      if (!this.currentDisabled) {
        this.$emit('click', e)
      }
    },
  },
}

</script>

<style lang="stylus">
.n22-field-item {
  position: relative;
  .svg_icon {
    color: color-svg-left-arrow;
    height: 16px;
    width: 16px;
  }
}

.n22-field-item-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: field-item-min-height;
  padding-top: field-item-padding-v;
  padding-bottom: field-item-padding-v;
  box-sizing: border-box;
}

.n22-field-item-content-line {
  hairline(bottom, field-item-border-color);
}

.n22-field-item-content-Linefeed {
  position: relative;
  align-items: center;
  justify-content: space-between;
  min-height: field-item-min-height;
  padding-top: field-item-padding-v;
  padding-bottom: field-item-padding-v;
  box-sizing: border-box;
}

.n22-field-item-title {
  flex-shrink: 0;
  margin-right: field-item-title-gap;
  font-size: field-item-font-size;
  line-height: 1.2;
  display inline-block;
  float left ;
  &.pf-solid {
     max-width 145px
     text-align left
  }
  /deep/.svg-icon {
    color: color-svg-question-mark;
    width: 16px;
    height: 16px;
    margin-left: 5px;
    fill: currentColor;
    overflow: hidden;
  }
}

.n22-show-required-star {
  font-size: 14px;
  color: red;
  display: block;
  height: 12px;
  margin-left: -12px;
  padding-right: 4px;
}

.n22-field-item-brief {
  margin-top v-gap-xs
  text-align: left;
  color field-brief-color
  font-size field-brief-font-size
}

.n22-field-item-left {
  flex-shrink: 0;
  margin-right: h-gap-sm;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  color: field-item-addon-color;
  font-size: field-item-addon-font-size;
}

.n22-field-item-control {
  position: relative;
  flex: 1 1 0%;
  color: field-item-color;
  font-size: field-item-font-size;
  font-weight: field-item-font-weight;
  line-height: 1.2;
}

.n22-field-item-placeholder {
  color: field-item-placeholder-color;
  font-weight: font-weight-normal;
}

.n22-field-item-right {
  position: relative;
  flex-shrink: 0;
  margin-left: h-gap-sm;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  color: field-item-addon-color;
  font-size: field-item-addon-font-size;

  .n22-icon-arrow-right {
    margin-right: -6px;
    color: color-text-placeholder;
  }

  &.pf-solid {
     max-width 165px
  }
}

.n22-field-item-children {
  font-size: field-item-children-font-size;
  margin-top: v-gap-md;
}

.n22-field-item {
  &.is-solid {
    .n22-field-item-title {
      width: field-item-title-width;
    }
  }

  &.is-disabled {
    .n22-field-item-control, .n22-field-item-left, .n22-field-item-right {
      color: color-text-disabled;
    }
  }

  &.is-align-right {
    .n22-field-item-control {
      text-align: right;
    }
  }
}
</style>
