## editMessageMedia

> Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned
>
> For more check [editMessageMedia](https://core.telegram.org/bots/api#editmessagemedia) method
>
> This method can take up 5 parameters and
> some of the parameters have default values
>
> - chat_id
> - message_id
> - inline_message_id
> - media `required`
> - reply_markup
>
> For parameters like `reply_markup`, `media` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> editing message media directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesn(botToken)
function editMessagemedia() {
  let msg_id = 232
  let chat_id = '1173180004'

  let media = {
    type: 'photo',
    media: 'https://www.nvisia.com/hubfs/agile-methodology-chicago.png',
    caption: 'Photo is Changed',
  }
  return Bot.editMessageMedia(chat_id, msg_id, media)
}
```

> Editing message media when there is request coming from bot

```JavaScript
Bot.Telesun(botToken)
Bot.setWebHook(webhookUrl)

function doPost(e) {

  const apiResponse = JSON.parse(e.postData.contents);
  let myChatId = Bot.TextContents(apiResponse).id
  let msg_id = 234
  let media = {
    type: 'photo',
    media: 'https://www.nvisia.com/hubfs/agile-methodology-chicago.png',
    caption: "Photo is Changed"
  }
  return Bot.editMessageMedia(myChatId, msg_id, media)
}
```
