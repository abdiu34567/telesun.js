## Bot

Bot is a default `identifier` name to access the following functions in Telesun library

> you can change the `identifier` name from `Bot` to anything you like

```js
//Execute at all cases
Bot.Use((ctx)=>{...})

//Executes on /start command
Bot.Start((ctx)=>{...})

//Executes when <hello> message sent to bot
Bot.Hears('hello',(ctx)=>{...})

//Executes on /help command
Bot.Help((ctx)=>{...})

//Executes on any Message
Bot.Message((ctx)=>{...})

//Executes on any inline keyboard clicked
Bot.Cbquery((ctx)=>{...})

//Executed when mykeyboard inline keyboard clicked
Bot.Action('mykeyboard',(ctx)=>{...})

//Executes when contact sent
Bot.Contact((ctx)=>{...})

//Executes on searching for inline queries
Bot.Inline_query((ctx)=>{...})

//Executes on any photo sent
Bot.Photo((ctx)=>{...})

//Executes on any video sent
Bot.Video((ctx)=>{...})

//Executes on any voice sent
Bot.Voice((ctx)=>{...})

//Executes on any document sent
Bot.Document((ctx)=>{...})

//Executes on any audio sent
Bot.Audio((ctx)=>{...})

//Executes on any Text sent
Bot.Text((ctx)=>{...})

//Executes on any sticker sent
Bot.Stiker((ctx)=>{...})

//Executes on any commands sent
Bot.Commands((ctx)=>{...})

//Executes on hello command only
Bot.Command('hello',(ctx)=>{...})

//Executes on username stage only
Bot.Stage('username', (ctx)=>{...})
```

### Use()

> - Executes without any condition
> - use this function on `upper part` of you code

### Start()

> - Executes on `/start` command only

### Hears()

> - Executes on `specific first parameter you have secified `

```js
/**
 * Executes when user type <hello> on bot
 */
Bot.Hears('hello',(ctx)=>{...})

/**regex*/
Bot.Hears(/hello/,(ctx)=>{...})

/**array as string*/
Bot.Hears(['hello', 'hi'],(ctx)=>{...})
```

> ### Help()
>
> - Executes on `/help` command only

> ### Message()
>
> - Executes on any message like, `text`, `commands`, `files` ...

> ### Cbquery()
>
> - Executes on `any inline keyboard clicked`

> ### Action()
>
> - Executes on `specific inline keyboard clicked`

```js
/**
 * Executes only when mykeyboard clicked
*/
Bot.Action('mykeyboard',(ctx)=>{...})

/**regex*/
Bot.Action(/mykeyboard/,(ctx)=>{...})

/**array as string*/
Bot.Action(['mykeyboard', 'secondkbd'],(ctx)=>{...})
```

> ### Contact()
>
> - Executes only when user share thier `Phone Number`

> ### Inline_query()
>
> - Executes on `inline Queries`

> ### Photo()
>
> - Executes on `any photo` sent

> ### Video()
>
> - Executes on `any Video` sent

> ### Document()
>
> - Executes on `any document` sent

> ### Audio()
>
> - Executes on `any audio` sent

> ### Voice()
>
> - Executes on `any voice` sent

> ### Text()
>
> - Executes on `any text message` sent

> ### Stiker()
>
> - Executes on `any sticker sent`

> ### Commands()
>
> - Executes on `any command sent`

> ### Command()
>
> - Executed on `specific command` you have specified

```js

/**
 * Executed when user sent /mycommand command
*/

Bot.Command('mycommand',(ctx)=>{...})

/**regex*/
Bot.Command(/mycommand/,(ctx)=>{...})

/**array as string*/
Bot.Command(['mycommand', 'command2'],(ctx)=>{...})

```

> ### Stage()
>
> - Executes on `specific stage` specified
> - use for `registrations or consecutive` tasks

```js
/**
 * Executes if username string is saved as stage
*/
Bot.Stage('username', (ctx)=>{...})
```

💪 **if you like us to add some more methods, then contact [`--ME--`](https://t.me/Me_abd)**
