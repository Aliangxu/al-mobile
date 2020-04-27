<template>
  <n22-check-base-box
    class="n22-radio-box"
    :label="label"
    :is-checked="isChecked"
    :disabled="disabled"
    @click.native="$_onClick"
  >
    <slot>{{label}}</slot>
  </n22-check-base-box>
</template>

<script>
import CheckBaseBox from '../check-base/box'

export default {
  name: 'n22-radio-box',

  components: {
    [CheckBaseBox.name]: CheckBaseBox,
  },

  props: {
    name: {
      default: true,
    },
    value: {
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isChecked() {
      return this.value === this.name || (this.rootGroup && this.rootGroup.value === this.name)
    },
  },

  inject: {
    rootGroup: {default: null},
  },

  methods: {
    $_onClick() {
      if (!this.disabled) {
        this.$emit('input', this.name)
        if (this.rootGroup) {
          this.rootGroup.check(this.name)
        }
      }
    },
  },
}

</script>
