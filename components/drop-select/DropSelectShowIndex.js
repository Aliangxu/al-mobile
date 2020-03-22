import Vue from 'vue'
import DropSelectShow from './DropSelectShow'

/* istanbul ignore next */
const noop = function() {}

// all active instances
const instances = []

/**
 * DropSelectShow factory
 *
 * @param {Object} props
 * @return {DropSelectShow}
 */
const generate = function({
  _this,
  appendTo,
  type,
  selectValue,
  title,
  notSelectIdf,
  pickerData,
  defaultDate,
  minDate,
  maxDate,
  btns,
}) {
  const DropSelectShowConstructor = Vue.extend(DropSelectShow)
  const vm = new DropSelectShowConstructor({
    propsData: {
      value: true,
      _this,
      appendTo,
      type,
      selectValue,
      title,
      notSelectIdf,
      pickerData,
      defaultDate,
      minDate,
      maxDate,
      btns,
    },
  }).$mount()

  instances.push(vm)

  vm.$on('input', val => {
    /* istanbul ignore else */
    if (!val) {
      vm.value = false
    }
  })
  vm.$on('hide', () => {
    const index = instances.indexOf(vm)
    /* istanbul ignore else */
    if (index >= 0) {
      instances.splice(index, 1)
    }
    vm.$destroy()
  })

  return vm
}

/**
 * Dynamically create a confirm DropSelectShow
 *
 * @param {Object} props
 * @return {DropSelectShow}
 */
DropSelectShow.show = ({
  appendTo,
  type,
  selectValue,
  title,
  notSelectIdf,
  pickerData,
  defaultDate,
  minDate,
  maxDate,
  onPickerConfirm = noop,
  onDatePickerChange = noop,
  onDatePickerConfirm = noop,
  onAddressPickerConfirm = noop,
  onNotSelectFun = noop,
}) => {
  const vm = generate({
    appendTo,
    type,
    selectValue,
    title,
    notSelectIdf,
    pickerData,
    defaultDate,
    minDate,
    maxDate,
    btns: {
      onPickerConfirm: {
        handler: /* istanbul ignore next */ (index, value) => {
          console.log('%c index, value', 'color:green;', `${index}, ${value}`)
          if (onPickerConfirm(index, value) !== false) {
            vm.close()
          }
        },
      },
      onDatePickerChange: {
        handler: /* istanbul ignore next */ (columnIndex, itemIndex, value) => {
          console.log('%c columnIndex, itemIndex, value', 'color:green;', `${columnIndex}, ${itemIndex}, ${value}`)
          if (onDatePickerChange(columnIndex, itemIndex, value) !== false) {
            // vm.close()
          }
        },
      },
      onDatePickerConfirm: {
        handler: /* istanbul ignore next */ (columnsValue, value) => {
          if (onDatePickerConfirm(columnsValue, value) !== false) {
            vm.close()
          }
        },
      },
      onAddressPickerConfirm: {
        handler: /* istanbul ignore next */ (columnsValue, value, options) => {
          if (onAddressPickerConfirm(columnsValue, value, options) !== false) {
            vm.close()
          }
        },
      },
      onNotSelectFun: {
        handler: /* istanbul ignore next */ (columnsValue, value, options) => {
          if (onNotSelectFun(columnsValue, value, options) !== false) {
            // vm.close()
          }
        },
      },
    },
  })

  return vm
}

/**
 * Close all actived static DropSelectShows
 *
 * @static
 * @return void
 */
DropSelectShow.closeAll = () => {
  instances.forEach(instance => {
    instance.close()
  })
}

export default DropSelectShow
