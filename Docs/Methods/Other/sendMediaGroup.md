## sendMediaGroup

> Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned
>
> For more check [sendMediaGroup](https://core.telegram.org/bots/api#sendmediagroup) method
>
> This method can take up 6 parameters
>
> - chat_id `required`
> - media `required`
> - disable_notification
> - protect_content
> - reply_to_message_id
> - allow_sending_without_reply
>
> sending media group directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesn(botToken)
//sending media group to bot | group | channel by using Thier http Url
function sendMediaGroupWithUrl() {
  let userAbdi = '1173180004'
  let medias = [{
    type: 'photo',
    media: 'https://www.nvisia.com/hubfs/agile-methodology-chicago.png'
        },{
    type: 'photo',
    media: 'https://www.nvisia.com/hubfs/agile-methodology-chicago.png'
  }]

  return Bot.sendMediaGroup(userAbdi, medias)
}

//sending media group to bot | group | channel by using Thier file_id, file id can be found only if you upload file on Bot | group | channel
function sendMediaGroupWithFileId() {
  let userAbdi = '1173180004'
  let medias = [{
    type:'photo',
    media:'AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE'
  },[
    type:'photo',
    media:'AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE'
  ]]

  return Bot.sendMediaGroup(userAbdi, medias)
}
```

> sending media group on webhook

```js
Bot.Telesun(botToken)
Bot.setWebHook(webhookUrl)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id

  //sending media group of already uploaded photos
    let medias = [{
    type:'photo',
    media:'AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE'
  },[
    type:'photo',
    media:'AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE'
  ]]

  return Bot.sendMediaGroup(chatId, medias)
}
```
