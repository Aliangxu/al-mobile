---
title: ContentLoader 骨架屏
preview: https://qiaoxiyan.com/al-mobile/examples/#/content-loader
---

--使用vue-content-loader组件库

### 引入

```javascript
import { ContentLoader } from 'al-mobile'

Vue.component(ContentLoader.name, ContentLoader)
```

### 代码演示
<!-- DEMO -->

### API

#### ContentLoader Props
|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------|------|
|width|宽度|Number|`400`|-|
|height|高度|Number|`130`|-|
|speed|速度|Number|`2`|-|
|preserveAspectRatio|-|String|`xMidYMid meet`|-|
|primaryColor|滚动动画颜色|String|`#f9f9f9`|-|
|secondaryColor|滚动动画颜色|String|`#ecebeb`|-|
|uniqueKey|-|String|`randomId()`|唯一的ID，你需要使它与SSR一致|
|animate|是否开启动画|Boolean|`true`|-|
|baseUrl|-|String|`empty string`|如果您在<head/>中使用<base url=“/”/>，则此选项是必需的。默认为空字符串。此属性通常用作：<content loader:base url=$route.fullPath“/>，它将用相对路径填充SVG属性|
|primaryOpacity|-|Number|`true`|背景不透明度（0=透明，1=不透明）用于解决Safari中的问题|
|secondaryOpacity|-|Number|`true`|背景不透明度（0=透明，1=不透明）用于解决Safari中的问题|
