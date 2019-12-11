<<template>
  <div class="n22-example captcha">
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
export default {...createDemoModule('captcha', [Demo0, Demo1])}

</script>

<style lang="stylus">
.n22-example.captcha
  .n22-example-child
    padding 0
  .n22-example-section
    float left
    width 100%
    margin-bottom 10px
    h1
      margin-bottom 10px
      color #111A34
      font-size font-heading-normal
      font-weight normal
    .n22-example-box
      position relative
      float left
      width 100%
      hairline(top)
      .n22-example-box-content
        float left
        width 100%
        padding 60px h-gap-lg
        color color-text-base
        font-size font-minor-large
        text-align left
        background color-bg-base
        box-sizing border-box
        line-height 1.5
        text-indent 2em
      .n22-button
        margin 0
</style>
