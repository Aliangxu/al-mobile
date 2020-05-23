<template>
  <div class="n22-picker">
    <n22-popup
      :class="[isAppendTo ? 'n22-popup-is-append-to' : '']"
      v-model="isPickerShow"
      position="bottom"
      :mask-closable="maskClosable"
      @beforeShow="$_onBeforeShow"
      @show="$_onPickerShow"
      @hide="$_onPickerHide"
      @maskClick="$_onCancel"
    >
      <n22-popup-title-bar
        :title="title"
        :describe="describe"
        :ok-text="okText"
        :cancel-text="cancelText"
        @confirm="$_onConfirm"
        @cancel="$_onCancel"
      ></n22-popup-title-bar>
      <div class="popup-content">
        <div class="ctc_div_mask" style="z-index: 100;">
          <div ref="ctc_div_markcenctinput" class="ctc_div_markcenct">
            <!-- <div v-if="isShowSearch" class="ctc_div_query">
              <img
                class="prd_img_query"
                src="/static/qijianwei/SearchGlyph.png"
                @click="queryName"
              />
              <input
                v-model="oName"
                class="prd_input_query"
                type="text"
                placeholder="关键词搜索"
                @change="queryName"
                @focus="focusInput"
                @blur="blurInput"
              />
            </div> -->
            <div class="search">
              <n22-input-item
                v-model="oName"
                placeholder="关键词搜索"
                class="search_query search_query_icon"
                style="position: relative; vertical-align: top;"
                @change="queryName"
                @focus="focusInput"
                @blur="blurInput"
              ></n22-input-item>
            </div>
            <div class="ctc_div_queryitem">
              <!-- work头部展示选择 -->
              <div class="select_now">
                选择：
                <span v-for="(sel, si) in selectArray" :key="si">
                  <span
                    class="crumb"
                    v-if="sel && sel.text"
                    @click="selectClass(si, activei)"
                    >{{ sel.text }}</span
                  >
                  <span class="fenge" v-if="sel && sel.text">&gt;</span>
                </span>
              </div>
              <transition-group
                name="n22-base-slide-right"
                @after-enter="afterEnter()"
                @after-leave="afterLeave()"
              >
                <div
                  v-for="(item, index) in arrItemAll"
                  :key="index + 1"
                  v-if="activei >= index"
                  style="z-index: 100;position: relative;"
                >
                  <div
                    class="ctc_div_queryitemall"
                    :class="[`ctc_div_queryitemall-child${index + 1}`,oName?'ctc_div_queryitemall_search':'']"
                    @click="selectClass(index, activei)"
                  >
                    <div
                      ref="sss"
                      v-for="(zy, mndex) in item"
                      @click="changeSkider(zy, mndex, index)"
                      class="ctc_div_item"
                      :key="zy.key"
                    >
                      <span
                        class="pr_span_title marRightitem"
                        :class="
                          dealSelectSty(zy, mndex, index)
                            ? 'is-select-class'
                            : 'not-select-class'
                        "
                        >{{ zy.text }}</span
                      >
                    </div>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </n22-popup>
  </div>
</template>

<script>
import InputItem from '../input-item'
import Popup from '../popup'
import PopupTitleBar from '../popup/title-bar'
import Toast from '../toast'
import pickerLevelMixin from './mixins'

