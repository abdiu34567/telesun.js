## Image Changer Bot

> in this tutorial we are going to develop a bot that changes from the first photo to the next

![Image Changer](../../assets/example/Image%20changer.png)

## Getting Started

- first we need `bot token` from bot father
- then `import` bot library, you can follow [here](https://github.com/abdiu34567/telesun.js/blob/main/Getting%20Started%20With%20App%20Script.md)

```js
//<<code.gs>>

// find from bot father
let botToken = '123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ'

Bot.Telesun(botToken)
```

### Setting Webhook

> To set webhook you need `webhook url`, and you can find it [here](https://github.com/abdiu34567/telesun.js/blob/main/Deployments/First%20Time%20Deployment.md)
>
> create and run function `SettingWebHook()`

```js
//<<code.gs>>

// find from bot father
let botToken = '123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ'

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

let botToken = '123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ'

Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)

  if (apiResponse.callback_query) return Callbacks(apiResponse)
  else return StartCommand(apiResponse)
}
```

> create another `file` with any name, but i will go with `States.gs`

```js
//<<States.gs>>

//runs when any inline keyboard is clicked
function Callbacks(apiResponse) {
  let callback = Bot.CallbackContent(apiResponse)
  let chatId = callback.id
  let data = callback.callback_data
  let msg_Id = callback.msg_id

  if (data == 'next') return NextPhoto(chatId, msg_Id)
  else if (data == 'prev') return PreviousPhoto(chatId, msg_Id)
}

//runs when next inline keyboard is clicked
function NextPhoto(chatId, msg_Id) {
  let media = {
    type: 'photo',
    media:
      'https://storage.googleapis.com/infiflexnew.appspot.com/5643291244625920',
    caption: '🌟 <b>Apps Script is Cool</b>',
    parse_mode: 'HTML',
  }

  let prevKbd = {
    inline_keyboard: [
      [
        {
          text: '🔙 Previous ',
          callback_data: 'prev',
        },
      ],
    ],
  }
  return Bot.editMessageMedia(chatId, msg_Id, undefined, media, prevKbd)
}

//run when previous inline keyboard is clicked
function PreviousPhoto(chatId, msg_Id) {
  let media = {
    type: 'photo',
    media:
      'https://www.solvetic.com/uploads/monthly_11_2014/tutorials-2308-0-91146200-1417046587.jpg',
    caption: '💪 <b>Apps Script is Fun</b>',
    parse_mode: 'HTML',
  }

  let nextKbd = {
    inline_keyboard: [
      [
        {
          text: 'Next ➡️',
          callback_data: 'next',
        },
      ],
    ],
  }
  return Bot.editMessageMedia(chatId, msg_Id, undefined, media, nextKbd)
}

//run when /start command is sent
function StartCommand(apiResponse) {
  let chatId = Bot.TextContents(apiResponse).id
  let photoUrl = `https://www.solvetic.com/uploads/monthly_11_2014/tutorials-2308-0-91146200-1417046587.jpg`
  let caption = '💪 <b>Apps Script is Fun</b>'

  let nextKbd = {
    inline_keyboard: [
      [
        {
          text: 'Next ➡️',
          callback_data: 'next',
        },
      ],
    ],
  }
  return Bot.sendPhoto(chatId, photoUrl, 'HTML', caption, nextKbd)
}
```

Finaly delopy with [Managed Deploy](https://github.com/abdiu34567/telesun.js/blob/main/Deployments/Manage%20Deployment.md)

🌟💪 Check Your Bot
