> refer [Medias](https://core.telegram.org/bots/api#inputmedia) for more

```js
function medias() {
  let userAbdi = '1173180004'
  let medias =
    {
      type: 'photo',
      media:
        'AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE',
    }

 return Bot.editMessageMedia(userAbdi, 432,
 undefined//inline_message_id,
 medias)
}
```

```js
function medias() {
  let userAbdi = '1173180004'
  let medias = [
    {
      type: 'photo',
      media:
        'AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE',
    },
    {
      type: 'photo',
      media:
        'AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE',
    }
  ]
 return Bot.editMessageMedia(userAbdi, 432,
     undefined//inline_message_id,
     medias)
}
```
