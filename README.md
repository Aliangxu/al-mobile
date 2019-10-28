<p align="center"></p>
<h2 align="center">al-mobile</h2> 
<p align="center">A mobile UI toolkit, based on Vue.js 2, designed for financial scenarios</p>
<br/>

**English** | [中文](./README.zh-CN.md)

## Links

* [Home](https://github.com/Aliangxu/al-mobile/)
* [Development Guide](components/development.md)


## Install & Usage

### Manually

```bash
npm install al-mobile --save
```

### Import

```javascript
import { Button } from 'al-mobile'
```

* Manually import

```javascript
import Button from 'al-mobile/lib/button'
```

* Totally import

```javascript
import Vue from 'vue'
import alMobile from 'al-mobile'
import 'al-mobile/lib/al-mobile.css'

Vue.use(alMobile)
```

## Development

```bash
git clone https://github.com/Aliangxu/al-mobile.git
cd al-mobile
npm install
npm run dev
```
Open your browser and visit http://127.0.0.1:4000. 