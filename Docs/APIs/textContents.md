## Text contents

> already defined in the library
>
> This can be accessible when user send any `text` to bot, can be `numbers`

```js
function TextContents(responseApi) {
  return {
    name: responseApi.message.from.first_name,
    text: responseApi.message.text,
    id: responseApi.message.from.id,
    username: responseApi.message.from.username,
    msgid: responseApi.message.message_id,
  }
}

// use this way on dopost() function
let chatId = TextContents(responseApi).id
let text = TextContents(responseApi).text
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
