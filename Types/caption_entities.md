> refer [Message Entities](https://core.telegram.org/bots/api#messageentity) for more

```js
let userAbdi = "1173180004";
let entities = [
  {
    type: "mention",
    offset: 0,
    length: 10,
  },
];

ctx.sendMessage({
  chat_id: userAbdi,
  text: "<b>Javascript is Love</b>",
  parse_mode: "HTML",
  entities: entities,
});
```

```js
let userAbdi = "1173180004";
let entities = [
  {
    type: "bot_command",
    offset: 0,
    length: 10,
  },
  {
    type: "mention",
    offset: 0,
    length: 10,
  },
];

ctx.sendMessage({
  chat_id: userAbdi,
  text: "<b>Javascript is Love</b>",
  parse_mode: "HTML",
  entities: entities,
});
```
