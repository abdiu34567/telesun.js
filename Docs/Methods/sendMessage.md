## sendMessage

> Use this method to send text messages. On success, the sent Message is returned.
>
> For more check [sendMessage](https://core.telegram.org/bots/api#sendmessage) method
>
> This method can take up 10 parameters
>
> some of the parameters have default values
>
> - chat_id `required`
> - text `required`
> - parse_mode = 'HTML'
> - reply_markup
> - entities
> - disable_web_page_preview = false
> - disable_notification = false
> - protect_content = false
> - reply_to_message_id
> - allow_sending_without_reply = false

```js
const botUrl = Bot.Telesn(botToken)

// create and run function like this if only you know chat id of the user.
// this function will send 'hello some one' message to 1173180004 (user)
function sendMessage() {
  let someOneChatId = '1173180004'
  return Bot.sendMessage(someOneChatId, 'Hello Some One')
}
```

```js
const botUrl = Bot.Telesun(botToken)
Bot.setWebHook(webhookUrl)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)

  //accessing user chat id from the response API
  let myChatId = Bot.TextContents(apiResponse).id

  return Bot.sendMessage(myChatId, ' Hello Who ever Using This Bot')
}
```

```js

const botUrl = Bot.Telesun(botToken)
Bot.setWebHook(webhookUrl)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)

  //accessing user chat id from the response API
  let myChatId = Bot.TextContents(apiResponse).id

  //applying All parameters

  let inlinekeyboard = {
  "inline_keyboard": [
    [{
      "text": "Number",
      "callback_data": "number"
    }], [{
      "text": "String",
      "callback_data": "string"
    }]
  ]
}

    let entities = [{
    type: 'mention',
    offset:0,
    length:10
    }]

  return Bot.sendMessage(
    myChatId,
    'JavaScript data types',
    'MarkdownV2',
    inlinekeyboard,
    entities,
    true,
    true,
    undefined,
    true
  )
```
