## Command Bot

> in this tutorial we are going to develop a bot send specific messages for the following commands we sent
>
> `Commands` are:
>
> - `/start`
> - `/inlinekeyboard`
> - `/replykeyboard`
> - `/hidekeyboard`

## Getting Started

- first we need `bot token` from bot father
- then `import` bot library, you can follow [here](https://github.com/abdiu34567/telesun.js/blob/main/Getting%20Started%20With%20App%20Script.md)

```js
//<<code.gs>>

// find from bot father
let botToken = '123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ'

Bot.Telesun(botToken)
```

### Setting our bot `commands`

- add `setMyCommands` function and run
- on successful call, you will see the commands on your bot by typing >> `/`

```js
//<<code.gs>>
function setMyCommands() {
  let cmd = [
    {
      command: 'start',
      description: 'Starting The bot',
    },
    {
      command: 'inlinekeyboard',
      description: 'Sending inline keyboards',
    },
    {
      command: 'replykeyboard',
      description: 'sending reply keyboards',
    },
    {
      command: 'hidekeyboard',
      description: 'deleting reply keyboards',
    },
  ]
  return Bot.setMyCommands(cmd)
}
```

### Setting Webhook

> To set webhook you need `webhook url`, and you can find it [here](https://github.com/abdiu34567/telesun.js/blob/main/Deployments/First%20Time%20Deployment.md)
>
> create and run function `SettingWebHook()`

```js
//<<code.gs>>

// find from bot father
let botToken = '123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ'

//find on Deployment
let webhookUrl =
  'https://script.google.com/macros/s/AKfycbyTJNTD5HsnQMUsT-qX4AUQCd6Moex3zyf9cgdmlzly-mPxmlRlaxzt8lKhljq1zr6Ow/exec'

Bot.Telesun(botToken)

function SettingWebHook() {
  return Bot.setWebHook(webHookUrl)
}
```

> after successfully set webhook then you can delete `webhook url` and `SettingWebHook` function

### Add `doPost` function

> add `doPost()` function, and doPost function is where all of our code goes in

```js
//<<code.gs>>

// find from bot father
let botToken = '123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ'

Bot.Telesun(botToken)

//the bot will reply the same text message you sent
function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id
  let user = Bot.TextContents(apiResponse).name
  let command = Bot.TextContents(apiResponse).text

  if (command == '/start') return WelcomeMsg(chatId, user)
  else if (command == '/inlinekeyboard') return InlineKbd(chatId)
  else if (command == '/replykeyboard') return Replykbd(chatId)
  else if (command == '/hidekeyboard') return HideKbd(chatId)

  return Bot.sendMessage(chatId, '❌ Command Not Found')
}
```

> create another `file` with any name but i will go with `commands.gs`

```js
//<<commands.gs>>

//runs when user send /start command
function WelcomeMsg(chatId, user) {
  let msg =
    `👤 Welcome ${user}\n\n` +
    `🎗 Commands You Can Use :\n` +
    `➖ /start\n` +
    `➖ /inlinekeyboard\n` +
    `➖ /replykeyboard\n` +
    `➖ /hidekeyboard\n`
  return Bot.sendMessage(chatId, msg)
}

//runs when user send /inlineKeyboard command
function InlineKbd(chatId) {
  let msg = `I Love Js, What about you ?`
  let kbd = {
    inline_keyboard: [
      [
        {
          text: 'Me 2',
          callback_data: 'me2',
        },
      ],
      [
        {
          text: "I don't like",
          callback_data: 'no',
        },
      ],
    ],
  }
  return Bot.sendMessage(chatId, msg, kbd)
}

//runs when user send /ReplyKeyboard command
function Replykbd(chatId) {
  let msg = `I Love Js, What about you`
  let replyKeyboard = {
    keyboard: [
      [{ text: '/start' }, { text: '/inlinekeyboard' }],
      [{ text: '/replykeyboard' }],
      [{ text: '/hidekeyboard' }],
    ],
    one_time_keyboard: true,
    resize_keyboard: true,
  }
  return Bot.sendMessage(chatId, msg, replyKeyboard)
}

//runs when user send /hideKeyboard command
function HideKbd(chatId) {
  let msg = `Hideing Reply Keyboard`
  let removingReply = {
    remove_keyboard: true,
  }
  return Bot.sendMessage(chatId, msg, removingReply)
}
```

Finaly delopy with [Managed Deploy](https://github.com/abdiu34567/telesun.js/blob/main/Deployments/Manage%20Deployment.md)

🌟💪 Check Your Bot
