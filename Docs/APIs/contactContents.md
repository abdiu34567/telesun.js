## Inline Query contents

> already defined in the library
>
> This can be accessible only when user share `contact`

```js
//this function is already defined in the library, you just need to call it on doPost function
function ContactContents(apiResponse) {
  return {
    name: apiResponse.message.from.first_name,
    contact: apiResponse.message.contact.phone_number,
    id: apiResponse.message.from.id,
    username: apiResponse.message.from.username,
    msgid: apiResponse.message.message_id,
  }
}
```

> using `contactContents` function from library on your `dopost` function

```js
// use this way on dopost() function
let chatId = contactContents(apiResponse).id
let contact = contactContents(apiResponse).contact
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
