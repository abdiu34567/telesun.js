## deleteWebhook

> Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success
>
> For more check [deleteWebhook](https://core.telegram.org/bots/api#deletewebhook) method
>
> This needs `no deployment` , just create the function and run
>
> This method can take up 1 parameter
>
> - drop_pending_updates

```js
Bot.Telesun(botToken)

function deleteWebhook() {
  return Bot.deleteWebhook()
}
```
