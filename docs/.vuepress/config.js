module.exports = {
  extend: '@vuepress/theme-default',
  title: 'YinXiaobo 的笔记',
  description: '',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.jpg'
      }
    ]
  ],
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: '发现新的内容',
        buttonText: '刷新'
      }
    },
    '@vuepress/back-to-top': {}
  },
  themeConfig: {
    nav: [
      {
        text: 'Notes',
        items: [
          {
            text: '基础',
            items: [
              { text: 'JavaScript', link: '/js/' },
              { text: 'HTML', link: '/html/' },
              { text: 'CSS', link: '/css/' }
            ]
          },
          {
            text: '构建工具',
            items: [{ text: 'Webpack', link: '/webpack/' }]
          },
          {
            text: '框架',
            items: [
              { text: 'Vue', link: '/vue/' },
              { text: 'React', link: '/react/' }
            ]
          },
          {
            text: '综合',
            items: [{ text: '杂项', link: '/sundry/' }]
          }
        ]
      },
      {
        text: '好文收藏',
        link: '/good-article/'
      },
      {
        text: '一些项目',
        items: [
          { text: 'music', link: '/music/' },
          { text: 'PRO', link: '/pro/' }
        ]
      }
    ],
    sidebar: {
      '/js/': [''],
      '/css/': ['', '/css/css模块化'],
      '/html/': [
        '',
        '/html/HTML5的新增标签和属性.md',
        '页面导入样式时_使用link和@import有什么区别.md'
      ],
      '/webpack/': [
        '',
        '/webpack/webpack面试题.md',
        '/webpack/1.什么是webpack.md',
        '/webpack/2.什么是模块打包工具.md',
        '/webpack/3.webpack的安装.md',
        '/webpack/3_2_打包js/打包js.md',
        '/webpack/3_3_编译ES6_7/编译ES6_7.md',
        '/webpack/3-4-TypeScript配置/Typescript配置.md',
        '/webpack/3-5提取公共代码/提取公共代码.md',
        '/webpack/3-6代码分割和懒加载/代码分割和懒加载.md',
        '/webpack/3-9处理CSS/处理CSS.md'
      ],
      '/vue/': ['', '/vue/vue-cli.md', '/vue/封装一个迷你的Vue框架.md'],
      '/react/': [''],
      '/sundry/': ['', '/sundry/知识点整理.md']
    }
  }
}
