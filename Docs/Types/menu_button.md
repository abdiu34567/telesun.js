> refer [menu button](https://core.telegram.org/bots/api#menubutton) for more

```js
function setMenuButton() {
  let userAbdi = '1173180004'
  let menu_button = {
    type: 'commands',
  }
  return Bot.setChatMenuButton(userAbdi, menu_button)
}
```
