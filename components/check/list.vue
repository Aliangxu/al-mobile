<template>
  <n22-check-group
    ref="group"
    class="n22-check-list"
    :class="{ 'is-align-center': alignCenter }"
    :value="value"
    @input="$_onInput"
  >
    <n22-cell-item
      v-for="(item, index) in options"
      :key="index"
      class="n22-check-item"
      :class="{
        'is-checked': value.indexOf(item.value) !== -1,
      }"
      :title="hasSlot ? '' : (item.text || item.label)"
      :brief="hasSlot ? '' : item.brief"
      :disabled="item.disabled"
      @click="$_check(item, index)"
    >
      <template v-if="hasSlot">
        <slot :option="item" :index="index" :selected="value.indexOf(item.value) > -1"></slot>
      </template>
      <n22-check
        v-if="!alignCenter"
        :name="item.value"
        :disabled="item.disabled"
        :size="iconSize"
        :icon="icon"
        :icon-inverse="iconInverse"
        :icon-disabled="iconDisabled"
        :icon-svg="iconSvg"
        :slot="iconPosition === 'right' ? 'right' : 'left'"
      />
    </n22-cell-item>
  </n22-check-group>
</template>

<script>
import Check from './index'
import CheckGroup from './group'
import CellItem from '../cell-item'
import checkMixin from './mixin'

export default {
  name: 'n22-check-list',

  mixins: [checkMixin],

  components: {
    [Check.name]: Check,
    [CheckGroup.name]: CheckGroup,
    [CellItem.name]: CellItem,
  },

  props: {
    options: {
      type: Array,
      default() {
        /* istanbul ignore next */
        return []
      },
    },
    value: {
      type: Array,
      default() {
        /* istanbul ignore next */
        return []
      },
    },
    alignCenter: {
      type: Boolean,
      default: false,
    },
    isSlotScope: {
      type: Boolean,
      default: undefined,
    },
  },

  computed: {
    hasSlot() {
      return this.isSlotScope !== undefined ? this.isSlotScope : !!this.$scopedSlots.default
    },
  },

  methods: {
    // MARK: private methods
    $_check(option) {
      this.$refs.group.toggle(option.value)
    },
    // MARK: private events
    $_onInput(value) {
      this.$emit('input', value)
    },
  },
}

</script>

<style lang="stylus">
.n22-check-item
  .n22-check
    margin-top 0
    margin-bottom 0
  .n22-cell-item-body.multilines .n22-cell-item-title
    font-weight font-weight-medium

.n22-check-list.is-align-center
  .n22-cell-item-content
    text-align center
  .n22-cell-left,
  .n22-cell-right
    display none
</style>

