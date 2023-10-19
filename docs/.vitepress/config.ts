const { demoBlockPlugin } = require('vitepress-theme-demoblock')

const sidebar = [
  {
    text: '基础',
    items: [
      {
        text: '安装',
        link: '/guide/install'
      },
      {
        text: '快速上手',
        link: '/guide/getting-started'
      }
    ]
  },
  {
    text: 'Basic 基础组件',
    items: [
      { text: 'Button 按钮', link: '/components/button/' },
      { text: 'Icon 图标', link: '/components/icon/' }
    ]
  },
  {
    text: 'Form 表单组件',
    items: [
      {
        text: 'Input 输入框',
        link: '/components/input/'
      }
    ]
  },
  {
    text: 'Data 数据展示',
    items: [
      {
        text: 'Pagination 分页',
        link: '/components/pagination/'
      }
    ]
  },
  {
    text: 'Navigation 导航',
    items: [
      {
        text: 'Tabs 标签页',
        link: '/components/tabs/'
      }
    ]
  },
  {
    text: 'Feedback 反馈组件',
    items: [
      {
        text: 'Dialog 对话框',
        link: '/components/dialog/'
      }
    ]
  }
]

const config = {
  themeConfig: {
    sidebar
  },
  markdown: {
    config: md => {
      md.use(demoBlockPlugin)
    }
  }
}

export default config
