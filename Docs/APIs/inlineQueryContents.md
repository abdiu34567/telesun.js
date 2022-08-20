## Inline Query contents

> already defined in the library
>
> This can be accessible only on `inline query`

```js
//this function is already defined in the library, you just need to call it on doPost function
function InlineContents(responseApi) {
  return {
    id: responseApi.inline_query.from.id,
    firstName: responseApi.inline_query.from.first_name,
    queryId: responseApi.inline_query.id,
    query: responseApi.inline_query.query,
    offset: responseApi.inline_query.offset,
  }
}

// use this way on dopost() function
let chatId = InlineContents(responseApi).id
let query = InlineContents(responseApi).query
```
