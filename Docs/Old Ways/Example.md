## Old Ways

old ways are also a good choice ,but if you can set up everything from `scratch`

Example:

create different files like `code.gs, functions.gs, and startfunction.gs`

> `code.gs` 
```js
let botToken = '779238246:AAEkFeunpG-lg3c8eoAda2svGHu3O_dIA'

Bot.Telesun(botToken)

//admin chat id to send errors to
let admin = '1173180004'

function doPost(e) {
  try {
    const apiResponse = JSON.parse(e.postData.contents)

    if (apiResponse.callback_query) return Callbacks(apiResponse)
    else if (apiResponse.inline_query) return MyInline(apiResponse)
    else if (apiResponse.message.photo) return PhotoManager(apiResponse)
    else if (apiResponse.message.contact) return ContactManager(apiResponse)
    else return TextManager(apiResponse)
  } catch (err) {
    return Bot.sendMessage(admin, err)
  }
}
```

> `functions.gs`

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

> `startfunction.gs`

```js
function StartFunction(id) {
  return Bot.sendMessage(id, 'My Account Id: ' + id)
}
```


