> refer [ChatAdministratorRights](https://core.telegram.org/bots/api#chatadministratorrights) for more

```js
let rights = {
  is_anonymous: true,
  can_manage_chat: true,
};
ctx.setMyDefaultAdministratorRights({ rights: rights });
```
