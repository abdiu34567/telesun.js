## Inline Query contents

> already defined in the library
>
> This can be accessible only when user share `contact`

```js
function contactContents(responseApi) {
  return {
    name: responseApi.message.from.first_name,
    contact: responseApi.message.contact.phone_number,
    id: responseApi.message.from.id,
    username: responseApi.message.from.username,
    msgid: responseApi.message.message_id,
  }
}

// use this way on dopost() function
let chatId = contactContents(responseApi).id
let contact = contactContents(responseApi).contact.phone_number
```

> Coming API `Example`

```js

{
  "update_id": 144178460,
  "message": {
    "message_id": 661212,
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
    "date": 1661016295,
    "reply_to_message": {
      "message_id": 661211,
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
      "date": 1661016291,
      "text": "Please select a command"
    },
    "contact": {
      "phone_number": "+251941284888",
      "first_name": "Me",
      "last_name": "ab",
      "user_id": 1173180004
    }
  }
}
```
