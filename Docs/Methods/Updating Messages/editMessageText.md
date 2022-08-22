## editMessageText

> Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned
>
> For more check [editMessageText](https://core.telegram.org/bots/api#editmessagetext) method
>
> This method can take up 8 parameters and
> some of the parameters have default values
>
> - chat_id
> - message_id
> - inline_message_id,
> - text
> - parse_mode = 'HTML'
> - reply_markup
> - entities
> - disable_web_page_preview = false
>
> For parameters like `entities`, `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> editing message directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesn(botToken)
function editMessagebyId() {
  let msg_id = 232
  let chat_id = '1173180004'

  return Bot.editMessageText(chat_id, msg_id, ' This Message is Edited')
}
```

> Editing message when there is request coming from bot

```JavaScript
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)

  //accessing user chat id from the response API
  let myChatId = Bot.TextContents(apiResponse).id
  let msg_id = 232

  return Bot.editMessageText(myChatId, msg_id,'This Message is edited')
}
```
