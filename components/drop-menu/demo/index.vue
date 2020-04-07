<template>
  <div class="n22-example drop-menu">
    <section class="n22-example-section" v-for="(demo, index) in demos" :key="index">
      <div class="n22-example-title" v-html="demo.title || '基础'"></div>
      <div class="n22-example-content">
        <component :is="demo"></component>
      </div>
    </section>
	</div>
</template>

<script>
import createDemoModule from '../../../examples/create-demo-module'
import Demo0 from './cases/demo0'
import Demo1 from './cases/demo1'
import Demo2 from './cases/demo2'
import Demo3 from './cases/demo3'

export default {...createDemoModule('drop-menu', [Demo0, Demo1, Demo2, Demo3])}

</script>

<style lang="stylus">
.n22-example.drop-menu
  .n22-example-section
    position relative
    .n22-example-child
      position relative
      height 400px
      background color-bg-base
      overflow hidden
      .n22-drop-menu
        position absolute
        float left
        width 100%
        height 100%
        .n22-drop-menu-bar
          height drop-menu-height
        .n22-popup
          position absolute
      .content
        font-size font-body-normal
        text-align center
        line-height 400px
</style>