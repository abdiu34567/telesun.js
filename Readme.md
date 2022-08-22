<header>
<img src="assets/abol.png" alt="logo" height="90" align="left">
<h1 style="display: inline">telesn.js</h1>

Modern Telegram Bot API framework for App Script

[![Bot API Version](https://img.shields.io/badge/Bot%20API-v6.0-f36caf.svg?style=flat-square)](https://core.telegram.org/bots/api)
![JavaScript](https://img.shields.io/github/languages/top/abdiu34567/Lost_and_Found)
[![Telesn](https://img.shields.io/badge/telesn-v1.0-f36caf.svg?style=flat-square)](https://core.telegram.org/bots/api)
[![English chat](https://img.shields.io/badge/English%20chat-grey?style=flat-square&logo=telegram)](https://t.me/App_Script_Js)

</header>

## Introduction

A Telegram bot is a program that offers functions and automations that Telegram users can integrate in their chats, channels, or groups

Telesn is a library that makes it simple for you to develop your own Telegram bots using JavaScript and [Apps Script](https://developers.google.com/apps-script)

### Features

- Simpler
- easier working across Google products
- per click Deployment on google cloud
- Real Time Database(Google sheet) already integrated

---

## [Setting Up & Getting Started With Apps Script](https://github.com/abdiu34567/telesn.js/blob/main/Getting%20Started%20With%20App%20Script.md)

---

### Example

once you `import library`, and you identify your `telegram chat id`, then you can create function like the following and send direct message to the bot chat id

```js
Bot.Telesn(botToken)

//create and run this function, the message will directly sent to the user chat Id

function SendMessage() {
  let chatId = '1173180004' //change this chat id to yours
  return Bot.sendMessage(chatId, 'hello User')
}
```

For additional bot examples see [examples](https://github.com/abdiu34567/telesn.js/tree/main/Docs/ExampleBots) folder

### Resources

- [Telegram group](https://t.me/App_Script_Js)
- [GitHub Discussions](https://github.com/abdiu34567/telesn.js/discussions)

## Getting started

### <u> Telegram token </u>

To use the Telegram Bot API, you first have to get a bot account by chatting with BotFather.

BotFather will give you a token, something like `123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ`.

### Import library

- check [here](https://github.com/abdiu34567/telesn.js/blob/main/Getting%20Started%20With%20App%20Script.md) to follow the steps of importing library

### Setting Webhook

You only need to `set webhook once(1)`, but if you `delete webhook` then you need to set it up again

for `webhook url` check >> [here](https://github.com/abdiu34567/telesn.js/blob/main/Deployments/First%20Time%20Deployment.md)

To `set webhook` then you need to `run` the following function called `SettingWebHook()`

```js
// find from bot father
let botToken = '123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ'

//find on Deployment
let webhookUrl =
  'https://script.google.com/macros/s/AKfycbyTJNTD5HsnQMUsT-qX4AUQCd6Moex3zyf9cgdmlzly-mPxmlRlaxzt8lKhljq1zr6Ow/exec'

Bot.Telesn(botToken)

function SettingWebHook() {
  return Bot.setWebHook(webHookUrl)
}
```

### Adding `doPost` Function

When a program sends the app an HTTP POST request, Apps Script runs `doPost(e)` function

For more >> [here](https://developers.google.com/apps-script/guides/web)

`Update` your previous code like this 👇

```js
// find from bot father
let botToken = '123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ'

Bot.Telesn(botToken)

//the bot will reply the same text message you sent
function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id
  let text = TextContents(apiResponse).text
  return Bot.sendMessage(chatId, text)
}
```

once you create your `doPost(e)` function this way then, you can delpoy with [managed deployment](https://github.com/abdiu34567/telesn.js/blob/main/Deployments/First%20Time%20Deployment.md) and check your `bot`

### <u>Deployment</u>

after make any `change on your code`, then it is must you `Deploy` your code, otherwise you can't see any change, for more [Deployment](https://github.com/abdiu34567/telesn.js/tree/main/Deployments)

- if you are deploying your code first time follow [New Deploymet](https://github.com/abdiu34567/telesn.js/blob/main/Deployments/First%20Time%20Deployment.md)
- if not follow [Manage Deployment](https://github.com/abdiu34567/telesn.js/blob/main/Deployments/First%20Time%20Deployment.md)

> you can use `new Deployment` any time you like, but after you deploy
>
> - Copy the web app url and paste on `webhookurl variable`
> - run `setWebHook` function `(you don't need to deploy for this)`

```js
let botToken = '779238246:AAEkFeunpG-lg3pc8eoAda2svGHu3O_dIA'
let webHookUrl =
  'https://script.google.com/macros/s/AKfycbxr03EKxm336KxtsaoHJ49JlEfaw5CzOG0ys0DMxPmKjlsaFkIFeqBVYM-1CGs-KjT_g/exec'

Bot.Telesn(botToken)
// for only new Deployment
// this function will set webhook on
function setWebHook() {
  return Bot.setWebHook(webHookUrl)
}

//the bot will reply the same text message you sent
function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id
  let text = TextContents(apiResponse).text
  return Bot.sendMessage(chatId, text)
}
```

> you can delete `setWebHook` function and `webhookurl variable` when deploying with `managed deployment`

## Best Practice

app script won't show you any `code error` from `doPost`, so we need to track the error's by sending to bot as a message, for more [Best Practices](https://github.com/abdiu34567/telesn.js/blob/main/Best%20Practices.md)

- edit `doPost` function as the following
- add `try catch` error handling

```js
let botToken = '779238246:AAEkFeunpG-lg3pc8eoAda2svGHu3O_dIA'
let webHookUrl =
  'https://script.google.com/macros/s/AKfycbxr03EKxm336KxtsaoHJ49JlEfaw5CzOG0ys0DMxPmKjlsaFkIFeqBVYM-1CGs-KjT_g/exec'

Bot.Telesn(botToken)
Bot.setWebHook(webHookUrl) //u can use this way when managed deployment

//admin chat id to send errors to
let admin = '1173180004'
//this will send any error to the Admin chat id you specified
function doPost(e) {
  try {
    const apiResponse = JSON.parse(e.postData.contents)
    let chatId = Bot.TextContents(apiResponse).id
    let text = TextContents(apiResponse).text
    return Bot.sendMessage(chatId, text)
  } catch (err) {
    return Bot.sendMessage(admin, err)
  }
}
```
