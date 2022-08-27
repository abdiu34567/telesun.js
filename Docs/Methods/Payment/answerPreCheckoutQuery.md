## answerPreCheckoutQuery

> Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent
>
> For more check [answerPreCheckoutQuery](https://core.telegram.org/bots/api#answerprecheckoutquery) method
>
> parameters :
>
> - shipping_query_id `required`
> - ok `required`
> - error_message
