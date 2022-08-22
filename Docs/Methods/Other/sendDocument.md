## sendDocument

> Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future
>
> For more check [sendDocument](https://core.telegram.org/bots/api#senddocument) method
>
> This method can take up 12 parameters and
> some of the parameters have default values
>
> - chat_id `required`
> - document `required`
> - thumb
> - caption
> - parse_mode = 'HTML'
> - reply_markup
> - caption_entities
> - disable_content_type_detection = false
> - disable_notification = false
> - protect_content = false
> - reply_to_message_id
> - allow_sending_without_reply = false
>
> For parameters like `caption_entities`, `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> sending document directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesn(botToken)
//sending document to bot | group | channel by using Thier http Url
function sendDocWithUrl() {
  let userAbdi = '1173180004'
  let docUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.docx`
  return Bot.sendDocument(userAbdi, docUrl)
}

//sending document to bot | group | channel by using Thier file_id, file id can be found only if you upload file on Bot | group | channel
function sendDocWithFileId() {
  let userAbdi = '1173180004'
  //invalid file_id
  let docFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  return Bot.sendDocument(userAbdi, docFileId)
}
```

> sending document on webhook

```js
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id

  //if user upload document
  if (apiResponse.message.document) return //save some where

  //sending document from online (invalid Url)
  let docUrl = `https://www.nvisia.com/hubfs/agile-methodology-chicago.docx`
  Bot.sendDocument(chatId, docUrl)

  //sending document which is already uploaded to bot
  let docFileId = `AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE`
  Bot.sendDocument(chatId, docFileId)

  return
}
```
