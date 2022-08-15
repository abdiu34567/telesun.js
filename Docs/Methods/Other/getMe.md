## GetMe

> A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.

> For more check [getMe](https://core.telegram.org/bots/api#getme) method

> This needs `no deployment` , just create the function and run

```js
Bot.Telesn(botToken)

function testingGetMe() {

  let getMeInfo = Bot.getMe()
  return Logger.log(getMeInfo)

}


//👆 this function will return json like

{
  ok: true,
  result: {
    id: 779238246,
    is_bot: true,
    first_name: 'test',
    username: 'testerbinibot',
    can_join_groups: true,
    can_read_all_group_messages: false,
    supports_inline_queries: false,
  },
}
```
