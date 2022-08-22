## editMessageCaption

> Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned
>
> For more check [editMessageCaption](https://core.telegram.org/bots/api#editmessagecaption) method
>
> This method can take up 7 parameters and
> some of the parameters have default values
>
> - chat_id
> - message_id
> - inline_message_id
> - caption
> - parse_mode = 'HTML'
> - reply_markup
> - caption_entities
>
> For parameters like `caption_entities`, `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> editing message caption directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesn(botToken)
function editMessageCaption() {
  let msg_id = 232
  let chat_id = '1173180004'

  return Bot.editMessageCaption(chat_id, msg_id, 'This Message is Edited')
}
```

> Editing message caption when there is request coming from bot

```JavaScript
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)

  //accessing user chat id from the response API
  let myChatId = Bot.TextContents(apiResponse).id
  let msg_id = 232

  return Bot.editMessageCaption(myChatId, msg_id,'This Message is edited')
}
```
