import { mount } from '@vue/test-utils'
import registerGlobalComponents from 'src/plugins/global-components'
import { router } from 'src/router'
import AppHeader from './AppHeader.vue'

describe('# AppHeader', () => {
  beforeEach(async () => {
    await router.push('/')
  })

  it('should render correctly', () => {
    const wrapper = mount(AppHeader, {
      global: { plugins: [registerGlobalComponents, router] },
    })

    expect(wrapper.text()).toContain('header')
  })
})
