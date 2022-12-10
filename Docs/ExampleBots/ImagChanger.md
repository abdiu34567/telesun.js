## Image Changer Bot

> In this tutorial we are going to develop a bot that changes from the first photo to the next

![Image Changer](../../assets/example/Image%20changer.png)

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
 * continue adding codes to doPost() function
 * ❌ don't remove previous codes
 */

function doPost() {
  ...// don't remove previous codes

  //when /start command sent to bot

  Bot.Start((ctx)=>{

    //photo from online to send to bot
    let photo = 'https://www.solvetic.com/uploads/monthly_11_2014/tutorials-2308-0-91146200-1417046587.jpg'

    //message caption to send with photo
    let caption = "💪 <b>Apps Script is Fun</b>";

    //inline keyboard
    let nextKbd = {
        inline_keyboard: [
            [
                {
                text: "Next ➡️",
                callback_data: "next",
                },
            ],
        ],
    };

   //sending ...
    ctx.replyWithPhoto(photo, {caption:caption, parse_mode: "HTML",reply_markup:nextKbd})
  })

}
```

> - Now, go and send /start command to your bot
> - then, run your `doPost` function manually
> - and check your bot response

```js
/**
 * continue adding codes to doPost() function
 * ❌ don't remove previous codes
 */

function doPost() {
  ...// don't remove previous codes

  ...// don't remove previous codes

  //if clicked on 'next' inline keyboard
  Bot.Action('next',(ctx)=>{
    ctx.reply('this is next command')

  })

  //if clicked on 'prev' inline keyboard
  Bot.Action('prev',(ctx)=>{
    ctx.reply('this is prev inline keyboard')

  })

}
```

> - Now, go and sclick `Next` keyboard
> - then, run your `doPost` function manually
> - and check your bot response

```js
/**
 * continue adding codes to doPost() function
 * ❌ don't remove previous codes
 */

function doPost() {
  ...// don't remove previous codes

  ...// don't remove previous codes

  //if clicked on 'next' inline keyboard
  Bot.Action('next',(ctx)=>{
    let media = {
        type: "photo",
        media:
        "https://storage.googleapis.com/infiflexnew.appspot.com/5643291244625920",
        caption: "🌟 <b>Apps Script is Cool</b>",
        parse_mode: "HTML",
    }

    let prevKbd = {
        inline_keyboard: [
            [
                {
                    text: "🔙 Previous ",
                    callback_data: "prev",
                },
            ],
        ],
    };

   let User = ctx.chat().id
   let msg_id = ctx.message().message_id
   ctx.editMessageMedia({chat_id:User, message_id:msg_id, media:media, reply_markup:prevKbd});

  })

  //if clicked on 'prev' inline keyboard
  Bot.Action('prev',(ctx)=>{
    let media = {
        type: "photo",
        media:
        "https://www.solvetic.com/uploads/monthly_11_2014/tutorials-2308-0-91146200-1417046587.jpg",
        caption: "💪 <b>Apps Script is Fun</b>",
        parse_mode: "HTML",
    }

    let nextKbd = {
        inline_keyboard: [
            [
                {
                text: "Next ➡️",
                callback_data: "next",
                },
            ],
        ],
   };

   let User = ctx.chat().id
   let msg_id = ctx.message().message_id
   ctx.editMessageMedia({chat_id:User, message_id:msg_id, media:media, reply_markup:nextKbd});

  })

}
```

> - Now, go and click `Next` & `Prev` keyboards
> - then, run your `doPost` function manually
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
  const token = "5862849341:AAHvKz2HGq5y9NBD4B4YAsEI0X9qE";
  Bot.Telesun(token);
  Bot.setWebHook();
}
```

🤖 -- GO & CHECK YOUR BOT -- 🤖
