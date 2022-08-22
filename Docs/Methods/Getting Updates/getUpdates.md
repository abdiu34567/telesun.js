## getUpdates

> Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects
>
> For more check [getUpdates](https://core.telegram.org/bots/api#getupdates) method
>
> This needs `no deployment` , just create the function and run
>
> This method can take up 4 parameters
>
> - offset
> - limit
> - timeout
> - allowed_updates
>
> For parameters like `allowed_updates` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)

```js
Bot.Telesun(botToken)

function getUpdates() {
  return Bot.getUpdates()
}
```
