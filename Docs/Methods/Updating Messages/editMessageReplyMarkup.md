## editMessageReplyMarkup

> Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned
>
> For more check [editMessageReplyMarkup](https://core.telegram.org/bots/api#editmessagereplymarkup) method
>
> This method can take up 4 parameters and
> some of the parameters have default values
>
> - chat_id
> - message_id
> - inline_message_id
> - reply_markup
>
> For parameters like `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> editing message reply markup directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesun(botToken)
function editMessageReplyMarkup() {
  let msg_id = 232
  let chat_id = '1173180004'

  let reply_markup = {
    inline_keyboard: [
      [
        {
          text: 'Number',
          callback_data: 'number',
        },
      ],
      [
        {
          text: 'String',
          callback_data: 'string',
        },
      ],
    ],
  }
  return Bot.editMessageReplyMarkup(chat_id, msg_id, reply_markup)
}
```

> Editing message reply markup when there is request coming from bot

```JavaScript
Bot.Telesun(botToken)

function doPost(e) {

  const apiResponse = JSON.parse(e.postData.contents);
  let myChatId = Bot.TextContents(apiResponse).id
  let msg_id = 234
 let reply_markup = {
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
  return Bot.editMessageReplyMarkup(myChatId, msg_id, reply_markup)
}
```
