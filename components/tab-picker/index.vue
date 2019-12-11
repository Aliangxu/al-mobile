<template>
  <div class="n22-tab-picker">
    <n22-popup
      :value="value"
      position="bottom"
      :mask-closable="maskClosable"
      @input="$_onPopupInput"
      @show="$_onPopupShow"
      @hide="$_onPopupHide"
      @maskClick="$_onCancel"
    >
      <n22-popup-title-bar
        :title="title"
        :describe="describe"
        only-close
        @cancel="$_onCancel"
      >
        <!-- <n22-icon name="close" size="lg" slot="cancel" /> -->
      </n22-popup-title-bar>
      <div class="n22-tab-picker-search" v-if="isSearch">
         <input class="n22-tab-picker-search-input" v-model="searchText" type="text" @change="$_onInputChange">
      </div>
      <div class="n22-tab-picker-content">
          <n22-tabs
            v-model="currentTab"
            :key="tabsTmpKey"
            :inkLength="100"
            ref="tabs"
          >
            <n22-scroll-view
              ref="scrollView"
              :scrolling-x="false"
              auto-reflow
            >
              <n22-tab-pane
                v-for="(pane, index) in (searchText?searchResult:panes)"
                :key="pane.name"
                :name="pane.name"
                :label="pane.label"
              >
                <n22-radio-list
                  :value="pane.value"
                  :options="pane.options"
                  :is-slot-scope="hasSlot"
                  @input="$_onSelectPaneItem($event, index)"
                  icon=""
                  icon-inverse=""
                  icon-position="right"
                >{{pane.value}}
                  <template slot-scope="{ option }">
                    <slot :option="option"></slot>
                  </template>
                </n22-radio-list>
              </n22-tab-pane>
            </n22-scroll-view>
          </n22-tabs>
      </div>
    </n22-popup>
  </div>
</template>

<script>
import Popup from '../popup'
import PopupTitlebar from '../popup/title-bar'
import popupMixin from '../popup/mixins'
import popupTitleBarMixin from '../popup/mixins/title-bar'
// import Icon from '../icon'
import Tabs from '../tabs'
import TabPane from '../tab-pane'
import RadioList from '../radio-list'
import ScrollView from '../scroll-view'
import {extend} from '../_util'

//外部组件
// import Fuse from "fuse.js";

