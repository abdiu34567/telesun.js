## Sessions

within help of apps script, now telesun provide the easy way to work across sessions

Telesun provides 2 kinds of sessions :

> - Temporary Sessions
> - Permanent Sessions

### Temporary Sessions

Temporary sessions are time based sessions, which by default will be deleted after `10 minutes`, but you can specify for longer

Used as :

```js
/**
 * gets the whole session saved for user
 * @returns object of {user: ?, data:?}
 */
Bot.TSession.get();

/**
 * store specific key value for a specific amount of time
 * @param {string|number} key
 * @param {strin|number} value
 * @param {number} [timer=10M]
 */
Bot.TSession.set(key, value, timer);

/**
 * get single value for specified key
 * @param {string|number} key
 * @returns value
 */
Bot.TSession.getValue(key);

/**
 * store multiple key value pair specified in object
 * @param {object} Obj - object of key's and values
 * @param {number} [timer=10M]
 */
Bot.TSession.setAll(Obj, timer);

/**
 * remove specific key value pair
 * @param {string|number} key - keys to be removed
 */
Bot.TSession.remove(key);

/**
 * Delete complete session for the user
 */
Bot.TSession.delete();
```

### Permanent Sessions

Permanent sessions are sessions that can be stored forever

Used as :

```js
/**
 * gets the whole session saved for user
 * @returns object of {user: ?, data:?}
 */
Bot.PSession.get();

/**
 * store specific key value for a specific amount of time
 * @param {string|number} key
 * @param {strin|number} value
 */
Bot.PSession.set(key, value);

/**
 * get single value for specified key
 * @param {string|number} key
 * @returns value
 */
Bot.PSession.getValue(key);

/**
 * store multiple key value pair specified in object
 * @param {object} Obj - object of key's and values
 */
Bot.PSession.setAll(Obj);

/**
 * remove specific key value pair
 * @param {string|number} key - keys to be removed
 */
Bot.PSession.remove(key);

/**
 * Delete complete session for the user
 */
Bot.PSession.delete();
```
