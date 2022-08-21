> **To see full api response from Bot**
>
> must `deploy` to see a change in your bot

```js
//invalid Bot token
let botToken = '779238246:AAEFeuhnpG-lg3pc8eoAda2svGHu3O_dIA'
let webHookUrl =
  'https://script.google.com/macros/s/AKfycbyTJNTD5HsnQMUsT-qX4AUQCd6Moex3zyf9cgdmlzly-mPxmlRlaxzt8lKhljq1zr6Ow/exec'

Bot.Telesn(botToken)
Bot.setWebHook(webHookUrl)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id

  //this will send api response to your bot
  return Bot.sendMessage(chatId, JSON.stringify(apiResponse, undefined, 2))
}
```