export default {
  name: 'n22-tab-picker',

  mixins: [popupMixin, popupTitleBarMixin],

  components: {
    [Popup.name]: Popup,
    [PopupTitlebar.name]: PopupTitlebar,
   //  [Icon.name]: Icon,
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane,
    [RadioList.name]: RadioList,
    [ScrollView.name]: ScrollView,
  },

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    searchData: {
      type: Object,
      default: () => ({}),
    },
    defaultValue: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    isSearch: {
      type: Boolean,
      default: false,
    },

    // Mixin Props
    // value: {
    //   type: Boolean,
    //   default: false,
    // },
    // title: {
    //   type: String,
    //   default: '',
    // },
    // describe: {
    //   type: String,
    //   default: '',
    // },
    // maskClosable: {
    //   type: Boolean,
    //   default: true,
    // },
  },

  data() {
    return {
      selected: [],
      oldSelected: [],
      currentTab: '',
      oldCurrentTab: '',
      tabsTmpKey: Date.now(),
      searchText: "",
      fuse: null,
      searchResult:[{
         "name": "province",
         "label": "请选择",
         "options": []
      }],
    }
  },

  watch: {
     searchText(newVal,oldVal){
        console.log('%c tab-picker-searchText-newVal','color:green;',newVal);
        newVal&&this.search(this.searchText);
     }
  },

  computed: {
    panes() {
      const panes = []
      let target = this.data
      let cursor = 0
      while (target && target.name) {
        const pane = {
          name: target.name,
          label: target.label || this.placeholder,
          value: this.selected[cursor],
          selected: null,
          options: target.options,
        }
        let find = false
        for (let i = 0, len = target.options.length; i < len; i++) {
          if (target.options[i].value === this.selected[cursor]) {
            pane.label = target.options[i].label
            pane.selected = target.options[i]
            target = target.options[i].children
            find = true
            cursor++
            break
          }
        }
        if (!find) {
          target = null
        }
        panes.push(pane)
        this.currentTab = pane.name // select the tab corresponding to this pane
      }
      return panes
    },
    hasSlot() {
      return !!this.$scopedSlots.default
    },
  },

  created() {
    /* istanbul ignore else */
    if (this.defaultValue) {
      this.selected = this.defaultValue
    }

    /* istanbul ignore else */
    if (this.data) {
      this.currentTab = this.data.name
    }

    /* search */
    if (this.isSearch&&this.searchData&&this.searchData.options&&this.searchData.options.length>0) {
      //  console.log('%c tab-picker-created-this.searchData','color:green;',this.searchData);
      // this.initFuse(this.searchData.options);
      this.currentTab = this.searchData.name // select the tab corresponding to this pane
    }
  },

  methods: {
   search(query) {
      console.log("%c testsearch", "color:green;", "testsearch");
      this.searchResult[0].options = this.fuse.search(query);
      console.log("%c searchResult", "color:green;", this.searchResult);
   },
   $_onInputChange(){
      console.log('%c tab-picker-this.currentTab','color:green;',this.currentTab);
      console.log('%c tab-picker-this.panes','color:green;',this.panes);
      console.log('%c tab-picker-this.data','color:green;',this.data);
   },
    // MARK: private events
    $_onPopupInput(val) {
      this.$emit('input', val)
    },
    $_onPopupShow() {
      this.$refs.tabs.reflowTabBar()
      this.$emit('show')
      setTimeout(() => {
        this.oldSelected = extend([], this.selected)
        this.oldCurrentTab = this.currentTab
      }, 100)
    },
    $_onPopupHide() {
      this.$emit('hide')
    },
    $_onCancel() {
      this.hideTabPicker()
      setTimeout(() => {
        this.selected = extend([], this.oldSelected)
        this.currentTab = this.oldCurrentTab
        this.tabsTmpKey = Date.now()
      }, 100)
    },
    $_onSelectPaneItem(value, index) {
      this.selected.splice(index, this.selected.length - index, value)
      this.$nextTick(() => {
        const nextPane = this.panes[index + 1]

        this.$emit('select', {
          index,
          value,
          option: this.panes[index],
        })

        /* istanbul ignore else */
        if (nextPane) {
          this.currentTab = nextPane.name
          this.$refs.scrollView.scrollTo(0, 0)
        } else if (value !== '') {
          setTimeout(() => {
            this.$emit('change', {
              values: this.getSelectedValues(),
              options: this.getSelectedOptions(),
            })
            this.hideTabPicker()
          }, 300)
        }
      })
    },
    // MARK: public methods
    getSelectedValues() {
      return this.selected
    },
    getSelectedOptions() {
      if(this.isSearch&&this.searchText){
         let sel = this.selected[0]
         if (this.searchResult && this.searchResult.length) {
            let options = [];
            for (let i = 0; i < this.data.options.length; i++) {
               const one = this.data.options[i];
               if(one.value==sel.slice(0,2)){
                  options.push(one);
                  for (let m = 0; m < one.children.options.length; m++) {
                     const two = one.children.options[m];
                     if(two.value==sel.slice(0,4)){
                        options.push(two);
                        for (let n = 0; n < two.children.options.length; n++) {
                           const thre = two.children.options[n];
                           if(thre.value==sel){
                              options.push(thre);
                              return options;
                           }
                        }
                     }   
                  }
               }
            }
            return options;
         } else {
            return []
         }
      }else{
         if (this.panes && this.panes.length) {
            return this.panes.filter(pane => pane.value).map(pane => pane.selected)
         } else {
            return []
         }
      }
    },
    hideTabPicker() {
      this.$emit('input', false)
    },

    initFuse(list) {
      this.fuse = new Fuse(list, {
         shouldSort: true,
         threshold: 0.4,
         location: 0,
         distance: 100,
         maxPatternLength: 32,
         minMatchCharLength: 1,
         keys: [//需要获取的对象映射
            {
               name: "label",
               weight: 0.7
            }
         ]
      });
   }
  },
}

</script>

<style lang="stylus">
.n22-tab-picker
  .n22-popup
    z-index tab-picker-zindex
  .n22-tab-bar
    position relative
    margin-left tab-picker-h-gap
    margin-right tab-picker-h-gap
    padding-left 0
    padding-right 0
    background-color tab-picker-bg
    hairline(bottom, color-border-base)
  .n22-tab-picker-search
    background-color white
    text-align center
    border: 1px solid #e3e3e3;
    .n22-tab-picker-search-input
      background: #fff url(../_style/images/search.png) 10px 5px no-repeat;
      background-size: 20px;
      width: 300px;
      height: 30px;
      margin: 5px;
      line-height: 30px;
      box-sizing: border-box;
      padding: 0 20px 0 30px;
      border: 1px solid #e3e3e3;
      color: #2c3e50;
      outline: none;
      border-radius: 3px;
      font-size: 14px;
      transition: border-color 0.2s ease;
      vertical-align: middle !important;
  .n22-tabs-content
    height tab-picker-height
    overflow auto
    -webkit-overflow-scrolling touch
    &::-webkit-scrollbar
      display none
  .n22-tab-bar-list
    justify-content flex-start
    .n22-tab-bar-item
      margin 0 60px 0 0
      padding 0
      font-size font-caption-normal
  .n22-tab-pane
    padding-left tab-picker-h-gap
    padding-right tab-picker-h-gap
    box-sizing border-box
  .n22-popup-cancel
    width 90px !important
.n22-tab-picker-content
  background-color tab-picker-bg
  .n22-radio-item.is-selected
    .n22-cell-item-body .n22-cell-item-title
      color radio-color
</style>
