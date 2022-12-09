## Middleware

Telesun now provides middleware `next()` to execute functions `non stop`

### How To use ?

```js
//calls next middleware
Bot.Text((ctx,next)=>{next()})

//will executed after Bot.Text(), but the execution stops here, because no next middleware is used
Bot.Message((ctx)=>{...})

//never executed,
Bot.Use((ctx)=>{...})
```
