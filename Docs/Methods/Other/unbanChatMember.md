## unbanChatMember

> Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success
>
> For more check [unbanChatMember](https://core.telegram.org/bots/api#unbanchatmember) method
>
> parameters :
>
> - chat_id `required`
> - user_id `required`
> - only_if_banned
