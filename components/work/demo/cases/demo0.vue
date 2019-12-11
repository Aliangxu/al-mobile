<template>
  <div class="n22-example-child n22-example-child-work n22-example-child-work-0">
    <n22-field>
      <n22-drop-select
        v-model="holderWork"
        title="投保人职业"
        pickerTitle="请选择职业"
        :options="holderWorkOptionsTHR"
        vvalidateModal="required"
        ispickerValue="请选择"
        data-vv-as="职业"
        type="work"
        name="certificateType"
        :isAppendTo="true"
        notSelectIdf="拒保"
        @onNotSelectFun="onNotSelectFun"
      ></n22-drop-select>
      <n22-drop-select
        v-model="holderWork"
        title="职业只取最后"
        pickerTitle="请选择职业"
        :options="holderWorkOptions"
        vvalidateModal="required"
        ispickerValue="请选择"
        data-vv-as="职业"
        type="single"
        name="certificateType"
        :isAppendTo="false"
      ></n22-drop-select>
      <n22-button @click="workClick" round>职业</n22-button>
    </n22-field>
  </div>
</template>

<script>
//import { mapState, mapActions } from "vuex";//引入组件样例--★★此处为引入vuex推荐此方法引入vuex的各个方法属性使用
import { Field, Button, DropSelectItem, Toast, Work } from "al-mobile";
import oneLevelWork from 'al-mobile/components/work/demo/oneLevelWork'
import twoLevelWork from 'al-mobile/components/work/demo/twoLevelWork'
import work from 'al-mobile/components/work/demo/work'

export default {
  name: "n22-work-demo", //使用xx-xx-xx命名方式具体看操作文档
  props: {
    //headBottom: {//props定义样例
    //   type: Boolean,
    //   default: true,
    //},
  },
  components: {
    [Field.name]: Field, //
    [Button.name]: Button, //
    [DropSelectItem.name]: DropSelectItem, //
    [Toast.name]: Toast, //
    [Work.name]: Work //
  },
  computed: {
    //...mapState(["common"])//引入vuex state样例>>>可通过this.common.userInfo获取vuex-state数据
  },
  mounted() {},
  watch: {},
  data() {
    return {
      isPopupShow: false,
      holderWork: "",
      holderWorkOptionsTHR: [oneLevelWork,twoLevelWork,work],
      holderWorkOptions: [work],
    };
  },
  methods: {
    //...mapActions(["getUserInfo"]),//vuex-action引入样例>>>通过this.getUserInfo()可直接调用获取state数据可异步
    //...mapMutations([//提交vuex-state更改样例
    //    'USER_INFO',
    //]),
    workClick() {
      this.$refs.test.isPopupShow = true;
    },
    onNotSelectFun() {
      Toast({
        content: "拒保职业",
        icon: "tip",
        iconSvg: true,
        position: "center",
        duration: 3000
      });
    }
  }
};
</script>
<style lang="stylus">
.n22-example-child-work
  height 400px
.n22-popup-is-append-to
  .n22-popup-box
    width 375px!important
    margin 0 auto
</style>