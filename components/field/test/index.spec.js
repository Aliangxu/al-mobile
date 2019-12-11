import {FieldItem} from 'al-mobile'
import sinon from 'sinon'
import {shallowMount} from '@vue/test-utils'

describe('Field - Operation', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('field item click event', () => {
    let clicked = false
    wrapper = shallowMount(FieldItem, {
      listeners: {
        click() {
          clicked = true
        },
      },
    })
    const eventSpy = sinon.spy(wrapper.vm, '$emit')

    wrapper.find('.n22-field-item').trigger('click')
    expect(eventSpy.calledWith('click')).toBe(true)
    expect(clicked).toBe(true)
  })
})
