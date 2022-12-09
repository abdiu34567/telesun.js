## Setting Webhook

### How does Webhook Works ?

📄 When you set webhook once by using your `bot token`, telegram will `save` webhook url for your bot.

untill you `change` or `delete` webhook url, the bot will always send POST request to saved webhook url when there is an update

> - **[long polling](https://github.com/abdiu34567/telesun.js/blob/main/LongPolling.md) is not possible on webhook**

You only need to `set webhook once after deploying your code`

> for `webhook url` see **[Deployment](https://github.com/abdiu34567/telesun.js/tree/main/Deployments)**

<br>

### Steps

> - first deploy your code as `web App`
> - then copy the url. which you will get after you have deployed

<br>

To `set webhook` then you need to `create` and `run` the function like the following `SettingWebHook()`.

> - This is manual work. you `create and run` the following function, then the webhook will be set

```js
// find from bot father
let botToken = "123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ";

//you will found the url after you deploy your code
let webhookUrl =
  "https://script.google.com/macros/s/AKfycbyTJNTD5HsnQMUsT-qX4AUQCd6Moex3zyf9cgdmlzly-mPxmlRlaxzt8lKhljq1zr6Ow/exec";

Bot.Telesun(botToken);

//run this function by clicking run button on apps script editor
function SettingWebHook() {
  return Bot.setWebHook(webHookUrl);
}
```

You can `❌ delete SettingWebHook()` function once after successfully set your webhook, because unless you delete or change webhook, you don't need it again

📡 `finally after successfully setting your webhook, your bot will start sending POST request to your webhook url and your bot if fully live 🌟`
