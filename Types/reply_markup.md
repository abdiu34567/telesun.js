> Refer [Inline Keyboard Markup](https://core.telegram.org/bots/api#inlinekeyboardmarkup) for more

```js
let userAbdi = "1173180004";
let inlineKeyboard = {
  inline_keyboard: [
    [
      {
        text: "Number",
        callback_data: "number",
      },
    ],
    [
      {
        text: "String",
        callback_data: "string",
      },
    ],
  ],
};

ctx.sendMessage({
  chat_id: userAbdi,
  text: "<b>Javascript Data Types</b>",
  reply_markup: inlineKeyboard,
});
```

```js
let userAbdi = "1173180004";
let inlineKeyboard2 = {
  inline_keyboard: [
    [
      {
        text: "Number",
        callback_data: "number",
      },
      {
        text: "Undefined",
        callback_data: "Undefined",
      },
    ],
    [
      {
        text: "String",
        callback_data: "string",
      },
      {
        text: "Object",
        callback_data: "object",
      },
    ],
  ],
};
ctx.sendMessage({
  chat_id: userAbdi,
  text: "<b>Javascript Data Types</b>",
  reply_markup: inlineKeyboard2,
});
```

> Refer [Reply Keyboard Markup](https://core.telegram.org/bots/api#replykeyboardmarkup) for more

```js
let userAbdi = "1173180004";

let replyKeyboard = {
  keyboard: [
    [{ text: "🧭 BOLLO" }, { text: "🧭 GENDEGARA" }],
    [{ text: "💫 Restart" }],
  ],
  one_time_keyboard: true,
  resize_keyboard: true,
};
ctx.sendMessage({
  chat_id: userAbdi,
  text: "<b>Javascript Data Types</b>",
  reply_markup: replyKeyboard,
});
```

> Refer [ReplyKeyboardRemove](https://core.telegram.org/bots/api#replykeyboardremove) for more

```js
let userAbdi = "1173180004";

let removingReply = {
  remove_keyboard: true,
};

ctx.sendMessage({
  chat_id: userAbdi,
  text: "<b>Javascript Data Types</b>",
  reply_markup: removingReply,
});
```

> Refer [ForceReply](https://core.telegram.org/bots/api#forcereply) for more

```js
let userAbdi = "1173180004";

let forceReply = {
  force_reply: true,
};

ctx.sendMessage({
  chat_id: userAbdi,
  text: "<b>Javascript Data Types</b>",
  reply_markup: forceReply,
});
```