export default {
  name: 'n22-work',
  title: '职业选择组件',
  components: {
    [InputItem.name]: InputItem,
    [Popup.name]: Popup,
    [PopupTitleBar.name]: PopupTitleBar,
    [Toast.name]: Toast,
  },
  mixins: [pickerLevelMixin],
  props: {
    levelArrayProp: {
      type: Array,
      default: () => {
        return []
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: () => [],
    },
    isShowSearch: {
      type: Boolean,
      default: true,
    },
    maxLevel: {
      type: Number,
      default: 3,
    },
    selectValue: [String, Number, Array, Object],
    isAppendTo: {
      type: Boolean,
    },
    notSelectIdf: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      workCodeData: this.data,
      // 所有级的总数组，数组里面每个index即为每一级的数组
      arrItemAll: [],
      // 所选所有级的数据
      selectArray: [],
      activei: 0,
      activeis: true,
      isPickerShow: false,
      levelArray: this.levelArrayProp.length > 0 ? this.levelArrayProp : [2, 4, 6],
      arrItemBig: '',
      arrItemSmall: '',
      arrItem: '',
      isQueryName: false,
      selectBigItem: {
        big: {
          text: '',
          value: '',
        },
        small: {
          text: '',
          value: '',
        },
        work: {
          text: '',
          value: this.value,
        },
      },
      // value: 0,
      oName: '',
      allUseLoad: false,
      bottomText: '上拉加载更多...',
      selectImg: '',
      unselectImg: '',
    }
  },
  computed: {
    dealSelectSty() {
      return (zy, mndex, index) => {
        return (
          // eslint-disable-next-line
          (this.selectArray[index] && this.selectArray[index].value) == zy.value
        )
      }
    },
  },
  watch: {
    value(val) {
      this.isPickerShow = val
      val && this.$_initPicker()
    },
    isPickerShow(val) {
      if (!val) {
        this.$emit('input', val)
      }
    },
    // value(val) {
    //   console.log("%c value监听", "color:#00CD00", val);
    //   this.dealData(val);
    // },
    oName(val) {
      if (this.isQueryName) {
        console.log('%c oName监听到值变更', 'color:#00CD00', val)
        this.queryName()
      }
    },
  },
  mounted() {
    // console.log("%c work-mounted", "color:#00CD00", this.data);
    // console.log("%c work-mounted", "color:#00CD00", this.selectValue);
    this.$_initPicker()
  },
  created() {
    this.occupation_init('0')
  },
  methods: {
    $_onPickerHide() {
      this.$emit('hide')
    },
    $_onPickerShow() {
      this.$emit('show')
    },
    $_initPicker() {
      if (this.value) {
        this.isPickerShow = this.value
      }
      if (this.selectValue) {
        this.dealData(this.selectValue)
      }
    },
    afterEnter() {
      this.activeis = true
    },
    afterLeave() {
      this.activeis = true
    },
    selectClass(val, activei) {
      // eslint-disable-next-line
      if (this.oName) {
        this.activei = val
      } else {
        if (val != activei && this.activeis) {
          console.log('%c 触发切换switch-activei', 'color:#00CD00', '当前点击' + val + '点击前' + this.activei)
          const length = this.arrItemAll.length
          // this.arrItemAll.splice(val+1,length-val-1);
          this.selectArray.splice(val, length - val)
          this.activei = val
        }
      }
    },
    dealData(val) {
      for (let index = this.maxLevel - 1; index >= 0; index--) {
        // let codeKey = "";
        // switch (index) {
        //   case 0:
        //     codeKey = "big";
        //     break;
        //   case 1:
        //     codeKey = "small";
        //     break;
        //   case 2:
        //     codeKey = "work";
        //     break;
        //   default:
        //     break;
        // }
        // if (!codeKey) {
        //   return;
        // }
        // 00-0001-000101
        let dataCode = this.workCodeData[index]
        let canSelectCodeList = []
        if (index !== 0) {
          canSelectCodeList = dataCode.filter(item => {
            const dealValue = val.substr(0, this.levelArray[index - 1])
            return (item.value.indexOf(dealValue) === 0 && !item.twovalue) || (item.twovalue && item.twovalue.indexOf(dealValue) === 0)
          })
        } else {
          canSelectCodeList = dataCode
        }
        let canSelectCode = dataCode.filter(item => {
          // eslint-disable-next-line
          return val.substr(0, this.levelArray[index]) == item.value
        })
        this.$set(this.arrItemAll, index, canSelectCodeList)
        this.$set(this.selectArray, index, canSelectCode[0])
        this.activei = 2
        console.log('%c this.arrItemAll', 'color:green;', this.arrItemAll)
        console.log('%c this.selectArray', 'color:green;', this.selectArray)
      }
    },
    $_onBeforeShow() {},
    $_onCancel() {
      this.isPickerShow = false
    },
    $_onConfirm() {
      this.confirmSelect()
    },
    getColumnValues() {
      return [this.selectArray[this.maxLevel - 1]]
    },
    confirmSelect() {
      let checkDate = this.selectArray
      if (checkDate && checkDate.length > 0 && checkDate[this.maxLevel - 1] && checkDate[this.maxLevel - 1].value) {
        this.activei = 3
        this.activeis = true
        this.$emit('confirm', this.getColumnValues())
      } else {
        Toast({
          content: '请选择职业',
          position: 'center',
          duration: 3000,
        })
        return
      }
      this.isPickerShow = false
    },
    cancelOccupationSelect() {
      // let checkDate = this.selectBigItem;
      // if (!checkDate.work.value) {
      //   Toast("请选择职业");
      //   return;
      // }
      // this.activei = 3;
    },
    // 初始化数据
    occupation_init() {
      this.arrItemAll = []
      let arrItemAll = this.workCodeData[0]
      this.arrItemAll.push(arrItemAll)
    },
    echoSelect(zy, mndex, index) {
      if (zy.level && zy.level === this.notSelectIdf) {
        this.$emit('notSelectFun', zy)
        this.activeis = true
        return
      }
      this.$set(this.selectArray, index, zy)
      // if (!codeKey) {
      //   this.confirmSelect();
      //   return;
      // }
      if (index + 1 === this.maxLevel) {
        this.confirmSelect()
        return
      }
      let dataCode = this.workCodeData[index + 1]
      let canSelectCodeList = dataCode.filter(item => {
        return (item.value.indexOf(zy.value) === 0 && !item.twovalue) || (item.twovalue && item.twovalue.indexOf(zy.value) === 0)
      })
      console.log('%c 所选下一级数组-canSelectCodeList', 'color:green;', canSelectCodeList)
      this.$set(this.arrItemAll, index + 1, canSelectCodeList)
      this.activei = index + 1
    },
    changeSkider(zy, mndex, index) {
      // eslint-disable-next-line
      if (index == this.activei) {
        this.activeis = false
        console.log('%c changeSkider-mndex', 'color:#00CD00', mndex)
        console.log('%c changeSkider-zy', 'color:#00CD00', zy)
        this.echoSelect(zy, mndex, index)
      }
    },

    focusInput() {
      this.isQueryName = true
    },
    blurInput() {
      this.isQueryName = false
    },
    queryName() {
      if (this.oName === '') {
        this.$_initPicker()
      } else {
        if (true) {
          this.activei = 2
          this.arrItemAll[2] = this.workCodeData[2].filter(item => {
            return item.text.indexOf(this.oName) > -1 && !item.twovalue
          })
        } else {
          this.arrItem = []
        }
      }
    },
  },
}

