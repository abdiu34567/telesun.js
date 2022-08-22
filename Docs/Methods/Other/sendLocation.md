## sendLocation

> Use this method to send point on the map. On success, the sent Message is returned
>
> For more check [sendLocation](https://core.telegram.org/bots/api#sendlocation) method
>
> This method can take up 12 parameters
>
> - chat_id `required`
> - latitude `required`
> - longitude `required`
> - reply_markup
> - horizontal_accuracy
> - live_period
> - heading
> - proximity_alert_radius
> - disable_notification
> - protect_content
> - reply_to_message_id
> - allow_sending_without_reply
>
> sending location directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesun(botToken)
//sending location to bot | group | channel by using Thier http Url
function sendLocation() {
  let userAbdi = '1173180004'
  return Bot.sendLocation(userAbdi, 10.4333, 39.4)
}
```

> sending Location on webhook

```js
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id

  return Bot.sendLocation(chatId, 10.4333, 39.4)
}
```
