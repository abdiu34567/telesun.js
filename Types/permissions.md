> refer [permissions](https://core.telegram.org/bots/api#chatpermissions) for more

```js
  let group_username = '@App_Script_Js'
  let userAbdi = '1173180004'
  let permissions	 =
    {
      can_send_messages: true
      can_send_media_messages: true
    }

 ctx.restrictChatMember({chat_id:group_username, user_id:userAbdi,permissions:permissions)
```
