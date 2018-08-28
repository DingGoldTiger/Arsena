

# 基于VuePress个人博客搭建
## 安装
#### 全局安
    npm install -g vuepress
#### 创建 docs 文件
    mkdir docs
#### 创建 markdown 文件
    # 用于配置主题配置下文会介绍配置参数
    echo '# Hello VuePress' > docs/README.md
#### 创建 package.json 文件

# 添加一些 scripts 脚本
{
  "name": "blog",
  "version": "0.0.1",
  "dependencies": {

  },
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
#### 运行

    #脚本启动
    npm run decs:dev
    # 也可以直接使用 vuepress 命令
    vuepress dev docs
#### 构建
    #脚本启动
    npm run decs:build
    # 也可以直接使用 vuepress 命令
    vuepress dev build

## 配置
 ### 安装成功之后访问 http://localhost:8080/ 就可以看到初始页面 下面进行一些主题配置在 .vuepress 文件下创建 config.js 配置文件

       module.exports = {
         base: '/',
         dest: './dist',
         title: '小两口',
         port: '8100',
         description: '启程'
       }
### 默认主题配置文件 docs/README.md
    ---
    home: true
    heroImage: /hero.png
    actionText: Get Started →
    actionLink: /guide/
    features:
    - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
    - title: Vue-Powered
    details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
    - title: Performant
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
    footer: MIT Licensed | Copyright © 2018-present Evan You
    ---
### 修改默认的主题
    在命令行执行 vuepress eject [targetDir] 这个命令 复制[targetDir]目录下的 theme 到 .vuepress 目录 这样主页将会是 theme/layout.vue
### 主题配置
头部导航栏设置 themeConfig.nav 在 .vuepress/config.js 中添加一下配置
    // .vuepress/config.js

    module.exports = {
      base: '/',
      dest: './dist', //打包后的文件
      title: '小两口',
      port: '8100',
      description: '启程',
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
layout.vue 会通过 site 和 page 获取 获取页面数据 [参考链 接](https://vuepress.vuejs.org/zh/guide/custom-themes.html)
theme/util.js 封装了需要的函数 可以自己按需集成

## 应用程序级别增强
由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 .vuepress/enhanceApp.js 文件来做一些应用级别的配置，当该文件存在的时候，
会被导入到应用内部。enhanceApp.js 应该 export default 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。
你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：

    export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
    }) => {
    // ...做一些其他的应用级别的优化
    }
## 简单的 CSS 覆盖
如果你希望对默认主题的样式应用简单覆盖，则可以创建一个 .vuepress/override.styl 文件。 这是 Stylus 文件，但你也可以使用普通的 CSS 语法。

有几个颜色变量可以调整：

    // 显示默认值
    $accentColor = #3eaf7c
    $textColor = #2c3e50
    $borderColor = #eaecef
    $codeBgColor = #282c34
