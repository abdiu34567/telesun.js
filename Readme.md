<header>
<img src="./assets/telesun.jpg" alt="logo" height="90" align="left">
<h1 style="display: inline">Telesun.js</h1>

Modern Telegram Bot API framework for App Script

[![Bot API Version](https://img.shields.io/badge/Bot%20API-v6.0-f36caf.svg?style=flat-square)](https://core.telegram.org/bots/api)
![JavaScript](https://img.shields.io/github/languages/top/abdiu34567/Lost_and_Found)
[![Telesun](https://img.shields.io/badge/telesun-v1.0-f36caf.svg?style=flat-square)](https://core.telegram.org/bots/api)
[![English chat](https://img.shields.io/badge/English%20chat-grey?style=flat-square&logo=telegram)](https://t.me/App_Script_Js)

</header>

## Introduction

A Telegram bot is a program that offers functions and automations that Telegram users can integrate in their chats, channels, or groups

Telesun is a library that makes it simple for you to develop your own Telegram bots using JavaScript and [Apps Script](https://developers.google.com/apps-script)

### Features

- Full [Telegram Bot API 6.0](https://core.telegram.org/bots/api) support
- Simpler 🌟
- easier working across Google products like `Youtube`, `Drive`, `Gmail...`
- per click `Deployment` on google cloud
- `Real-Time Database` (Google sheet) already integrated
- Develop `100+` of your Bots
- `Vanilla Javascript` is enough 

---

## [Setting Up & Getting Started With Apps Script](https://github.com/abdiu34567/telesn.js/blob/main/Getting%20Started%20With%20App%20Script.md)

---

<br>

### Example

once you `import library`, then you can create the following function and `go send any message to your bot` and **run** `WelcomeToTelesun` function

```js
//create and send message to your bot, then run this function

function WelcomeToTelesun() {
  //pass your bot token
  Bot.Telesun(<<botToken>>);

  //will executed always
  Bot.Use((ctx) => ctx.reply("Hello World!"));

  //executed when <</start>> command sent to bot
  Bot.Start((ctx)=> ctx.reply("This is start Command"))

  //when <hello> message sent
  Bot.Hears('hello', (ctx)=> ctx.reply("This is hello message"))

  //when photo sent
  Bot.Photo((ctx)=> ctx.reply("This is photo"))
}
```

For additional bot examples see [examples](https://github.com/abdiu34567/telesn.js/tree/main/Docs/ExampleBots) folder

<br>

### Resources

- **[Telegram Group](https://t.me/App_Script_Js)**
- **[GitHub Discussions](https://github.com/abdiu34567/telesn.js/discussions)**

<br>

## Getting started

<br>

### 💊 Telegram token

To use the Telegram Bot API, you first have to get a bot account by chatting with BotFather.

BotFather will give you a token, something like `123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ`.


<br>

### 👩‍💻 Create Your First Registration bot

➖ The bot will register `username` and `password` by [long polling](),<br>
➖ then finally we deploy the bot within just 2 clicks as `webhook` on google cloud

> - [Create apps script project]() 
> - [Import library]()

```js

/**
 * create function called doPost()
 * copy and paste the following code to your doPost()
 * go and type << /startreg >> command on your bot
 * go to apps script and run dopost()
 * then check your bot
 *
 */

/**
 * pass your bot token
 * connecting the bot to Telesun Library
*/
Bot.Telesun(<<botToken>>);

function doPost(){

 /**
  * when user send /startreg command
  */
  Bot.Command('startreg',(ctx)=>{

    //ask user to send thier username
    ctx.reply("Please type Your username ?")

    //save stage that, next the bot is waiting for username
    ctx.setStage("username")
  })

}

```

```js
/**
 * Add the following function to the doPost(), but don't delete the previous code
 * go to bot and send your username
 * go to apps script and run doPost() again
 * then check your bot
 */
function doPost(){

  ......
  
  //if stage is already username
  Bot.Stage('username', (ctx)=>{
      //accessing message text as username
      let _Username = ctx.message().text

      //saving to temporary session which lasts 10 minutes by default
      Bot.TSession.set('username', _Username)

      //ask user to send thier password
      ctx.reply("Please type Your password ?")

      //save stage as waiting for password
      ctx.setStage('password')
  })

}
```

```js
/**
 * Add the following function to the doPost(), but don't delete the previous code
 * go to bot and send your password
 * go to apps script and run doPost() again
 * then check your bot
 */
function doPost(){

  ...... //❌ don't remove previos codes

  ......//❌ don't remove previos codes

   //if stage is already password
  Bot.Stage('password', (ctx)=>{

       //accessing username from temporary session
      let _Username = Bot.TSession.getValue('username')

      //send Message as user already finished the registration
      ctx.reply(`User Registered\n\n`+
     `UserName: ${_Username}`+
     `Password: ${ctx.message().text}`)
    }
  })


}


```

<br>

### 📡 Deploying Registration Bot

In Order to deploy your bot, first, check :

- your main file is `code.gs`
- your main function is `doPost(e)`

Then, we need to `set webhook` <br>
> you can get your `webhook url` after u have followed [Deployment]() steps

```js
/**
 * Create a setWebHook() function above <<doPost>> but below <<Bot.Telesun()>>
 * 
 * run setWebHook() function
 * then check the log, if successfully set
 * after successfully set, then you can <<delete>> setWebhook() function
 * finally go and play with your bot
 *
 */
function setWebhook(){
  Bot.setWebHook({url:'https://....'})
}

```
