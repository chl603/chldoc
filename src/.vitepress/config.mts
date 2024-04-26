import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/chldoc/',
  title: "Chl-Doc",
  description: "A doc web!",
  themeConfig: {
    logo:'/mario.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Help', link: '/help/markdown-examples' }
    ],
    sidebar:{
      'guide':{
        base:'/guide/',
        items:[
          {
            text: '部署',
            collapsed: false,
            items: [
              { text: 'nginx', link: 'nginx' }
            ]
          }
        ]
      },
      'api':{
        base:'/api/',
        items:[
          {
            text: 'Java',
            collapsed: false,
            items: [
              { text: 'Spring', link: 'spring' }
            ]
          }
        ]
      },
      'help':{
        base:'/help/',
        items:[
          {
            text: '帮助文档',
            collapsed: false,
            items: [
              { text: 'markdown-examples', link: 'markdown-examples' },
              { text: 'api-examples', link: 'api-examples' }
            ]
          }
        ]
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SepterChen/' }
    ],
    search:{provider:'local'}
  }
})
