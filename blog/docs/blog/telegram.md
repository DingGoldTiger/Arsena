


 # Telegram bottom

  记录一次 node 创建telegram bot 的开发过程

   ::: tip
   创建 bot 一方面是创建一个用户，另一方面是获得一个唯一的身份验证令牌。
   令牌看起来像123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
   用于调用 [Bot API](https://core.telegram.org/bots/api)
   一下会默认已经有telegram账号和翻墙
   :::

  ## 创建bot



  在telegram搜索BotFather :alien: 添加好友 通过名字就知道这是机器人的爸爸，你要用他的儿子必须要和他打招呼的他会和创建一个属于你们的bot :stuck_out_tongue_winking_eye:  进入聊天室，点击start你会收到

  ![An image](/telegram/bf.jpg)

  BotFather回复的是创建和设置bot的指令，只要在输入框输入就可以创建和设置了
  输入/newbot 创建一个新的机器人 按照BotFather提示操作最终你会得到这样的回复

  ![An image](/telegram/bf2.jpg)

  红色的就是bot的key [链接](https://core.telegram.org/bots/api)为bot API一个bot就这样诞生了

  ## 编写bot代码
  ###### 安装
    npm install --save node-telegram-bot-API
  ###### 使用
  ```js
    const TelegramBot = require('node-telegram-bot-api');

    // replace the value below with the Telegram token you receive from @BotFather
    const token = 'YOUR_TELEGRAM_BOT_TOKEN';

    // Create a bot that uses 'polling' to fetch new updates
    const bot = new TelegramBot(token, {polling: true});

    // Matches "/echo [whatever]"
    bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
    });

    // Listen for any kind of message. There are different kinds of
    // messages.
    bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
    });
  ```
  ::: warning
  删除消息需要给bot 分配管理员权限
  :::
