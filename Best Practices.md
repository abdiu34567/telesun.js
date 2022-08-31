## Best Practice

### `try and catch` JavaScript

as of apps script won't show you any `error` on webhook then applying `try catch` is the first thing you need to do

- use it on `doPost` function only
- everything goes between `try and catch`

```js
let botToken = '779238246:AAEkFeunpG-lg3pc8eoAda2svGHu3O_dIA'

Bot.Telesun(botToken)

//admin chat id to send errors to
let admin = '1173180004'
//this will send any error to the Admin chat id you specified
function doPost(e) {
  //wright everything between try and catch
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

### Create and Run Functions for `Test` Purposes

always making a change to `doPost` function and deploy to see a change is not good behaviour at all, rather create any function and `test` what you like

- you can run this function and check if your bot is perfectly `connected`

```js
Bot.Telesun(botToken)

//create and run this function, the message will directly sent to the user chat Id

function SendMessage() {
  let chatId = '1173180004' //change this chat id to yours
  return Bot.sendMessage(chatId, 'hello User')
}
```

### `Returning` Functions

forgeting `returning` function cause many problem to your program

```js
function SendMessage() {
  let chatId = '1173180004' //change this chat id to yours

   //returning(closing) function here
  return Bot.sendMessage(chatId, 'hello User')
}
```

### `Deployment`

after your first deployment , it is better you use `managed deployment`
