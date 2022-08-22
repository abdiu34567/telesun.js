## sendAudio

> Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
>
> For sending voice messages, use the sendVoice method instead
>
> For more check [sendAudio](https://core.telegram.org/bots/api#sendaudio) method
>
> This method can take up 14 parameters and
> some of the parameters have default values
>
> - chat_id `required`
> - audio `required`
> - caption
> - parse_mode = 'HTML'
> - reply_markup
> - caption_entities
> - duration
> - performer
> - title
> - thumb
> - disable_notification = false
> - protect_content = false
> - reply_to_message_id
> - allow_sending_without_reply = false
>
> For parameters like `caption_entities`, `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> sending audio directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesun(botToken)
//sending audio to bot | group | channel by using Thier http Url
function sendAudioWithUrl() {
  let userAbdi = '1173180004'
  let audioUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.mp3`
  Bot.sendAudio(userAbdi, audioUrl)
}

//sending audio to bot | group | channel by using Thier file_id, file id can be found only if you upload file on Bot | group | channel
function sendAudioWithFileId() {
  let userAbdi = '1173180004'
  //invalid file_id
  let audioFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  Bot.sendAudio(userAbdi, audioFileId)
}
```

> sending audio on webhook

```js
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id

  //if user upload audio
  if (apiResponse.message.audio) return //save some where

  //sending audio from online (invalid Url)
  let audioUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.mp3`
  Bot.sendAudio(chatId, audioUrl)

  //sending audio which is already uploaded to bot
  let audioFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  Bot.sendAudio(chatId, audioFileId)

  return
}
```
