## copyMessage

> Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success
>
> For more check [copyMessage](https://core.telegram.org/bots/api#copymessage) method
>
> This method can take up 11 parameters and
> some of the parameters have default values
>
> - chat_id `required`
> - from_chat_id `required`
> - message_id `required`
> - reply_markup
> - caption
> - parse_mode = 'HTML'
> - caption_entities
> - disable_notification = false
> - protect_content = false
> - reply_to_message_id
> - allow_sending_without_reply = false
>
> For parameters like `caption_entities`, `reply_markup` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)
>
> copying message directly, without any request, use this for `test` purposes , because of this can be done without any `deployment`

```js
Bot.Telesun(botToken)

// create and run function like this if only you know chat id of the user

//copy message from @ab_trial group to @app_Script_js group
function copyMessageToChannelorgroup() {
  let channelOrGroupUserName = '@App_Script_Js'
  let originalChannelOrGoup = '@ab_trial'
  let msg_idOfOriginalMessage = 234
  return Bot.copyMessage(
    channelOrGroupUserName,
    originalChannelOrGoup,
    msg_idOfOriginalMessage
  )
}

//copy message from userDeva to userAbdi group
function copyMessageToBot() {
  let userAbdi = '1173180004'
  let userDeva = '1263669270'
  let msg_idOfOriginalMessage = 234
  return Bot.copyMessage(userAbdi, userDeva, msg_idOfOriginalMessage)
}

//copy message from userAbdi to App script channel
function copyMessageFromBotToGroupOrChannel() {
  let channelOrGroupUserName = '@App_Script_Js'
  let userAbdi = '1173180004'
  let msg_idOfOriginalMessage = 234
  return Bot.copyMessage(
    channelOrGroupUserName,
    userAbdi,
    msg_idOfOriginalMessage
  )
}
```

> copying message on webhook

```js
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let myChatId = Bot.TextContents(apiResponse).id
  let originalChannel = '@App_Script_Js'
  let originalMsgId = 232

  return Bot.copyMessage(myChatId, originalChannel, originalMsgId)
}
```
