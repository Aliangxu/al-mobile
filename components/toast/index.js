import Vue from 'vue'
import ToastOptions from './toast'

/**
 * Toast factory
 *
 * @param {Object} props
 * @return {Toast}
 */
const Toast = function({
  content = '',
  icon = '',
  maxTextNum = 40,
  iconImg = false,
  iconSvg = false,
  duration = 3000,
  position = 'center',
  hasMask = false,
  isAutoTop = false,
  parentNode = document.body,
  iconOrImgPosition = 'left',
}) {
  let vm = Toast._instance

  if (!vm) {
    const ToastConstructor = Vue.extend(ToastOptions)
    vm = Toast._instance = new ToastConstructor({
      propsData: {
        content,
        maxTextNum,
        icon,
        iconImg,
        iconSvg,
        duration,
        position,
        hasMask,
        isAutoTop,
        iconOrImgPosition,
      },
    }).$mount()
  }

  if (!vm.$el.parentNode) {
    parentNode.appendChild(vm.$el)
  }

  vm.content = content
  vm.maxTextNum = maxTextNum
  vm.icon = icon
  vm.iconImg = iconImg
  vm.iconSvg = iconSvg
  vm.duration = duration
  vm.position = position
  vm.hasMask = hasMask
  vm.isAutoTop = isAutoTop
  vm.iconOrImgPosition = iconOrImgPosition
  // vm.visible = true
  // vm.fire()
  vm.show()

  return vm
}

// There is only one toast singleton
Toast._instance = null

/**
 * Hide toast
 */
Toast.hide = () => {
  const ToastConstructor = Vue.extend(ToastOptions)
  if (Toast._instance instanceof ToastConstructor && Toast._instance.visible) {
    Toast._instance.hide()
  }
}

/**
 * Show info toast
 * @param {string} content
 * @param {number=} [duration=3000]
 * @param {boolean=} [hasMask=false]
 * @param {node=} [parentNode=document.body]
 * @returns {Toast}
 */

Toast.info = (content = '', maxTextNum, duration = 3000, hasMask = false, parentNode = document.body) => {
  return Toast({
    icon: '',
    content,
    maxTextNum,
    duration,
    hasMask,
    parentNode,
  })
}

/**
 * Show succeed toast
 * @param {string} content
 * @param {number=} [duration=3000]
 * @param {boolean=} [hasMask=false]
 * @param {node=} [parentNode=document.body]
 * @returns {Toast}
 */

Toast.succeed = (content = '', maxTextNum, duration = 3000, hasMask = false, parentNode = document.body) => {
  return Toast({
    icon: 'success',
    maxTextNum,
    content,
    duration,
    hasMask,
    parentNode,
  })
}

/**
 * Show failed toast
 * @param {string} content
 * @param {number=} [duration=3000]
 * @param {boolean=} [hasMask=true]
 * @param {node=} [parentNode=document.body]
 * @returns {Toast}
 */

Toast.failed = (content = '', maxTextNum, duration = 3000, hasMask = false, parentNode = document.body) => {
  return Toast({
    icon: 'fail',
    maxTextNum,
    content,
    duration,
    hasMask,
    parentNode,
  })
}

/**
 * Show loading toast
 * @param {string} content
 * @param {number=} [duration=0]
 * @param {boolean=} [hasMask=false]
 * @param {node=} [parentNode=document.body]
 * @param {string} iconImg
 * @returns {Toast}
 */
Toast.loading = (content = '', maxTextNum, duration = 0, hasMask = true, parentNode = document.body, iconImg, isAutoTop, iconOrImgPosition = 'top') => {
  return Toast({
    icon: iconImg || 'spinner',
    iconSvg: !iconImg,
    maxTextNum,
    content,
    duration,
    hasMask,
    parentNode,
    iconImg: !!iconImg,
    isAutoTop,
    iconOrImgPosition,
  })
}

Toast.component = ToastOptions

export default Toast
