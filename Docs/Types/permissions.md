> refer [permissions](https://core.telegram.org/bots/api#chatpermissions) for more

```js
function restrictingChatMember() {
  let group_username = '@App_Script_Js'
  let userAbdi = '1173180004'
  let permissions	 =
    {
      can_send_messages: true
      can_send_media_messages: true
    }

 return Bot.restrictChatMember(group_username, userAbdi,permissions)
}
```
