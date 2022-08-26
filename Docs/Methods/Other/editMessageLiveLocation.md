## editMessageLiveLocation

> Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned
>
> For more check [editMessageLiveLocation](https://core.telegram.org/bots/api#editmessagelivelocation) method
>
> parameters :
>
> - chat_id
> - message_id
> - inline_message_id
> - latitude `required`
> - longitude `required`
> - reply_markup
> - horizontal_accuracy
> - heading
> - proximity_alert_radius
>
> For parameters like `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> sending location directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesun(botToken)
//sending location to bot | group | channel by using Thier http Url
function editMessageLiveLocation() {
  let inlineMessageId = '5038769753271609777'
  let latitude = 10.4333
  let longitude = 39.4
  return Bot.editMessageLiveLocation(inlineMessageId, latitude, longitude)
}
```

> sending Location on webhook

```js
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id
  let msg_id = 432
  return Bot.editMessageLiveLocation(chatId, msg_id, 10.4333, 39.4)
}
```
