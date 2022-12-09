> refer [scope](https://core.telegram.org/bots/api#botcommandscope) for more

```js
let cmd = [
  {
    command: "start",
    description: "Starting The bot",
  },
  {
    command: "inlinekeyboard",
    description: "Sending inline keyboards",
  },
];
let scope = {
  type: "default",
};
ctx.setMyCommands({ commands: cmd, scope: scope });
```
