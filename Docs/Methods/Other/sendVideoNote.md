## sendVideoNote

> As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned
>
> For more check [sendVideoNote](https://core.telegram.org/bots/api#sendvideonote) method
>
> This method can take up 10 parameters
>
> - chat_id `required`
> - video_note `required`
> - reply_markup
> - duration
> - length
> - thumb
> - disable_notification
> - protect_content
> - reply_to_message_id
> - allow_sending_without_reply
>
> For parameters like `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> sending video note directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesn(botToken)
//sending video note to bot | group | channel by using Thier http Url
function sendVideoNoteWithUrl() {
  let userAbdi = '1173180004'
  let videoNoteUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.mp4`
  return Bot.sendVideoNote(userAbdi, videoNoteUrl)
}

//sending video note to bot | group | channel by using Thier file_id, file id can be found only if you upload file on Bot | group | channel
function sendVideoNoteWithFileId() {
  let userAbdi = '1173180004'
  //invalid file_id
  let videoNoteFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  return Bot.sendVideoNote(userAbdi, videoNoteFileId)
}
```

> sending video note on webhook

```js
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id

  //if user upload video note
  if (apiResponse.message.video_note) return //save some where

  //sending video note from online (invalid Url)
  let videoNoteUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.mp4`
  Bot.sendVideoNote(chatId, videoNoteUrl)

  //sending video note which is already uploaded to bot
  let videoNoteFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  Bot.sendVideoNote(chatId, videoNoteFileId)

  return
}
```
