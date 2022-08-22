## sendVoice

> Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future
>
> For more check [sendVoice](https://core.telegram.org/bots/api#sendvoice) method
>
> This method can take up 11 parameters and
> some of the parameters have default values
>
> chat_id `required`
> voice `required`
> caption
> parse_mode = 'HTML'
> reply_markup
> caption_entities
> duration
> disable_notification
> protect_content
> reply_to_message_id
> allow_sending_without_reply
>
> For parameters like `caption_entities`, `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> sending voice directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesun(botToken)
//sending voice to bot | group | channel by using Thier http Url
function sendVoiceWithUrl() {
  let userAbdi = '1173180004'
  let voiceUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.wav`
  return Bot.sendVoice(userAbdi, voiceUrl)
}

//sending voice to bot | group | channel by using Thier file_id, file id can be found only if you upload file on Bot | group | channel
function sendVoiceWithFileId() {
  let userAbdi = '1173180004'
  //invalid file_id
  let voiceFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  return Bot.sendVoice(userAbdi, voiceFileId)
}
```

> sending voice on webhook

```js
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id

  //if user upload voice
  if (apiResponse.message.voice) return //save some where

  //sending voice from online (invalid Url)
  let voiceUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.wav`
  Bot.sendVoice(chatId, voiceUrl)

  //sending voice which is already uploaded to bot
  let voiceFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  Bot.sendVoice(chatId, voiceFileId)

  return
}
```
