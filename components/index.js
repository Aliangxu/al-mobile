/* eslint comma-dangle: ["error", "always-multiline"] */

// 组件引入
import {transformCamelCase, warn} from './_util'
import AllHead from './all-head'
import Content from './content'
import ContentList from './content-list'
// import HomeHead from './home-head'
import Foot from './foot'
import ActionSheet from './action-sheet'
import Captcha from './captcha'
import Codebox from './codebox'
import WaveCircle from './wave-circle'
import Star from './star'
import Calendar from './calendar'
import NoticeBar from './notice-bar'
import InformationBar from './information-bar'
import Radio from './radio'
import RadioItem from './radio-item'
import RadioList from './radio-list'
import Amount from './amount'
import ListTabs from './list-tabs'
// import Search from './search'
import Steps from './steps'
import InputItem from './input-item'
import Field from './field'
import FieldItem from './field-item'
import Icon from './icon'
import Popup from './popup'
import PopupTitleBar from './popup-title-bar'
import Picker from './picker'
import DatePicker from './date-picker'
import DropSelectItem from './drop-select-item'
import Dialog from './dialog'
import Cashier from './cashier'
import Ruler from './ruler'
import Slider from './slider'
import ActionBar from './action-bar'
import Button from './button'
import Swiper from './swiper'
import SwiperItem from './swiper-item'
import Switch from './switch'
import SwitchItem from './switch-item'
import ImageReader from './image-reader'
import ImageViewer from './image-viewer'
// import CASign from './casign/n22-sign'
import Check from './check'
// import CheckBox from './check-box'//--2019-08-15-aliang暂时关闭引用
import CheckGroup from './check-group'
import CheckList from './check-list'
import Agree from './agree'
import Progress from './progress'
import ScrollTable from './scroll-table/scrollTable'
import Work from './work'
import Toast from './toast'
import ActivityIndicator from './activity-indicator'
import NumberKeyboard from './number-keyboard'
import Textarea from './textarea'
import TabBar from './tab-bar'
import Tag from './tag'
import Tabs from './tabs'
import TabPane from './tab-pane'
import ScrollView from './scroll-view'
import CellItem from './cell-item'
import TabPicker from './tab-picker'
import DetailItem from './detail-item'
import Bill from './bill'
import ContentLoader from './content-loader'
import DropMenu from './drop-menu'

// import Audio from './audio'
// import Video from './video'
// import Page from './page/page.vue'
// import ExamItem from './exam-item/exam-item.vue'
/* @init<%import ${componentNameUpper} from './${componentName}'%> */

// 全量引入提醒
warn(
  'You are using a whole package of n22-mobile, ' +
    'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  'warn',
)

/* global MAN_VERSION */
const version = /* @echo MAN_VERSION */ MAN_VERSION
// const version = '0.1.0'

// 单个组件暴露
export const components = {
  AllHead,
  Content,
  ContentList,
  // HomeHead,
  Foot,
  ActionSheet,
  Captcha,
  Codebox,
  WaveCircle,
  Star,
  Calendar,
  NoticeBar,
  InformationBar,
  Radio,
  RadioItem,
  RadioList,
  Amount,
  ListTabs,
  // Search,
  Steps,
  InputItem,
  Field,
  FieldItem,
  Icon,
  Popup,
  PopupTitleBar,
  Picker,
  DatePicker,
  DropSelectItem,
  Dialog,
  Cashier,
  Ruler,
  Slider,
  ActionBar,
  Button,
  Swiper,
  SwiperItem,
  Switch,
  SwitchItem,
  ImageReader,
  ImageViewer,
  // CASign,
  Check,
  // CheckBox,//--2019-08-15-aliang暂时关闭引用
  CheckGroup,
  CheckList,
  Agree,
  Progress,
  ScrollTable,
  Work,
  Toast,
  ActivityIndicator,
  NumberKeyboard,
  Textarea,
  TabBar,
  Tag,
  Tabs,
  TabPane,
  ScrollView,
  CellItem,
  TabPicker,
  DetailItem,
  Bill,
  ContentLoader,
  DropMenu,

  // Audio,
  // Video,
  // Page,
  // ExamItem
  /* @init<%${componentNameUpper},%> */
}

// 定义插件安装方法
const install = function(Vue) {
  if (!Vue || install.installed) {
    return
  }
  const componentsNames = Object.keys(components)
  componentsNames.forEach(name => {
    const component = components[name]
    if (component.name) {
      Vue.component(component.name, component) // kebab-case
      Vue.component(transformCamelCase(`-${component.name}`), component) // PascalCase
    }
  })

  // 全局服务注入
  //   Vue.prototype.$toast = Toast
  //   Vue.prototype.$dialog = Dialog
  //   Vue.prototype.$actionsheet = ActionSheet
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 集合组件暴露
export {
  install,
  version,
  AllHead,
  Content,
  ContentList,
  // HomeHead,
  Foot,
  ActionSheet,
  Captcha,
  Codebox,
  WaveCircle,
  Star,
  Calendar,
  NoticeBar,
  InformationBar,
  Radio,
  RadioItem,
  RadioList,
  Amount,
  ListTabs,
  // Search,
  Steps,
  InputItem,
  Field,
  FieldItem,
  Icon,
  Popup,
  PopupTitleBar,
  Picker,
  DatePicker,
  DropSelectItem,
  Dialog,
  Cashier,
  Ruler,
  Slider,
  ActionBar,
  Button,
  Swiper,
  SwiperItem,
  Switch,
  SwitchItem,
  ImageReader,
  ImageViewer,
  // CASign,
  Check,
  // CheckBox,//--2019-08-15-aliang暂时关闭引用
  CheckGroup,
  CheckList,
  Agree,
  Progress,
  ScrollTable,
  Work,
  Toast,
  ActivityIndicator,
  NumberKeyboard,
  Textarea,
  TabBar,
  Tag,
  Tabs,
  TabPane,
  ScrollView,
  CellItem,
  TabPicker,
  DetailItem,
  Bill,
  ContentLoader,
  DropMenu,

  // Audio,
  // Video,
  // Page,
  // ExamItem
  /* @init<%${componentNameUpper},%> */
}

export default {
  install,
  version,
}
