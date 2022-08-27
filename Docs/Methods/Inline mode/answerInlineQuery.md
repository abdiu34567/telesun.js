## answerInlineQuery

> Use this method to send answers to an inline query. On success, True is returned.
> No more than 50 results per query are allowed
>
> For more check [answerInlineQuery](https://core.telegram.org/bots/api#answerinlinequery) method
>
> parameters :
>
> - inline_query_id `required`
> - results `required`
> - cache_time
> - is_personal
> - next_offset
> - switch_pm_text
> - switch_pm_parameter
>
> For parameters like `results` check [Types](https://github.com/abdiu34567/telesn.js/tree/main/Docs/Types)

> sending inline query result

```JavaScript
Bot.Telesun(botToken)

function doPost(e) {
  const apiResponse = JSON.parse(e.postData.contents)

 let inlineQueryId = Bot.InlineContents(apiResponse).queryId
  let inlineQueryResult = [{
    type: "article",
    id: 1,
    title: `✅ Role: Developer`,
    input_message_content: {
      message_text: `👥 By Next Empire Team\n` +
        `   🧑‍🦱 Name: Abdi\n` +
        `   📞 Phone: 09***\n` +
        `   🧭 Address: Adama ASTU`,
      parse_mode: "HTML"
    },
    description: `👥 By By Next Empire Team\n` +
      `   🧑‍🦱 Name: Abdi\n` +
      `   📞 Phone: 09***\n` +
      `   🧭 Address: Adama ASTU`,

  }]
  return Bot.answerInlineQuery(inlineQueryId, inlineQueryResult)
}
```
