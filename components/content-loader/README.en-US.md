---
title: ContentLoader Skeleton
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
|Props | Description | Type | Default | Note |
|----|-----|------|------|------|
|width|-|Number|`400`|-|
|height|-|Number|`130`|-|
|speed|-|Number|`2`|-|
|preserveAspectRatio|-|String|`xMidYMid meet`|-|
|primaryColor|animate color|String|`#f9f9f9`|-|
|secondaryColor|animate color|String|`#ecebeb`|-|
|uniqueKey|key|String|`randomId()`|Unique ID, you need to make it consistent for SSR|
|animate|is turn animate|Boolean|`true`|-|
|baseUrl|-|String|`empty string`|Required if you're using <base url="/" /> in your <head />. Defaults to an empty string. This prop is common used as: <content-loader :base-url="$route.fullPath" /> which will fill the SVG attribute with the relative path|
|primaryOpacity|-|Number|`true`|Background opacity (0 = transparent, 1 = opaque) used to solve an issue in Safari|
|secondaryOpacity|-|Number|`true`|Background opacity (0 = transparent, 1 = opaque) used to solve an issue in Safari|
