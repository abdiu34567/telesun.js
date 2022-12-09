> refer [Allowed Updates](https://core.telegram.org/bots/api#getupdates) for more

This is helpful when you get working with channels and groups

```js
//how to use alloed_updates on getUpdates

allowed_updates = [
  "message",
  "edited_channel_post",
  "callback_query",
  "inline_query",
  "chat_member",
];
ctx.getUpdates({ allowed_updates: allowed_updates });
```
