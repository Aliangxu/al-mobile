---
title: Content 内容区域-包含swiper、mescroll
---

全局内容区域组件

### 引入

```javascript
import { Content } from 'al-mobile'
或者
import { ContentList } from 'al-mobile'
Vue.component(Content.name, Content)
```
Content跟ContentList区别在于ContentList引入swiper，如果想使用swiper则需要将`needSwiper`置为true并且使用ContentList组件

### 代码演示
<!-- DEMO -->

### API

#### Content/ContentList Props
|属性 | 说明 | 类型 | 默认值| 备注 |
|----|-----|------|------|------|
| v-model | 引用传入v-model当前tab的下标 | Number | `0`| 当开启顶部菜单、多个菜单的时候有用 |
| isTop | 是否启用返回顶部按钮 | Boolean | `true`|-|
| isAutoTopMargin | 是否启用顶部默认给定的预留头部区域的距离 | Boolean | `true`|-|
| isAutoHeight <sup class="version-after">0.0.34+</sup> | 是否启用底部预留因为头部top以及给定的swiperTop导致的底部遮挡的高度 | Boolean | `true`|默认预留给定系统预定的top+传入的swiperTop高度|
| isMescrollUp | 是否启用上拉加载进行分页 | Boolean |`true`|将此方法移植到tabs数组的每个content实例中|
| isAutoMescrollDown <sup class="version-after">0.0.25+</sup>| 列表第一个tab是否首次触发一次自动加载 | Boolean |`true`|默认为true开启内置下拉加载刷新列表第一页数据|
| isMescrollLoadList | 是否启用下拉时候进行页面重载 | Boolean |`false`|默认为false是开启页面重载而是不开启下拉加载刷新列表第一页数据（此时可以自定义下拉刷新的方法，即传入@upRefreshFun），如果为true则是不开启页面重载，开启内置下拉加载刷新列表第一页数据|
| isMescrollDown | 是否启用下拉刷新 | Boolean | `false`|默认为false启用下拉刷新，如果为true则关闭下拉刷新|
| secMenuIsShowP | 二级菜单是否显示隐藏| Boolean | `true` | 暂时存在bug不可用 |
| listAnm | 列表数据动画 | String | - |eg: `n22-base-slide-left`|
| dataListId <sup class="version-after">0.0.35+</sup> | 列表数据标签`id` | String | `dataList` |eg: `login-list`,当存在两个列表页面跳转时，因为默认的id相同，可能会导致，一个页面的接口请求因为延迟，当跳转到另一个页面，数据错误渲染在另一个页面，此时就需要设置两个页面不同的`dataListId`参数，防止此问题。|
| swiperTop | content距离顶部距离 | Array、Number | `[]\1`|多个列表tab即多个swiperTop,如果多个列表距离顶部相同，则可以传入一个Number|
| swiperBottom | swiper距离底部距离 | Array | `[]`|多个列表tab即多个swiperBottom|
| page | 分页对象 | Object | `{num: 1,size: 10,time: null}`|-|
| tabs | 当前页面需要的tab | Array | `[{name: "默认单个列表不展示",listType: "1",mescroll: null,list: [],isListInit: false,isMescrollUp: true,upCallbackFun: "",emptyProp: ""}]`|页面初始化对象-可参考下面的样例>>>>mescroll：当前下拉刷新上拉加载的mescroll对象，list：下拉数据数组，isListInit：是否初始化mescroll列表list-默认为false未初始化，isMescrollUp：是否启用上拉加载进行分页，upCallbackFun：上拉加载触发回调方法（一般为分页接口的调用）,emptyProp：空数据对象-可参考下面emptyProp|
| upCallbackFun | 查询数据列表回调的后台接口名称--即自定义分页查询需要掉用的方法 | Boolean |`true`|△△△△△△△2019-03-12弃用aliang--将此方法移植到tabs数组中|
| upRefreshFun | 非列表数据级别的下拉刷新回调方法名称 | String | - |-|
| backgroundColor | Swiper背景颜色 | String | - |-|
| htmlNodata <sup class="version-after">0.0.25+</sup> | 上拉到最底部无数据时，显示的内容 | String、vnode | `<p class='upwarp-nodata'>-- 我是有底线的 --</p>` | 如果单独tabs对象设置了此参数，则以tabs中的为准 |
| emptyProp | 数据为空的时候需要展示的图片、文本、按钮...对象 | Object | - |-|
| topImg | 右下角返回顶部图片 | String | - |-|
| needSwiper | 是否启用swiper | Boolean | `false` |-|

##### tabs样例
```
[{
    label: "我的培训",// tab-显示文本
    name: 0,// tab标示-多个对象的标示必须不一样
    flag: "2",// 自定义添加标示
    upCallbackFun: "selectListByPage",
    isMescrollUp: true,//是否开启上拉分页布局，此处在不做分页的时候最好也默认启用，虽然底部会多出一个div的高度，但是这样可以规避掉全面屏底部部分遮挡问题
    isLock: false,//是否关闭下拉，当listType不为1时可用
    listType: "1",//当listType为1时，根据`isMescrollDown`值判定是否关闭下拉（如果有多个tab，isMescrollDown为true时则关闭所有tab的下拉），当listType不为1时，根据tab.isLock判定各自的tab是否关闭下拉
    mescroll: null,
    list: [],
    isListInit: false,
    htmlNodata: "<p class="upwarp-nodata">-- 我是有底线的 --</p>",//底部无数据时显示内容，当没有此字段时，默认值为`<p class="upwarp-nodata">-- 我是有底线的 --</p>`
    emptyProp: {
        icon: "./static/images/common/not_data_img.png",
        tip: "暂无相关数据~", // 提示
        btntext: "去报名 >", // 按钮,默认""
        btnClick: this.btnClick
    }
}]
```

##### emptyProp样例
```
emptyProp: {
    icon: "./static/images/common/not_data_img.png",//数据为空时的图片
    tip: "暂无相关数据~", // 提示
    btntext: "去报名 >", // 按钮,默认""
    btnClick: this.btnClick//按钮回调方法
}
```
###### 注
icon--当使用相对路径时使用import导入，下面的icon再直接使用
```
import emptyImage from "../../../_style/images/star24_on.png";
...
...
...
emptyProp: {
    icon: emptyImage,//数据为空时的图片
    tip: "暂无相关数据~", // 提示
    btntext: "去报名 >", // 按钮,默认""
    btnClick: this.btnClick//按钮回调方法
}
```



#### Content Slots

#### slot
填充数据

##### custom-content
仅保留ios顶部距离的功能--mescroll跟swiper全部关闭

##### content
保留所有mescroll跟swiper，仅填充content内容

#### Content Instance Methods

##### changeTab()
swiper-切换菜单
##### mescroll
tabs参数中会注入当前下拉刷新等的mescroll组件
相关mescroll对象的使用可以参考[传送门]http://www.mescroll.com/api.html?v=20200315#methods

#### Content Instance Events

##### @handleScroll(mescroll, y, isUp)
mescroll的滑动触发事件
|参数 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------|------|
| mescroll | mescroll对象 | Object | - | 包含所有的mescroll属性-可做更多扩展 |
| y | y轴滚动距离 | Boolean | - | - |
| isUp | 是否为上滑 | Boolean | - | - |

⚠️注：此方法使用的时候最好结合截流函数（n22-lib工具库`n22-lib/lib/n22-lib-utils/throttle`）使用，因为触发会比较频繁.
