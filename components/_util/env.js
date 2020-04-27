import Vue from 'vue'

// Development environment
export const isProd = process.env.NODE_ENV === 'production'

// Browser environment sniffing
export const inBrowser = !Vue.prototype.$isServer || typeof window !== 'undefined'
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isAndroid = UA && UA.indexOf('android') > 0
export const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
export const root = typeof window !== 'undefined' ? window : global
export const U = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
export const isWechat = UA.match(/MicroMessenger/i) === 'micromessenger' && !!U
