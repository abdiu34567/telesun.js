> refer [ChatAdministratorRights](https://core.telegram.org/bots/api#chatadministratorrights) for more

```js
function setAdminRight() {
  let rights = {
    is_anonymous: true,
    can_manage_chat: true,
  }
  return Bot.setMyDefaultAdministratorRights(rights)
}
```