</script>
<style lang="stylus" scoped>
.search {
  background-color: #f5f5f5;
  text-align: center;
  padding: 12px;
  height: 30px;
  .search_query {
    width: 351px;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 15px 0 30px;
    border: 1px solid #e3e3e3;
    color: #2c3e50;
    outline: none;
    border-radius: 13px;
    font-size: 14px;
    transition: border-color 0.2s ease;
    vertical-align: middle !important;
    ::v-deep.n22-field-item-content {
      min-height: 28px;
      .n22-field-item-control {
        height: 28px;
        .n22-input-item-input {
          height: 28px;
        }
      }
    }
    &::-webkit-input-placeholder {
      color: #bcbcbc;
      font-size: 12px;
      line-height: 28px;
    }
    &::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #bcbcbc;
      font-size: 12px;
      line-height: 28px;
    }
    &:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #bcbcbc;
      font-size: 12px;
      line-height: 28px;
    }
    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #bcbcbc;
      font-size: 12px;
      line-height: 28px;
    }
  }
  .search_query_icon {
    background: #fff url(../_style/images/search.png) 10px 5px no-repeat;
    background-size: 20px;
  }
}
.crumb {
  // border-bottom: 1px solid #999;
}

.select_now {
  padding-left: 10px;
  line-height: 37px;
  font-size: 12.5px;
  color: #999;
  border-bottom: 1px solid #f2f2f2;
  // margin-bottom: 15px;
  height: 37px;
  p {
    padding: 10px 0;
  }
}

