> refer [Message Entities](https://core.telegram.org/bots/api#messageentity) for more

```js
function messageEntities() {
  let userAbdi = '1173180004'
  let entities1 = [
    {
      type: 'mention',
      offset: 0,
      length: 10,
    },
  ]

  return Bot.sendMessage(
    userAbdi,
    '<b>Javascript is Love</b>',
    undefined, //reply_markup
    'HTML',
    entities1
  )
}
```

```js
function messageEntities() {
  let userAbdi = '1173180004'
  let entities2 = [
    {
      type: 'bot_command',
      offset: 0,
      length: 10,
    },
    {
      type: 'mention',
      offset: 0,
      length: 10,
    },
  ]

  return Bot.sendMessage(
    userAbdi,
    '<b>Javascript is Love</b>',
    undefined, //reply_markup
    'HTML',
    entities2
  )
}
```
