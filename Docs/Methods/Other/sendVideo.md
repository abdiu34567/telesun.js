## sendVideo

> Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future
>
> For more check [sendVideo](https://core.telegram.org/bots/api#sendvideo) method
>
> This method can take up 15 parameters and
> some of the parameters have default values
>
> - chat_id `required`
> - video `required`
> - caption
> - parse_mode = 'HTML'
> - reply_markup
> - duration
> - width
> - height
> - thumb
> - caption_entities
> - supports_streaming = false
> - disable_notification = false
> - protect_content = false
> - reply_to_message_id
> - allow_sending_without_reply = false
>
> For parameters like `caption_entities`, `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> sending video directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesn(botToken)
//sending video to bot | group | channel by using Thier http Url
function sendVideoWithUrl() {
  let userAbdi = '1173180004'
  let vidUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.mp4`
  return Bot.sendVideo(userAbdi, vidUrl)
}

//sending video to bot | group | channel by using Thier file_id, file id can be found only if you upload file on Bot | group | channel
function sendVideoWithFileId() {
  let userAbdi = '1173180004'
  //invalid file_id
  let vidFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  return Bot.sendVideo(userAbdi, vidFileId)
}
```

> sending video on webhook

```js
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id

  //if user upload video
  if (apiResponse.message.video) return //save some where

  //sending video from online (invalid Url)
  let vidUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.mp4`
  Bot.sendVideo(chatId, vidUrl)

  //sending video which is already uploaded to bot
  let vidFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  Bot.sendVideo(chatId, vidFileId)

  return
}
```
