const sideBar = {
  '/': [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
    {
      text: '通用', children: [
        { text: 'Button 按钮', link: '/components/button/' }
      ]
    }
  ]
}

const config = {
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  themeConfig: {
    sidebar: sideBar
  },
  markdown: {
    config(md) {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}

export default config
