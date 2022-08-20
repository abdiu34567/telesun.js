> refer [Allowed Updates](https://core.telegram.org/bots/api#getupdates) for more

```js
function AllowingUpdates() {
  allowed_updates = [
    'message',
    'edited_channel_post',
    'callback_query',
    'inline_query',
    'chat_member',
  ]
  return Bot.getUpdates(allowed_updates)
}
```
