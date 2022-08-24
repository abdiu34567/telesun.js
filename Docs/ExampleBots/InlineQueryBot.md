## Inline Query Bot

> in this tutorial we are going to develop a bot that can query inline datas by using `title` and `description` from json data
>
> ![Result](../../assets/example/inlineQuery.png)

## Getting Started

- first we need `bot token` from bot father
- then `import` bot library, you can follow [here](https://github.com/abdiu34567/telesun.js/blob/main/Getting%20Started%20With%20App%20Script.md)
- in order for inline query to work for your bot follow :
  - `Bot Father -> /mybots -> (chose your bot) -> Bot Setting -> inline mode -> Turn inline mode on`

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
  if (apiResponse.inline_query) return QueryData(apiResponse)

  return
}
```

> create another `file` with any name but i will go with `InlineQuery.gs`

```js
//<<InlineQuery.gs>>

//runs when user types bot username like @Tryandcatchbot
function QueryData(apiResponse) {
  let datas = [
    {
      title: 'JavaScript',
      description: 'core technologies of the World Wide Web',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6J82nQKFRcR8SosVxPiNjsFKSa0kHlQE_Q&usqp=CAU',
    },
    {
      title: 'Node.js',
      description: 'asynchronous event-driven JavaScript runtime',
      image:
        'https://cdn.gabrieleromanato.com/5c37214980b3/uploads/2018/09/nodejs.jpg',
    },
    {
      title: 'Apps Script',
      description:
        'a rapid application development platform that makes it fast and easy to create business applications that integrate with Google Workspace',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1v8Chg0hK6RNiyHUMx4gcpVY_3izSNbiug&usqp=CAU',
    },
    {
      title: 'Rust',
      description: 'a multi-paradigm, general-purpose programming language',
      image: 'https://www.sipexe.com/assets/courses/rust_programming.jpg',
    },
  ]

  let queryApi = Bot.InlineContents(apiResponse)
  let query = queryApi.query.toLowerCase()
  let queryId = queryApi.queryId
  let inlineData = []

  datas.filter((val, index) => {
    let title = val.title.toLowerCase()
    let description = val.description.toLowerCase()

    if (title.match(query)) inlineData = addData(val, index, inlineData)
    else if (description.match(query))
      inlineData = addData(val, index, inlineData)
  })
  return Bot.answerInlineQuery(queryId, inlineData)
}

function addData(val, index, inlineData) {
  inlineData.push({
    type: 'article',
    id: index,
    title: val.title,
    input_message_content: {
      message_text: val.description,
    },
    url: val.image,
    thumb_url: val.image,
    description: val.description,
  })
  return inlineData
}
```

Finaly delopy with [Managed Deploy](https://github.com/abdiu34567/telesun.js/blob/main/Deployments/Manage%20Deployment.md)

🌟💪 Check Your Bot
