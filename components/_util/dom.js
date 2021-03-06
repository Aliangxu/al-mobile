import { inBrowser, isWechat } from './env'

class Dom {
  appendChild () {}
  removeChild () {}
  querySelector () {}
  addEventListener () {}
  removeEventListener () {}
}

const dom = new Dom()
let mdDocument = dom
let mdBody = dom

mdDocument.body = mdBody

if (inBrowser) {
  mdDocument = window.document
  mdBody = document.body
}

const ui = {
  // iPhone X、iPhone XS
  isIPhoneX:
    /iphone/gi.test(window.navigator.userAgent) &&
    window.devicePixelRatio &&
    window.devicePixelRatio === 3 &&
    window.screen.width === 375 &&
    window.screen.height === 812,
  // iPhone XS Max
  isIPhoneXSMax:
    /iphone/gi.test(window.navigator.userAgent) &&
    window.devicePixelRatio &&
    window.devicePixelRatio === 3 &&
    window.screen.width === 414 &&
    window.screen.height === 896,
  // iPhone XR
  isIPhoneXR:
    /iphone/gi.test(window.navigator.userAgent) &&
    window.devicePixelRatio &&
    window.devicePixelRatio === 2 &&
    window.screen.width === 414 &&
    window.screen.height === 896,
  screenWidth: document.documentElement.clientWidth,
  screenHeight: document.documentElement.clientHeight,
  allScreenHeight: document.documentElement.clientHeight,
  screenWidthR (num, fixed) {
    const numR = document.documentElement.clientWidth * (num / 375)
    return parseFloat(numR.toFixed(fixed || 3))
  },
  screenHeightR (num, fixed) {
    const numR = document.documentElement.clientHeight * (num / 667)
    return parseFloat(numR.toFixed(fixed || 3))
  },
  dealPxToVw: (px, autoUnit = false) => {
    if (autoUnit) {
      if (document.documentElement.clientWidth > 1500) {
        return px + 'px'
      } else {
        return px * 0.266 + 'vw'
      }
    } else {
      return px * 0.266
    }
  }
}

const uikz = {
  allHeadTopPx:
      window.navigator.platform === 'iPhone' &&
        window.ALIOSHEAD === 'phone' &&
          (window.cordova || window.GDIJSBridge) &&
        !isWechat
        ? (ui.isIPhoneX || ui.isIPhoneXSMax || ui.isIPhoneXR ? 78 : 64)
        : 44,
  allHeadTopPxVideo:
    ui.isIPhoneX || ui.isIPhoneXSMax || ui.isIPhoneXR
      ? 0
      : window.navigator.platform === 'iPhone' &&
        window.ALIOSHEAD === 'phone' &&
          (window.cordova || window.GDIJSBridge) &&
        !isWechat
        ? 20
        : 0
}

Object.assign(ui, uikz)

export { mdDocument, mdBody, dom, ui }
