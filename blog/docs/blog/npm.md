
# NPM 发布

  <img style='max-width:40%' :src="$withBase('/npm.svg')"></img>

   #### 安装 node.js
   >相信你已经安装了
   #### 创建自己的npm 包
   目录结构：
   ```
  .
  ├── README.md
  ├── a.js
  └── package.json
  ```

 > README.md 记录的发布包的用处以及怎么使用
  a.js 是你自己的逻辑代码
  package.json 是你的包信息
  #### 开发
  为了简单便于理解，就开发一个打印 I LOVE 的程序
  a.js
  ```js
      function say (){
        console.error(' I')
        setTimeout(function(){
        console.error('LOVE')
        },1000)
        setTimeout(function(){
        console.error('YOU')
        },2000)
      }
      exports.say=say
  ```
  使用命令 npm init 创建package.json
  ```js
  {
    "name": "dingjinhu-npm-1",
    "version": "1.0.6",
    "description": "",
    "main": "a.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "dougie",
    "license": "ISC"
  }
  ```
  #### 发布

  ###### 添加账户

    创建发布人 会输入npm 用户名 密码 还有邮箱 (邮箱需要认证不然会报错)

    npm adduser

  ###### 发布
    npm publish

  ###### 更新

 更新npm包和发布一样执行npm publish  

  ::: warning
  必须更改npm包的版本号，即package.json的version字段，否则会报错：</br>
  npm ERR! publish Failed PUT 403 </br>
  npm ERR! code E403 </br>
  npm ERR! You cannot publish over the previously published version 1.0.0.
  :::
