<template>
  <div class="n22-example-child n22-example-child-reader n22-example-child-reader-0">
    <ul class="image-reader-list">
      <li
        class="image-reader-item"
        v-for="(img, index) in imageList['reader0']"
        :key="index"
        :style="{
          'backgroundImage': `url(${img})`,
          'backgroundPosition': 'center center',
          'backgroundRepeat': 'no-repeat',
          'backgroundSize': 'cover'
        }">
        <n22-tag
          class="image-reader-item-del"
          size="small"
          shape="quarter"
          fill-color="#111A34"
          type="fill"
          font-color="#fff"
          @click.native="onDeleteImage('reader0', index)"
        >
          <n22-icon name="close"></n22-icon>
        </n22-tag>
      </li>
      <li class="image-reader-item add">
        <n22-image-reader
          name="reader0"
          @select="onReaderSelect"
          @complete="onReaderComplete"
          @error="onReaderError"
          is-multiple
        ></n22-image-reader>
        <n22-icon name="camera" size="md" color="#CCC"></n22-icon>
        <p>添加图片</p>
      </li>
    </ul>
  </div>
</template>

<script>import {Icon, ImageReader, Tag, Toast} from 'al-mobile'

export default {
  name: 'image-reader-demo',
  /* DELETE */
  title: '图片选择',
  titleEnUS: 'Picture selection',
  /* DELETE */
  components: {
    [Icon.name]: Icon,
    [ImageReader.name]: ImageReader,
    [Tag.name]: Tag,
  },
  data() {
    return {
      imageList: {
        reader0: [
          '//img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a',
          '//manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7',
        ],
        reader1: [],
      },
    }
  },
  methods: {
    onReaderSelect(name, index, {files}) {
      files.forEach(file => {
        console.log('[Al Mobile] ImageReader Selected:', 'File Name ' + file.name)
      })
      Toast.loading('图片读取中...')
    },
    onReaderComplete(name, index, {dataUrl, file}) {
      Toast.hide()
      console.log('[Al Mobile] ImageReader Complete:', 'File Name ' + file.name)
      setTimeout(() => {
        const demoImageList = this.imageList[name] || []
        demoImageList.push(dataUrl)
        this.$set(this.imageList, name, demoImageList)
      }, 100)
    },
    onReaderError(name, {msg}) {
      Toast.failed(msg)
    },
    onDeleteImage(name, index) {
      const demoImageList = this.imageList[name] || []
      demoImageList.splice(index, 1)
      this.$set(this.imageList, name, demoImageList)
    },
  },
}
</script>
<style lang="stylus" scoped>
.n22-example-child-reader
  .image-reader-list
    float left 
    width 100%
    .image-reader-item
      position relative
      float left
      width 23.5%
      padding-bottom 23.5%
      margin-bottom 2%
      margin-right 2%
      background #FFF
      box-shadow 0 5px 20px rgba(197, 202, 213, .25)
      box-sizing border-box
      list-style none
      border-radius 4px
      background-size cover
      overflow hidden
      &:nth-of-type(4n)
        n22-in-right 0
      &.add 
        .n22-icon
          position absolute
          top 40%
          left 50%
          transform translate(-50%, -50%)
          opacity .5
        p
          position absolute
          top 50%
          left 0
          width 100%
          margin-top 7.5px
          font-size 11px
          color #CCC
          text-align center
      .image-reader-item-del
        position absolute
        top 0
        right 0
        zn22-dex 3
        opacity .8
        .n22-icon-close
          font-size 12px
</style>