> refer [Inline Keyboard Markup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) for more

```js
function InlineKeyboard1() {
  let userAbdi = '1173180004'

  let inlineKeyboard = {
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
  return Bot.sendMessage(
    userAbdi,
    '<b>Javascript Data Types</b>',
    inlineKeyboard
  )
}
```

```js
function InlineKeyboard2() {
  let userAbdi = '1173180004'
  let inlineKeyboard2 = {
    inline_keyboard: [
      [
        {
          text: 'Number',
          callback_data: 'number',
        },
        {
          text: 'Undefined',
          callback_data: 'Undefined',
        },
      ],
      [
        {
          text: 'String',
          callback_data: 'string',
        },
        {
          text: 'Object',
          callback_data: 'object',
        },
      ],
    ],
  }
  return Bot.sendMessage(
    userAbdi,
    '<b>Javascript Data Types</b>',
    inlineKeyboard2
  )
}
```

> refer [Reply Keyboard Markup](https://core.telegram.org/bots/api#replykeyboardmarkup) for more

```js
function ReplyKeyboard1() {
  let userAbdi = '1173180004'

  let replyKeyboard = {
    keyboard: [
      [{ text: '🧭 BOLLO' }, { text: '🧭 GENDEGARA' }],
      [{ text: '💫 Restart' }],
    ],
    one_time_keyboard: true,
    resize_keyboard: true,
  }
  return Bot.sendMessage(
    userAbdi,
    '<b>Javascript Data Types</b>',
    replyKeyboard
  )
}
```

> refer [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) for more

```js
function ReplyKeyboardRemove() {
  let userAbdi = '1173180004'

  let removingReply = {
    remove_keyboard: true,
  }

  return Bot.sendMessage(
    userAbdi,
    '<b>Javascript Data Types</b>',
    removingReply
  )
}
```

refer [ForceReply](https://core.telegram.org/bots/api#forcereply) for more

```js
function ReplyKeyboardRemove() {
  let userAbdi = '1173180004'

  let forceReply = {
    force_reply: true,
  }

  return Bot.sendMessage(userAbdi, '<b>Javascript Data Types</b>', forceReply)
}
```
