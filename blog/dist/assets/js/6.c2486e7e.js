(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{286:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("记录一次 node 创建telegram bot 的开发过程")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("创建 bot 一方面是创建一个用户，另一方面是获得一个唯一的身份验证令牌。\n令牌看起来像123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11\n用于调用 "),a("a",{attrs:{href:"https://core.telegram.org/bots/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bot API"),a("OutboundLink")],1),t._v("\n一下会默认已经有telegram账号和翻墙")])]),t._m(1),a("p",[t._v("在telegram搜索BotFather 👽 添加好友 通过名字就知道这是\b机器人的\b爸爸，你要用他的儿子必须要和他打招呼的他会和创建一个属于你们的bot 😜  进入聊天室，点击start你会收到")]),t._m(2),a("p",[t._v("\b\bBotFather\b回复的是创建和设置bot的指令，只要在输入框输入就可以创建和设置了\n输入/newbot 创建一个新的机器人 按照BotFather提示操作最终你会得到这样的回复")]),t._m(3),a("p",[t._v("红色的就是bot的key "),a("a",{attrs:{href:"https://core.telegram.org/bots/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),a("OutboundLink")],1),t._v("为bot API一个bot就这样诞生了")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"telegram-bottom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#telegram-bottom","aria-hidden":"true"}},[this._v("#")]),this._v(" Telegram bottom")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"创建bot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建bot","aria-hidden":"true"}},[this._v("#")]),this._v(" \b创建bot")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("\b"),s("img",{attrs:{src:"/telegram/bf.jpg",alt:"An image"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("\b"),s("img",{attrs:{src:"/telegram/bf2.jpg",alt:"An image"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"编写bot代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写bot代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 编写\bbot代码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h6",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("npm install --\bsave node-telegram-bot-API\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h6",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TelegramBot "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'node-telegram-bot-api'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// replace the value below with the Telegram token you receive from @BotFather")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'YOUR_TELEGRAM_BOT_TOKEN'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Create a bot that uses 'polling' to fetch new updates")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bot "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TelegramBot")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("polling"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v('// Matches "/echo [whatever]"')]),t._v("\n  bot"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("onText")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\/echo (.+)/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" match"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 'msg' is the received Message from Telegram")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 'match' is the result of executing the regexp above on the text content")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// of the message")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chatId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chat"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" resp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" match"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// the captured "whatever"')]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v('// send back the matched "whatever" to the chat')]),t._v("\n  bot"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chatId"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resp"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Listen for any kind of message. There are different kinds of")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// messages.")]),t._v("\n  bot"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'message'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chatId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chat"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// send a message to the chat acknowledging receipt of their message")]),t._v("\n  bot"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendMessage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chatId"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Received your message'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),s("p",[this._v("删除消息需要给bot 分配管理员权限")])])}],!1,null,null,null);s.default=e.exports}}]);