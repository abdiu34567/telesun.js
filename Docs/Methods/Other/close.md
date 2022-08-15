## close

> Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters

> For more check [close](https://core.telegram.org/bots/api#close) method

> This needs `no deployment` , just create the function and run

```js
Bot.Telesn(botToken)

function closeBotInstance() {
  let closingBotInstance = Bot.close()
  return Logger.log(closingBotInstance)
}

// will return

{"ok":true,"result":true}
```
