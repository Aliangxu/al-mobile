<template>
  <div class="n22-example tabs">
    <section class="n22-example-section" v-for="(demo, index) in demos" :key="index">
      <div class="n22-example-title" v-html="demo.title || '基础'"></div>
      <div class="n22-example-describe" v-html="demo.describe"></div>
      <div class="n22-example-content">
        <component :is="demo"></component>
      </div>
    </section>
	</div>
</template>

<script>import createDemoModule from '../../../examples/create-demo-module'
import Demo0 from './cases/demo0'

export default {
  ...createDemoModule('tabs', [Demo0]),
}
</script>

<style lang="stylus">
.n22-example-child-tabs .n22-tab-content
  background #f
  height 50px
  line-height 50px
  text-align center
</style>
