## Inline Query contents

> already defined in the library
>
> This can be accessible only on `inline query`

```js
//this function is already defined in the library, you just need to call it on doPost function
function InlineContents(apiResponse) {
  return {
    id: apiResponse.inline_query.from.id,
    firstName: apiResponse.inline_query.from.first_name,
    queryId: apiResponse.inline_query.id,
    query: apiResponse.inline_query.query,
    offset: apiResponse.inline_query.offset,
  }
}
```

> using `InlineContents` function on `dopost` function

```js
// use this way on dopost() function
let chatId = InlineContents(apiResponse).id
let query = InlineContents(apiResponse).query
```
