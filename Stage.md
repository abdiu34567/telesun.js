## Stage

stage simplifies the way of doing consecuative tasks like `registrations`, or `steps`

stages are saved `per user`. this means each user using your bot will have `independent stage` and this is helpful to simply manage `multiple registrations` per once

stages use temporary sessions, which will be deleted after `10 minutes`

you can create your stages by using `numbers`, `strings`, and more

<u>Example :</u>

let say you want to register users by thier `username` and `password`


first ask users to type thier username and save stage as waiting for `username`
```js
Bot.Text((ctx)=>{
    ctx.reply('Please type your username ?')
    ctx.setStage('username')
})
```

then after user type thier username, you can ask their password and set stage as waiting for `password`
```js
Bot.Stage('username', (ctx)=>{
    ctx.reply('Please type your password ?')
    ctx.setStage('password')
})
```

finally you can finish registraion, when user send thier password
```js
Bot.Stage('password', (ctx)=>{
    ctx.reply('Registration succesfully completed')
})
```

Stages can be used : 
```js

/**
 * @Stage
 * @param {string | number} name - stage name
 * @param {*} function
*/

Bot.Stage(name , (ctx)=>{})

/**
 * save stage with either number or string
 * @param {string|number} ?
*/
ctx.setStage(?)

/**
 * retrieve already saved stage
*/
ctx.getStage()


```