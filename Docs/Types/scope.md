> refer [scope](https://core.telegram.org/bots/api#botcommandscope) for more

```js
function setMyCommands() {
  let cmd = [
    {
      command: 'start',
      description: 'Starting The bot',
    },
    {
      command: 'inlinekeyboard',
      description: 'Sending inline keyboards',
    },
  ]
  let scope = {
    type: 'default',
  }
  return Bot.setMyCommands(cmd)
}
```
