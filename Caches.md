## Caches

within help of apps script, now telesun provide the easy way to work across `caches`.

Telesun provides 2 kinds of `caches` :

> - `Temporary Caches`
> - `Permanent Caches`

### Temporary Caches

Temporary caches are time based caches, which by default will be deleted after `10 minutes`, but you can specify for longer

Used as :

```js
/**
 * @param {string|number} key
 * @returns value belongs to key
 */
Bot.TCache.get(key);

/**
 * store specific key value for a specific amount of time
 * @param {string|number} key
 * @param {strin|number} value
 * @param {number} [timer=10M]
 * @returns value belongs to key
 */
Bot.TCache.set(key, value, timer);

/**
 * retrieve multiple key value
 * @param {array} Arrayofkey
 * @returns object
 */
Bot.TCache.getAll(Arrayofkeys);

/**
 * store multiple key value pair specified in object
 * @param {object} Obj - object of key's and values
 */
Bot.TCache.setAll(Obj);

/**
 * remove specific key value pair
 * @param {string|number} key - keys to be removed
 */
Bot.TCache.remove(key);

/**
 * remove multiple key value pair
 * @param {array} ArrayofKeys
 */
Bot.TCache.removeAll(ArrayofKeys);
```

### Permanent Cache

Permanent caches are caches that can be stored forever

Used as :

```js
/**
 * @param {number|string} key
 * @returns returns value belongs to key
 */
Bot.PCache.get(key);

/**
 * @param {string|number} key
 * @param {string|number} value
 */
Bot.PCache.set(key, value);

/**
 * get single value for specified key
 * @returns Total cache
 */
Bot.PCache.getAll();

/**
 * store multiple key value pair specified in object
 * @param {object} Obj - object of key's and values
 */
Bot.PCache.setAll(ObjectofKeys);

/**
 * remove specific key value pair
 * @param {string|number} key - keys to be removed
 */
Bot.PCache.remove(key);

/**
 * Delete complete cache
 */
Bot.PCache.delete();
```
