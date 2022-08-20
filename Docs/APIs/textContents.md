## Text contents

> already defined in the library
>
> This can be accessible when user send any `text` to bot, can be `numbers`

```js
//this function is already defined in the library, you just need to call it on doPost function
function TextContents(apiResponse) {
  return {
    name: apiResponse.message.from.first_name,
    text: apiResponse.message.text,
    id: apiResponse.message.from.id,
    username: apiResponse.message.from.username,
    msgid: apiResponse.message.message_id,
  }
}
```

> using on `dopost` function

```js
// use this way on dopost() function
let chatId = TextContents(apiResponse).id
let text = TextContents(apiResponse).text
```

> Coming Api `Example`

```js
{
  "update_id": 144178474,
  "message": {
    "message_id": 661238,
    "from": {
      "id": 1173180004,
      "is_bot": false,
      "first_name": "Me",
      "last_name": "ab",
      "username": "Me_abd",
      "language_code": "en"
    },
    "chat": {
      "id": 1173180004,
      "first_name": "Me",
      "last_name": "ab",
      "username": "Me_abd",
      "type": "private"
    },
    "date": 1661019150,
    "text": "hellow"
  }
}

```
