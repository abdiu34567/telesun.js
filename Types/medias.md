> refer [Medias](https://core.telegram.org/bots/api#inputmedia) for more

```js
//How to use media object on edit Message media
let userAbdi = "1173180004";
let medias = {
  type: "photo",
  media:
    "AgACAgQAAxkBAAEKB4Ri-faRkfkJPhtiuTMwxjvFdGb2EAACf7gxG5ZTyVNio98lZ7PwIgEAAwIAA3MAAykE",
};

ctx.editMessageMedia({
  chat_id: userAbdi,
  message_id: 432,
  media: medias,
});
```
