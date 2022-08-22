## Advanced Concepts

- apps script file extension is `.gs`
- try to refactor your `doPost` function this way

> copy this code to `code.gs` file

```js
let botToken = '779238246:AAEkFeunpG-lg3pc8eoAda2svGHu3O_dIA'

Bot.Telesun(botToken)

//admin chat id to send errors to
let admin = '1173180004'
function doPost(e) {
  try {
    const apiResponse = JSON.parse(e.postData.contents)

    if (apiResponse.message.callback_query) return Callbacks(apiResponse)
    else if (apiResponse.message.inline_query) return MyInline(apiResponse)
    else if (apiResponse.message.photo) return PhotoManager(apiResponse)
    else if (apiResponse.message.contact) return ContactManager()
    else return TextManager(apiResponse)
  } catch (err) {
    return Bot.sendMessage(admin, err)
  }
}
```

> create another file with any name like `functions.gs`

```js
function Callbacks(apiResponse) {
  let id = Bot.TextContents(apiResponse).id
  let command = Bot.TextContents(apiResponse).text

  if(command == '/start') return StartFunction(id)
  else
  // do something
}

function MyInline(apiResponse) {
  let chatId = InlineContents(apiResponse).id
  let query = InlineContents(apiResponse).query

  //do someting
}
```

> also create another file like `startfunction.gs`

```js
function StartFunction(id) {
  return Bot.sendMessage(id, 'My Account Id' + id)
}
```

### `Cache Storage` to speed up

For more check [here](https://developers.google.com/apps-script/reference/cache/cache)
