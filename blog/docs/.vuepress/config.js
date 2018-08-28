module.exports = {
  base: '/',
  dest: './dist', //打包后的文件
  title: 'dougie',
  port: '8100',
  markdown: {
    lineNumbers: true
  },
  description: '打造自己的武器库',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于我们', link: 'http://www.jhacx.com' },
      {
        text: '我们的项目',
        items: [
          { text: 'thinkjs-vue-admin', link: 'http://admin.jhacx.com' },
        ]
      }
    ]
  }
}
