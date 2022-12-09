> refer [menu button](https://core.telegram.org/bots/api#menubutton) for more

```js
//how to use menu button
let userAbdi = "1173180004";
let menu_button = {
  type: "commands",
};
ctx.setChatMenuButton({ chat_id: userAbdi, menu_button: menu_button });
```
