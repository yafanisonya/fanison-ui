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
      { text: 'Container 布局', link: '/components/container/' },
      { text: 'Icon 图标', link: '/components/icon/' }
    ]
  },
  {
    text: 'Form 表单组件',
    items: [
      {
        text: 'Checkbox 多选框',
        link: '/components/checkbox/'
      },
      {
        text: 'Radio 单选框',
        link: '/components/radio/'
      },
      {
        text: 'Input 输入框',
        link: '/components/input/'
      },
      {
        text: 'Switch 开关',
        link: '/components/switch/'
      }
    ]
  },
  {
    text: 'Data 数据展示',
    items: [
      {
        text: 'Badge 徽章',
        link: '/components/badge/'
      },
      {
        text: 'Card 卡片',
        link: '/components/card/'
      },
      {
        text: 'Collapse 折叠面板',
        link: '/components/collapse/'
      },
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
        text: 'Breadcrumb 面包屑',
        link: '/components/breadcrumb/'
      },
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
        text: 'Alert 提示',
        link: '/components/alert/'
      },
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
