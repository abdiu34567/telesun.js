## Google Books Preveiwer Bot

> in this tutorial we are going to develop a bot that search across google books, by using Google book api
>
> the bot will make a search for any specific word sent to bot
>
> ![Result](../../assets/example/googlebook.png)

## Getting Started

- first setup [Apps script project](https://github.com/abdiu34567/telesun.js/blob/main/Getting%20Started%20With%20App%20Script.md)
- then we need `bot token` from [BotFather](https://t.me/BotFather)
- then `import` bot library, you can follow [here](https://github.com/abdiu34567/telesun.js/blob/main/ImportingLib.md)

```js
/**
 * Create function doPost()
 */

function doPost() {
  const token = "5862849341:AAHvKMVz2HGq5y9NBD4B4YAsEI0X9qE";
  Bot.Telesun(token);
}
```

```js
/**
 * update your code as the following
*/
function doPost(){
    ...//don't remove previous codes

    //Executes at all cases
    Bot.Use((ctx)=>{
        ctx.reply('working..')
    })
}

```

> - Now, go and send any message to your bot
> - then, run your `dopost` function manually
> - and check your bot response

```js

/**
 * Update Your Code as the following
*/
function doPost(){

    ...//don't remove previous codes

  Bot.Use((ctx)=>{
    let query = ctx.message().text
    const books = UrlFetchApp.fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyARWN-E4fPF-Qqva71wyLelQtO51Ysb81Y&country=DE`
    );

    let result = JSON.parse(books).items;
    let totalItems = JSON.parse(books).totalItems;
    if (Number(totalItems) == 0) {
      return Bot.sendText(chatId, `❌ <i>No book found</i>`);
    }

    let photo = result[0].volumeInfo.previewLink;
    let title = result[0].volumeInfo.title;
    let subtitle = result[0].volumeInfo.subtitle;
    let authors = result[0].volumeInfo.authors;
    let selfLink = result[0].volumeInfo.previewLink;
    let date = result[0].volumeInfo.publishedDate;

    let caption =
      `📚 <b>🎖 Title : </b><code>${title}</code>\n` +
      `<b>🎗 Sub Title : </b><code>${subtitle}</code>\n` +
      `<b>🧓 Authors : </b><code>${authors}</code>\n` +
      `<b>⏰ Published Date : </b><code>${date}</code>\n` +
      `<b>📡 Self Link : </b><a>${selfLink}</a>`;

    ctx.replyWithPhoto(photo,
    { parse_mode: "HTML", caption: caption });

  })
}

```

> - Now, go and send any book title to your bot
> - then, run your `dopost` function manually
> - and check your bot response

<br>

🌟💪 Wow, You have made it.

Now, Let Us `Deploy our code and make our bot live`

```js
/**
 * update your code as the following
 * add the parameter <e>
*/

function doPost(e) {
  const token = "5862849341:AAHvKMVz2HGq5y9NBD4B4YAsEI0X9qE";
  Bot.Telesun(token,e);

  ...//don't remove other codes

```

- Then **[Deploy](https://github.com/abdiu34567/telesun.js/tree/main/Deployments)** your code

<br>

After, you have deployed your code and get your `webhook url` :

> - create a function called `settingWebhook` (can also be any name)

```js
/**
 * Create this function and run once, then you can delete it
 *
 */
function settingWebhook() {
  const token = "5862849341:AAHvKMVz2HGq5y9NBD4B4YAsEI0X9qE";
  Bot.Telesun(token);
  Bot.setWebHook();
}
```

🤖 -- GO & CHECK YOUR BOT -- 🤖
