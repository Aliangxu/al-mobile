---
title: 更新日志
toc: hidden
---


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