.ctc_div_mask {
  /* position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #000;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10; */
}

.ctc_div_markcenct {
  // width: 375px;
  // margin-top: 10px;
}

.ctc_div_query {
  width: 359px;
  height: 36px;
  margin: 0 auto;
  /*margin-top: 1rem;*/
  /*background: rgba(255, 255, 255, 0.60);*/
  background: #fff;
  border-radius: 5px;
}

.prd_img_query {
  display: block;
  float: left;
  width: 14px;
  height: 14px;
  margin-top: 11px;
  margin-left: 10px;
}

.prd_input_query {
  width: 323px;
  height: 36px;
  padding-left: 12px;
  border: none;
  color: #333333;
  /*background: #EEEEEE;*/
  font-size: 17px;
  line-height: 22px;
}

.ctc_div_queryitem {
  // width: 359px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  background: #fff;
  // border-radius: 3px;
}

.ctc_div_queryitemall {
  // width: 359px;
  height: 409px;
  width: 100%;
  overflow: scroll;
}

.ctc_div_queryitemall-child1 {
  position: absolute;
  z-index: 20;
  background: #fff;
}

.ctc_div_queryitemall-child2 {
  -moz-box-shadow: -4px 0 5px -3px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: -4px 0 5px -3px rgba(0, 0, 0, 0.3);
  box-shadow: -4px 0 5px -3px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  position: absolute;
  margin-left: 50px;
  // width: 325px;
  z-index: 21;
}

.ctc_div_queryitemall-child3 {
  -moz-box-shadow: -4px 0 5px -3px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: -4px 0 5px -3px rgba(0, 0, 0, 0.3);
  box-shadow: -4px 0 5px -3px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  position: absolute;
  margin-left: 100px;
  // width: 275px;
  z-index: 22;
  .ctc_div_item {
    padding-right: 10px;
  }
}
.ctc_div_queryitemall_search {
  margin-left: 0px !important;
}

.query-show {
  background-color: rgba(247, 247, 247, 0.96);
  margin-left: 0;
  position: absolute;
  z-index: 22;
}

.ctc_div_bottombtn {
  width: 359px;
  height: 475px;
  bottom: 0;
  background: #ffffff;
  z-index: 23;
}

.ctc_span_clear {
  margin-top: 425px;
  display: block;
  float: left;
  width: 180px;
  height: 43.5px;
  border-right: 1px solid #cccccc;
  text-align: center;
  line-height: 43.5px;
  color: #eb6067;
  font-size: 16px;
  box-sizing: border-box;
  border-top: 1px solid #cccccc;
}

.ctc_span_ok {
  margin-top: 425px;
  display: block;
  float: left;
  width: 180px;
  height: 43.5px;
  text-align: center;
  line-height: 43.5px;
  color: #eb6067;
  font-size: 16px;
  border-top: 1px solid #cccccc;
}

.pr_span_title {
  display: block;
  float: left;
  font-size: 14px;
  padding: 10px 0;

  width: 100%;
  border-bottom: 1px solid #f2f2f2;
}

.marRightitem {
  margin-right: 7.5px;
}

.ctc_div_item {
  // display: inline-block;
  // width: 335px;
  width: 100%;

  /*height: 0.86rem;*/
  /*margin: 0 auto;*/
  // border-bottom: 1px solid #f2f2f2;
  margin-left: 12px;
}

.is-select-class {
  // color: $theme-color;
  color color-primary
}
.not-select-class {
  color: #555555;
}

.left {
  float: left;
}

.popup-content {
  height: 500px;
  overflow: hidden;
}
</style>
