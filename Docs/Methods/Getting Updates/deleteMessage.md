## deleteMessage

> Use this method to delete a message, including service messages, with the following limitations:
>
> - A message can only be deleted if it was sent less than 48 hours ago.
> - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
> - Bots can delete outgoing messages in private chats, groups, and supergroups.
> - Bots can delete incoming messages in private chats.
> - Bots granted can_post_messages permissions can delete outgoing messages in channels.
> - If the bot is an administrator of a group, it can delete any message there.
> - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there. Returns True on success
>
> For more check [deleteMessage](https://core.telegram.org/bots/api#deletemessage) method
>
> This method can take up 2 parameters and
> some of the parameters have default values
>
> - chat_id `required`
> - message_id `required`
>
> Deleting message directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesn(botToken)
function deleteMessageby_messageId() {
  let msg_id = 232
  let chat_id = '1173180004'

  return Bot.deleteMessage(chat_id, msg_id)
}
```

> Deleting message when there is request coming from bot

```JavaScript
Bot.Telesun(botToken)
Bot.setWebHook(webhookUrl)

function doPost(e) {

  const apiResponse = JSON.parse(e.postData.contents);
  let myChatId = Bot.TextContents(apiResponse).id
  let msg_id = 234

  return Bot.deleteMessage(myChatId, msg_id)
}
```
