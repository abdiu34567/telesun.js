## setWebhook

> Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.
>
> If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content
>
> For more check [setWebhook](https://core.telegram.org/bots/api#setwebhook) method
>
> This needs `no deployment` , just create the function and run
>
> This method can take up 7 parameters
>
> - webAppUrl `required`
> - certificate
> - ip_address
> - max_connections
> - allowed_updates
> - drop_pending_updates
> - secret_token
>
> For parameters like `allowed_updates` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)

```js
Bot.Telesn(botToken)

function setWebHook() {
  let webHookUrl =
    'https://script.google.com/home/projects12PkmPf4tnI9Fab6ZePeDGhp0q8lYUyLStfbuwfm2FuFIgRblxLdw'
  return Bot.setWebHook(webHookUrl)
}
```
