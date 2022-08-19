## sendPhoto

> Use this method to send photos. On success, the sent Message is returned.
>
> For more check [sendPhoto](https://core.telegram.org/bots/api#sendphoto) method
>
> This method can take up 10 parameters and
> some of the parameters have default values
>
> - chat_id `required`
> - photo `required`
> - parse_mode
> - caption
> - reply_markup
> - caption_entities
> - disable_notification = false
> - protect_content = false
> - reply_to_message_id
> - allow_sending_without_reply = false
>
> For parameters like `caption_entities`, `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> sending photo directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesn(botToken)
//sending photo to bot | group | channel by using Thier http Url
function sendPhotoWithUrl() {
  let userAbdi = '1173180004'
  let photoUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.png`
  return Bot.sendPhoto(userAbdi, photoUrl)
}

//sending photo to bot | group | channel by using Thier file_id, file id can be found only if you upload file on Bot | group | channel
function sendPhotoWithFileId() {
  let userAbdi = '1173180004'
  let photoFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  return sBot.sendPhoto(userAbdi, photoFileId)
}
```

> sending photo on webhook

```js
Bot.Telesn(botToken)
Bot.setWebHook(webhookUrl)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id

  //if user upload photo
  if (apiResponse.message.photo) return //save some where

  //sending photo from online
  let photoUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.png`
  Bot.sendPhoto(chatId, photoUrl)

  //sending photo which is already uploaded to bot
  let photoFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  Bot.sendPhoto(chatId, photoFileId)

  return
}
```
