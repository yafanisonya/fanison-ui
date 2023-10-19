import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import './demoblock.scss'

import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'

import FanisonUI from '../../../scripts/entry'
import '../../../src/style/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FanisonUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}