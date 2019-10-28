<template>
  <label
    class="n22-check"
    :class="{
      'is-disabled': disabled,
      'is-checked': isChecked
    }"
    @click="$_onClick"
  >
    <div class="n22-check-icon">
      <!-- <n22-icon :name="currentIcon" :size="size" :svg="iconSvg"/> -->
      <svg-icon :icon-class="currentIcon"></svg-icon>
    </div>
    <div class="n22-check-label" v-if="$slots.default || label">
      <slot>{{ label }}</slot>
    </div>
  </label>
</template>

<script>
// import Icon from '../icon'
import checkMixin from './mixin'

export default {
  name: 'n22-check',

  mixins: [checkMixin],

  components: {
    // [Icon.name]: Icon,
  },

  props: {
    name: {
      default: true,
    },
    value: {
      default: false,
    },
    size: {
      type: String,
      default: 'md',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    itemObject: {
      type: Array,
      default: ()=>{
        return []
      },
    },
  },

  computed: {
    isChecked() {
      let val = this.value;
      if(val!=""){
        val = JSON.parse(this.value);
      }else{
        val = false;
      }
      return (val === this.name) || (this.rootGroup && this.rootGroup.value.indexOf(this.name) !== -1)
    },
    currentIcon() {
      return this.disabled ? this.iconDisabled : this.isChecked ? this.icon : this.iconInverse
    },
  },

  inject: {
    rootGroup: {default: null},
  },

  methods: {
    $_onClick() {
      if (this.disabled) {
        return
      }
      
      if (typeof this.name === 'boolean') {
        if(typeof this.value === 'boolean'){
          this.$emit('input', !this.value)
        }else{
          this.$emit('input', !JSON.parse(this.value||false))
        }
      } else if (this.isChecked) {
        this.$emit('input', '')
        if (this.rootGroup) {
          this.rootGroup.uncheck(this.name,this.itemObject)
        }
      } else {
        this.$emit('input', this.name)
        if (this.rootGroup) {
          this.rootGroup.check(this.name,this.itemObject)
        }
      }
    },
  },
}

</script>

<style lang="stylus" scoped>
.n22-check
  height 40px
  display flex
  align-items center
  margin-top v-gap-sm
  margin-bottom v-gap-sm
  &.is-checked
    .n22-check-icon
      color check-color
  &.is-disabled
    .n22-check-icon
    .n22-check-label
      color color-text-disabled

.n22-check-icon
  position relative
  color color-text-placeholder
  height 20px
  width 20px
  .n22-icon
    display flex

.n22-check-label
  margin-left h-gap-sm
  font-size check-font-size
  width 95%
</style>
