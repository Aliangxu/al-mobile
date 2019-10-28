<template>
  <div class="n22-check-group">
    <slot></slot>
  </div>
</template>

<script>
import Check from './index'

export default {
  name: 'n22-check-group',

  components: {
    [Check.name]: Check,
  },

  props: {
    value: {
      type: Array,
      default: () => {
        /* istanbul ignore next */
        return []
      },
    },
    max: {
      type: Number,
      default: 0,
    },
  },

  provide() {
    return {
      rootGroup: this,
    }
  },

  methods: {
    check(name,itemObject) {
      const index = this.value.indexOf(name)
      if (index === -1 && (this.max < 1 || this.value.length < this.max)) {
        this.$emit('input', this.value.concat(name))
        this.$emit('change', this.value.concat(name),itemObject[0],itemObject[1],itemObject[2])
      }
    },
    uncheck(name,itemObject) {
      const index = this.value.indexOf(name)
      if (index !== -1) {
        this.$emit('input', this.value.slice(0, index).concat(this.value.slice(index + 1)))
        this.$emit('change', this.value.slice(0, index).concat(this.value.slice(index + 1)),itemObject[0],itemObject[1],itemObject[2])
      }
    },
    toggle(name) {
      const index = this.value.indexOf(name)
      if (index === -1) {
        this.check(name)
      } else {
        this.uncheck(name)
      }
    },
  },
}

</script>

