---
title: 更新日志
toc: hidden
---


### 0.0.38

`2020-12-01`

- Feat
  - 1、新增`slider`组件`direction`,滑动方向
- Fix
### 0.0.37

`2020-12-01`

- Feat
  - 1、优化`content`组件下拉回掉的方法，需要在传入`props`-`upRefreshFun`,此时不再需要, 直接`@upRefreshFun='...'`
  - 2、`slider`组件的emit`input`返回增减`event`参数（可用于判定是手动更改value还是js自动更改value）
  - 3、更改`head`组件布局形式
  - 4、`field item`新增`markFun`回掉函数的两个`title`、`name`参数
  - 5、`input item`新增`isVirtualKeyboardMove`是否开启移动光标功能
  - 6、`radio`新增`inline`是否内联
- Fix
  - 1、修复`drop-select`组件`this.$emit('hide')`，防止关闭弹出框时，dom不销毁。

### 0.0.36

`2020-08-26`

- Feat
  - 1、新增`textarea`组件`maxLength`属性

- Fix
  - 1、修复`content`组件滑动内容区高度兼容性问题，通过`vw`跟手机实际宽度`px`换算真实的`px`(`0.0.34`版本`Fix-1`的继续修复)。

### 0.0.35

`2020-08-07`

- Feat
  - 1、新增`drop-select-item`组件点击可阻断方法
  - 2、新增`icon`组件`icon`、`iconImg`属性，可以传入gif等的图片
  - 3、新增`toast`组件`loading`方法`iconImg`属性，可以传入gif等的图片
  - 4、调整`toast`组件加载loading位置由左右布局改为上下布局
  - 4、调整`toast`组件`isAutoTop`属性，用于设置，是否在loding的时候，留出顶部的导航栏，以便loading卡死页面可以操作页面关闭等。

- Fix
  - 1、修复`drop-select-item`组件`pickerTitle`属性失效问题。
  - 2、`content`组件返回顶部按钮`mescroll-totop-all`样式`z-index`调整为`999`,解决返回顶部按钮遮挡弹出窗等`popup`弹出层
  - 3、新增`dataListId`表数据标签`id`,修复当存在两个列表页面跳转时，因为默认的id相同，可能会导致，一个页面的接口请求因为延迟，当跳转到另一个页面，数据错误渲染在另一个页面，此时就需要设置两个页面不同的`dataListId`参数，防止此问题发生
  - 4、dom.js `allScreenHeight`属性值由视窗高度更改为网页高度
  - 5、dom.js `dealPxToVw`属性增增加`autoUnit`值，默认为`false`不拼接单位。当给定`autoUnit`-`false`并且视窗宽度大于1500时候（即类似pc端），给定`px`单位，不做vw的转换
  - 6、修复`toast`-`top`-`bottom`时候的部分ios系统布未局中显示兼容性问题

### 0.0.34

`2020-07-16`

- Feat
  - 新增`isAutoHeight`prop，用于修复Fix-1带来的历史页面可能因为自动修复带来的问题
  - 优化`textarea`组件，新增`textarea`组件文档
  - 优化`dropSelectItem`组件`arrow`属性

- Fix
  - 1、修复`content`组件因为顶部的`top`，导致不使用swiper的内容区域底部遮挡住上面`top`所产生的距离。
      （因为`vw`单位会存在过高问题，目前更改为`px`单位）
  - 2、美化`toast`组件使用`icon`时，太靠近文字。

### 0.0.33

`2020-07-13`

- Feat
  - 新增`drop-select`组件支持地址二级，修改多级code连接符为可修改`cutMark`。

### 0.0.32

`2020-07-03`

- Fix
  - 修复`radio-item`type为checkbox时，选中返回数组。

### 0.0.31

`2020-06-24`

- Fix
  - 修复`radio-item`更改modal值时显示不改变

### 0.0.30

`2020-06-24`

- Fix
  - 修复`radio-item`兼容性问题

### 0.0.29

`2020-06-24`

- feat
  - `checkbox`组件增加Tag是否显示
  - 水波组件增加内容展示
- Fix
  - 修复popup弹出ios上body滑动橡皮筋效果遮挡问题

### 0.0.28

`2020-05-29`

- Fix
  - `radio-item`修复`checkbox`情况下出入数组value时回显不显示问题
  - 修复popup弹出ios上body滑动橡皮筋效果遮挡问题

### 0.0.27

`2020-05-23`

- Fix
  - `work`修复因新加搜索功能导致滑动列表数据显示不全问题
  - `content`修复列表接口加载返回异常时，如果返回为空，则不显示异常及刷新按钮

### 0.0.26

`2020-05-23`

- Fix
  - `tab-bar`修复value如果绑定的是下标的时候，currentIndex初始值的问题

### 0.0.25

`2020-05-06`

- Feat
  - `Dialog`属性`title`、`btn`，由v-text修改为v-html，因此0.0.25版本可以使用String或者vnode
  - `Content`新增`isAutoMescrollDown`属性，控制mescroll是否在第一次进入时立刻触发一次下拉加载
  - `Content`新增`htmlNoData`属性，控制mescroll上拉加载到最底部
  - `head`组件优化click-left监听事件判断，如果传入了@click-left，则不触发this.back()方法。
- Fix
  - `head`修复头部样式污染n22-icon样式问题
  - `switch-item`修复changeData改变回掉事件中，第二个参数value值错误问题
  - `radio-item`修复value值为boolean类型时不选中问题

### 0.0.24

`2020-05-06`

- Fix
  - `content`修复tab中isMescrollUp
  - `switch-item`修复没有options时，true跟false的boolearn值回显赋值问题（mounted赋值错误）
  - `switch-item`修复changeData改变回掉事件中，第二个参数value值错误问题

### 0.0.23

`2020-04-12`

- Feat
  - `TabBar`新增key、value自定义属性值
- Fix
  - `radio`修复
  - `dom`修复dom距离

### 0.0.22

`2020-04-04`

- Feat
  - `radio-item`增加属性`plain`镂空属性
  - `drop-select-item`增加统一表单滑动选择器demo实例

- Fix
  - `drop-select-item`修复type为single时赋初始值不显示问题
  - `drop-select-item`修复type为work时三级职业回显问题
  - `check-group`修复itemObject参数
  - `check`修复check选中icon参数
  - `picker`修复picker demo显示问题