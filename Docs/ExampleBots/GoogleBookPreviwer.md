## Google Book Preveiwer Bot

> in this tutorial we are going to develop a bot that ca search across google books, by using Google book api

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
  let chatId = Bot.TextContents(apiResponse).id
  let query = Bot.TextContents(apiResponse).text

  return return FetchGoogleBooks(chatId, query)
}
```

> create another `file` with any name but i will go with `GoogleBookFetcher.gs`

```js
//<<GoogleBookFetcher.gs>>

//runs when user send any message
function FetchGoogleBooks(chatId, query) {
  const books = UrlFetchApp.fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyARWN-E4fPF-Qqva71wyLelQtO51Ysb81Y&country=DE`
  )
  let result = JSON.parse(books).items
  let totalItems = JSON.parse(books).totalItems
  if (Number(totalItems) == 0) {
    return Bot.sendText(chatId, `❌ <i>No book found</i>`)
  }

  let photo = result[0].volumeInfo.previewLink
  let title = result[0].volumeInfo.title
  let subtitle = result[0].volumeInfo.subtitle
  let authors = result[0].volumeInfo.authors
  let selfLink = result[0].volumeInfo.previewLink
  let date = result[0].volumeInfo.publishedDate

  let caption =
    `📚 <b>🎖 Title : </b>``<code>${title}</code>\n` +
    `<b>🎗 Sub Title : </b><code>${subtitle}</code>\n` +
    `<b>🧓 Authors : </b><code>${authors}</code>\n` +
    `<b>⏰ Published Date : </b><code>${date}</code>\n` +
    `<b>📡 Self Link : </b><a>${selfLink}</a>`

  return Bot.sendPhoto(chatId, photo, 'HTML', caption)
}
```

Finaly delopy with [Managed Deploy](https://github.com/abdiu34567/telesun.js/blob/main/Deployments/Manage%20Deployment.md)

🌟💪 Check Your Bot
