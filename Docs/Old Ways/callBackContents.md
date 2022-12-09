## callback contents

> already defined in the library
>
> This can be accessible when user `clicks` inline keyboards

```js
//this function is already defined in the library, you just need to call it on doPost function
function CallbackContent(apiResponse) {
  return {
    id: apiResponse.callback_query.from.id,
    callback_data: apiResponse.callback_query.data,
    callbackQueryId: apiResponse.callback_query.id,
    msg_id: apiResponse.callback_query.message.message_id,
    username: apiResponse.callback_query.from.username,
    text: apiResponse.callback_query.message.text,
  }
}
```

> using `CallbackContent` function from library on your `dopost` function

```js
// use this way on dopost() function
let chatId = CallbackContent(apiResponse).id
let callback_data = CallbackContent(apiResponse).callback_data
```

> Coming response `Example`

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
