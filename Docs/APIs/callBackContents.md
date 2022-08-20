## callback contents

> already defined in the library
>
> This can be accessible when user `clicks` inline keyboards

```js
function CallbackContent(responseApi) {
  return {
    id: responseApi.callback_query.from.id,
    callback_data: responseApi.callback_query.data,
    callbackQueryId: responseApi.callback_query.id,
    msg_id: responseApi.callback_query.message.message_id,
    username: responseApi.callback_query.from.username,
    text: responseApi.callback_query.message.text,
  }
}

// use this way on dopost() function
let chatId = CallbackContent(responseApi).id
let callback_data = CallbackContent(responseApi).callback_data
```

> Coming Api `Example`

```js
{
  "update_id": 144178478,
  "callback_query": {
    "id": "5038769752181335254",
    "from": {
      "id": 1173180004,
      "is_bot": false,
      "first_name": "Me",
      "last_name": "ab",
      "username": "Me_abd",
      "language_code": "en"
    },
    "message": {
      "message_id": 661247,
      "from": {
        "id": 216729606,
        "is_bot": true,
        "first_name": "Json Dump Bot",
        "username": "JsonDumpBot"
      },
      "chat": {
        "id": 1173180004,
        "first_name": "Me",
        "last_name": "ab",
        "username": "Me_abd",
        "type": "private"
      },
      "date": 1661020590,
      "text": "Message with inline keyboard",
      "reply_markup": {
        "inline_keyboard": [
          [
            {
              "text": "Callback data",
              "callback_data": "Some data"
            }
          ],
          [
            {
              "text": "Hide keyboard",
              "callback_data": "HIDE"
            }
          ]
        ]
      }
    },
    "chat_instance": "-8792553071709821568",
    "data": "Some data"
  }
}

```
