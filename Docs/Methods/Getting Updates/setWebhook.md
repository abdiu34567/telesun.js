## getWebhookInfo

> Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.
>
> If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content
>
> For more check [getWebhookInfo](https://core.telegram.org/bots/api#getwebhookinfo) method
>
> This needs `no deployment` , just create the function and run

```js
Bot.Telesn(botToken)

function getWebhookInfo() {
  return Bot.getWebhookInfo()
}
```
