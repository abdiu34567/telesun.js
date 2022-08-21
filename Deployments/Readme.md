## Deployments

> There are 2 types of Deployments in app script
>
> - Head deployments (Manage Deployment)
> - Versioned deployments (New Deployment)
>
> **Recommendation**
>
> - use `New Deployment` when you are deploying your script for the first time
> - use `Manage Deployment` for deployments after first time deployment
>
> 🌟 \_When using `New Deployment` you need to:
>
> - `copy` the web app Url and use it as webhook Url and
> - run `setwebhook function`

```js
let webHookUrl =
  'https://script.google.com/macros/s/AKfycbxr03EKxm336KxtsaoHJ49JlEfaw5CzOG0ys0DMxPmKjlsaFkIFeqBVYM-1CGs-KjT_g/exec'

// after only new Deployment
// this function will set webhook on updated webHook url (no need deployment to create and run this function)
function setWebHook() {
  return Bot.setWebHook(webHookUrl)
}
```

> 🌟 🌟 \_When using `managed deployment` :
>
> - You `don't need` to copy any url
> - You can use `webhook url` the following way

```js
 Bot.Telesn(botToken)
 Bot.setWebHook(webHookUrl)
 ---
```

> ✅ _You can create and run function `without deployment`, but functions not related to `doPost functions`_
>
> ⚠️ _Every Time you make a `change to your code` ,then you need to `deploy` to see a change_
>
> ➖➖ For more [here](https://developers.google.com/apps-script/concepts/deployments)
