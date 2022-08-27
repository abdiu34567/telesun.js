<header>
<img src="../../../assets/methods/2.png" alt="logo"  align="left">
<h2>Getting updates</h2>
</header>

To access methods :

```js
Bot.Update()
Bot.getUpdates()
Bot.setWebhook()
Bot. ....
.........
```

There are two mutually exclusive ways of receiving updates for your bot - the getUpdates method on one hand and webhooks on the other. Incoming updates are stored on the server until the bot receives them either way, but they will not be kept longer than 24 hours.

Regardless of which option you choose, you will receive JSON-serialized Update objects as a result

<br>

For More 💫 check <a href='https://core.telegram.org/bots/api#getting-updates'>Getting Updates</a>
