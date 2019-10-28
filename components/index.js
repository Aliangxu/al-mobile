/* eslint comma-dangle: ["error", "always-multiline"] */

// 组件引入
import { warn } from './_util'
import AllHead from './all-head'
import Content from './content'
// import HomeHead from './home-head'
import Foot from './foot'
import ActionSheet from './action-sheet'
import Captcha from './captcha'
import WaveCircle from './wave-circle'
import Star from './star'
import Calendar from './calendar'
import NoticeBar from './notice-bar'
import InformationBar from './information-bar'
import Radio from './radio'
import RadioItem from './radio/indexItem.vue'
import RadioList from './radio-list'
import Amount from './amount'
import ListTabs from './list-tabs'
// import Search from './search'
import Steps from './steps'
import InputItem from './input-item'
import Field from './field'
import FieldItem from './field-item'
import Popup from './popup'
import PopupTitleBar from './popup/title-bar'
import Picker from './picker'
import DatePicker from './date-picker'
import DropSelect from './drop-select/DropSelect'
import Dialog from './dialog'
import Cashier from './cashier'
import Ruler from './ruler'
import Slider from './slider'
import ActionBar from './action-bar'
import Button from './button'
import Swiper from './swiper/swiper'
import Switch from './switch'
import SwitchItem from './switch/indexItem'
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
import Work from './work/work.vue'
import Toast from './toast'
import ActivityIndicator from './activity-indicator'
import NumberKeyboard from './number-keyboard'
import Textarea from './textarea'
import Tabbar from './tab-bar'


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

/* global AL_VERSION */
// const version = /* @echo MAN_VERSION */
const version = '0.1.0'

// 单个组件暴露
export const components = {
    AllHead,
    Content,
    // HomeHead,
    Foot,
    ActionSheet,
    Captcha,
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
    Popup,
    PopupTitleBar,
    Picker,
    DatePicker,
    DropSelect,
    Dialog,
    Cashier,
    Ruler,
    Slider,
    ActionBar,
    Button,
    Swiper,
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
    Textarea,
    Tabbar,


    // Audio,
    // Video,
    // Page,
    // ExamItem
    /* @init<%${componentNameUpper},%> */
}

// 定义插件安装方法
const install = function (Vue) {
    if (!Vue || install.installed) {
        return
    }
    const componentsNames = Object.keys(components)
    componentsNames.forEach(name => {
        const component = components[name]
        component.name && Vue.component(component.name, component)
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
    // HomeHead,
    Foot,
    ActionSheet,
    Captcha,
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
    Popup,
    PopupTitleBar,
    Picker,
    DatePicker,
    DropSelect,
    Dialog,
    Cashier,
    Ruler,
    Slider,
    ActionBar,
    Button,
    Swiper,
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
    Textarea,
    Tabbar,


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
