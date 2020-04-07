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
|属性 | 说明 | 类型 | 默认值|备注|
|----|-----|------|------|------|
| v-model | 引用传入v-model当前tab的下标 | Number | `0`| 当开启顶部菜单、多个菜单的时候有用 |
| isTop | 是否启用返回顶部按钮 | Boolean | `true`|-|
| isMescrollUp | 是否启用上拉加载进行分页 | Boolean |`true`|△△△△△△△2019-03-12弃用aliang--将此方法移植到tabs数组中|
| isMescrollLoadList | 是否启用下拉时候进行页面重载 | Boolean |`false`|默认为false是开启页面重载而是不开启下拉加载刷新列表第一页数据（此时可以自定义下拉刷新的方法，即传入@upRefreshFun），如果为true则是不开启页面重载，开启内置下拉加载刷新列表第一页数据|
| isMescrollDown | 是否启用下拉刷新 | Boolean | `false`|默认为false启用下拉刷新，如果为true则关闭下拉刷新|
| secMenuIsShowP | 二级菜单是否显示隐藏| Boolean | `true` | 暂时存在bug不可用 |
| listAnm | 列表数据动画 | String | - |eg: `n22-base-slide-left`|
| swiperTop | content距离顶部距离 | Array、Number | `[]\1`|多个列表tab即多个swiperTop,如果多个列表距离顶部相同，则可以传入一个Number|
| swiperBottom | swiper距离底部距离 | Array | `[]`|多个列表tab即多个swiperBottom|
| page | 分页对象 | Object | `{num: 1,size: 10,time: null}`|-|
| tabs | 当前页面需要的tab | Array | `[{name: "默认单个列表不展示",listType: "1",mescroll: null,list: [],isListInit: false,isMescrollUp: true,upCallbackFun: "",emptyProp: ""}]`|页面初始化对象-可参考下面的样例>>>>mescroll：当前下拉刷新上拉加载的mescroll对象，list：下拉数据数组，isListInit：是否初始化mescroll列表list-默认为false未初始化，isMescrollUp：是否启用上拉加载进行分页，upCallbackFun：上拉加载触发回调方法（一般为分页接口的调用）,emptyProp：空数据对象-可参考下面emptyProp|
| upCallbackFun | 查询数据列表回调的后台接口名称--即自定义分页查询需要掉用的方法 | Boolean |`true`|△△△△△△△2019-03-12弃用aliang--将此方法移植到tabs数组中|
| upRefreshFun | 非列表数据级别的下拉刷新回调方法名称 | String | - |-|
| backgroundColor | Swiper背景颜色 | String | - |-|
| emptyProp | 数据为空的时候需要展示的图片、文本、按钮...对象 | Object | - |-|
| needSwiper | 是否启用swiper | Boolean | `false` |-|

##### tabs样例
```
[{
    label: "我的培训",// tab-显示文本
    name: 0,// tab标示-多个对象的标示必须不一样
    flag: "2",// 自定义添加标示
    upCallbackFun: "selectListByPage",
    isMescrollUp: true,
    mescroll: null,
    list: [],
    isListInit: false,
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

##### @handleScroll()
mescroll的滑动触发事件
