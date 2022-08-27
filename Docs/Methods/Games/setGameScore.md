## setGameScore

> Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False
>
> For more check [setGameScore](https://core.telegram.org/bots/api#setgamescore) method
>
> parameters :
>
> - user_id `required`
> - score `required`
> - force
> - disable_edit_message
> - chat_id
> - message_id
> - inline_message_id
