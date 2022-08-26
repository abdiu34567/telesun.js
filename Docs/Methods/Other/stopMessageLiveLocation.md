## stopMessageLiveLocation

> Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned
>
> For more check [stopMessageLiveLocation](https://core.telegram.org/bots/api#stopmessagelivelocation) method
>
> parameters :
>
> - chat_id
> - message_id
> - inline_message_id
> - reply_markup
>
> For parameters like `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)

### Example

```js
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id
  let msg_id = 432
  return Bot.stopMessageLiveLocation(chatId, msg_id)
}
```
