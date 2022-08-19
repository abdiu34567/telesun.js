## sendAnimation

> Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future
>
> For more check [sendAnimation](https://core.telegram.org/bots/api#sendanimation) method
>
> This method can take up 14 parameters and
> some of the parameters have default values
>
> - chat_id `required`
> - animation `required`
> - caption
> - parse_mode = 'HTML'
> - reply_markup
> - duration
> - width
> - height
> - thumb
> - caption_entities
> - disable_notification = false
> - protect_content = false
> - reply_to_message_id
> - allow_sending_without_reply = false
>
> For parameters like `caption_entities`, `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> sending animations directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesn(botToken)
//sending animation to bot | group | channel by using Thier http Url
function sendAnimationWithUrl() {
  let userAbdi = '1173180004'
  let animUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.fli`
  return Bot.sendAnimation(userAbdi, animUrl)
}

//sending animation to bot | group | channel by using Thier file_id, file id can be found only if you upload file on Bot | group | channel
function sendAnimationWithFileId() {
  let userAbdi = '1173180004'
  //invalid file_id
  let animFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  return Bot.sendAnimation(userAbdi, animFileId)
}
```

> sending animation on webhook

```js
Bot.Telesun(botToken)
Bot.setWebHook(webhookUrl)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id

  //if user upload animation
  if (apiResponse.message.animation) return //save some where

  //sending animation from online (invalid Url)
  let animUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.fli`
  Bot.sendAnimation(chatId, animUrl)

  //sending animation which is already uploaded to bot
  let animFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  Bot.sendAnimation(chatId, animFileId)

  return
}
```
