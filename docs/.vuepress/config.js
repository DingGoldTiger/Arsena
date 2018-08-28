module.exports = {
  base: '/',
  dest: 'dist', //打包后的文件
  title: 'dougie',
  port: '8101',
  markdown: {
    lineNumbers: true
  },
  description: '记录自己的技术',
  themeConfig: {
    displayAllHeaders: true,// 默认值：false
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: 'http://blog.jhacx.com' },
      {
        text: '我们的项目',
        items: [
          { text: 'thinkjs-vue-admin', link: 'http://admin.jhacx.com' },
        ]
      },
      { text: '关于我们', link: 'http://www.jhacx.com' },
    ],
    sidebar: [
      {
        title: 'html',
        children: [
          '/konwlegde/html/',
        ]
      },
      {
        title: 'css',
        children: [
          '/konwlegde/css/',
        ]
      }
    ]












  }
}
