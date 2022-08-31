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
let webHookUrl = 'https://script.google.com/macros/s/AKfycbxr03EKxm336KxtsaoHJ49JlEfaw5CzOG0ys0DMxPmKjlsaFkIFeqBVYM-1CGs-KjT_g/exec'

// after only new Deployment
// this function will set webhook on updated webHook url (no need deployment to create and run this function)
function setWebHook() {
  return Bot.setWebHook(webHookUrl)
}
```

> 🌟 \_When using `managed deployment` :
>
> - You `don't need` to copy any url
> - You can `delete` `webHookUrl` variable and `setWebHook` function

```js
let botToken = '779238246:AAEkFeunpG-lg3pc8eoAda2svGHu3O_dIA'

Bot.Telesun(botToken)

//admin chat id to send errors to
let admin = '1173180004'
//this will send any error to the Admin chat id you specified
function doPost(e) {
  try {
    const apiResponse = JSON.parse(e.postData.contents)
    let chatId = Bot.TextContents(apiResponse).id
    let text = TextContents(apiResponse).text
    return Bot.sendMessage(chatId, text)
  } catch (err) {
    return Bot.sendMessage(admin, err)
  }
}
```

> ✅ _You can create and run function `without deployment`, but functions not related to `doPost `functions_
>
> ⚠️ _Every Time you make a `change to your code` ,then you need to `deploy` to see a change_
>
> ➖➖ For more [here](https://developers.google.com/apps-script/concepts/deployments)
