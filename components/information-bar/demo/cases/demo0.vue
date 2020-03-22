<template>
  <div
    class="n22-example-child n22-example-child-information-bar n22-example-child-information-bar-0"
  >
    <n22-information-bar
      leftIcon="volumn"
      :propHeight="25"
      :informationList="informationList"
      @goLink="informationClick"
    ></n22-information-bar>
  </div>
</template>

<script>import {InformationBar} from 'al-mobile'

export default {
  name: 'information-bar-demo',
  components: {
    [InformationBar.name]: InformationBar,
  },
  data() {
    return {
      informationList: [
        {
          label: 'N22咨询',
          labelColor: 'red',
          content: '欢迎使用N22在线培训考试系统，系统正在持续开放中，敬请期待。',
          contentColor: 'black',
          url: '/',
        },
        {
          label: '',
          content: '客户李欢欢电子保单XADFDFJ09090900承包成功。',
          contentColor: 'green',
        },
        {
          label: '',
          content: '客户李哈哈电子保单XADFDFJ09090900支付成功，请及时处理。',
          contentColor: 'red',
        },
      ],
    }
  },
  methods: {
    informationClick({url}) {
      this.$router.push(url)
    },
  },
}
</script>
