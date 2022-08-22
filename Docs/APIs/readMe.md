> **To see full api response from Bot**
>
> - must `deploy` to see a change in your bot
> - this must be after `setting webhook on`
> - and deploy as `managed deployment`

```js
//invalid Bot token
let botToken = '779238246:AAEFeuhnpG-lg3pc8eoAda2svGHu3O_dIA'

Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)
  let chatId = Bot.TextContents(apiResponse).id

  //this will send api response to your bot
  return Bot.sendMessage(chatId, JSON.stringify(apiResponse, undefined, 2))
}
```
