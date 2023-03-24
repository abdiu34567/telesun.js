## Google Sheet as Database

Google sheets can be used as `databases`.

Google sheets are :

- by default `real time`
- you can use them every where as `API`
- powerful enough to do to `complex mathematics`
- already integrated with apps script

`Telesun` simplifies the way you can get started with google sheet, just by using the library

### Getting Started

> - To find spread sheet Id & Sheet Name, check [HERE](https://github.com/abdiu34567/telesun.js/blob/main/CreatSpreadsheet.md)

```js
/**
 * First you need to get connected with a sheet
 * @param {string} spreadsheetId - unique sheet id
 * @param {string} sheetName - unique sheet name
 */
Bot.sheetConnect(spreadsheetId, sheetName);
```

> Then :

```js
/**
 * appends values in the array to the last row of the sheet where data present
 * @param {array} like ['name', 'phone','id']
*/
Bot.SheetDB.AppendRow([...])
```

Example:

```js
let spreadsheetId = ?//your spreadsheet ID
let sheetName = ?//your sheet name

Bot.sheetConnect(spreadsheetId, sheetName);

Bot.SheetDB.AppendRow(['Name', 'Phone', 'ID'])
```

<br>

```
/**
 * Clears the whole cells in a sheet which you provided with sheet name
*/

Bot.SheetDB.ClearFullSheet()
```

```js
let spreadsheetId = ?//your spreadsheet ID
let sheetName = ?//your sheet name

Bot.sheetConnect(spreadsheetId, sheetName);

Bot.SheetDB.ClearByRange(1,1,1,1)
```

<br>

```js
/**
 * clear cells within parameters provided
 * @param {number} row - row to clear from
 * @param {number} col - col to clear from
 * @param {number} [howManyRow] - up to how many row to clear cells
 * @param {number} [howManyCol] - up to how many col to clear cells
 *
*/
Bot.SheetDB.ClearByRange(1,1,..)

/**
 * clear single value
 * @param {number} row - row to clear from
 * @param {number} col - col to clear from
 *
*/
Bot.SheetDB.ClearValue(1,1)

/**
 * case insensitive
 * @param {string|number} query - query you would like to search
 * @returns the first value matched with your query
*/
Bot.SheetDB.findOne('userA')

const Data = Bot.SheetDB.findOne('userA')
console.log(Data.getValue())
console.log(Data.getRow())
console.log(Data.getColumn())
//----- more ----


/**
 * Case insensitive
 * @param {string|number} query - query you would like to search
 * @returns array of value's matched with your query
*/
Bot.SheetDB.findAll('userA')


/**
 * Deletes column by index
 * @param {number} columnIndex - column index you would like to delete
*/
Bot.SheetDB.deleteColumn(2)


/**
 * Deletes column start from index 2, up to index 6
 * @param {number} columnIndex - index column you would like to start deleting from
 * @param {number} howmany - how many column to delete
*/
Bot.SheetDB.deleteColumns(2 , 4)


/**
* Deletes row by index
* @param {number} columnIndex - row index you would like to delete
*/
Bot.SheetDB.deleteRow(2)


/**
 * Deletes row start from index 2, up to index 6
 * @param {number} rowIndex - index row you would like to start deleting from
 * @param {number} howmany - how many row to delete
*/
Bot.SheetDB.deleteRows(2 , 4)


/**
 * get all datas found on a sheet
*/
Bot.SheetDB.getSheetData()


/**
 * get last column, where data exist
*/
Bot.SheetDB.getLastColumn()


/**
 * get last row, where data exist
 */
Bot.SheetDB.getLastRow()


/**
 * insert new column after index of column 2
 * @param {number} colIndex - index to insert new column
 */
Bot.SheetDB.insertColumnAfter(2)


/**
 * insert new column before index of column 2
 * @param {number} colIndex - index to insert new column
 */
Bot.SheetDB.insertColumnBefore(2)


/**
 * insert 3 new column's start form index of column 2
 * @param {number} colIndex - index to insert new column's
 * @param {number} howMany - how many column to insert
 */
Bot.SheetDB.insertColumns(2, 3)

/**
 * insert 3 new column's after index of column 2
 * @param {number} colIndex - index to insert new column's
 * @param {number} howMany - how many column to insert
 */
Bot.SheetDB.insertColumnsAfter(2, 3)



/**
 * insert 3 new column's before index of column 2
 * @param {number} colIndex - index to insert new column's
 * @param {number} howMany - how many column to insert
 */
Bot.SheetDB.insertColumnsBefore(2, 3)



/**
 * insert row after row index 2
 * @param {number} rowIndex - index to insert new row
 */
Bot.SheetDB.insertRowAfter(2)



/**
 * insert row before row index 2
 * @param {number} rowIndex - index to insert new row
 */
Bot.SheetDB.insertRowBefore(2)


/**
 * insert 3 new row's start form row index 2
 * @param {number} rowIndex - starting index to insert new row's
 * @param {number} howMany - how many row to insert
 */
Bot.SheetDB.insertRows(2, 3)


/**
 * insert 3 new row's start form after row index 2
 * @param {number} rowIndex - starting index to insert new row's
 * @param {number} howMany - how many row to insert
 */
Bot.SheetDB.insertRowsAfter(2, 3)


/**
 * insert 3 new row's before row index 2
 * @param {number} rowIndex - starting index to insert new row's
 * @param {number} howMany - how many row to insert
 */
Bot.SheetDB.insertRowsBefore(2, 3)


/**
 * moves column A1 and B2 to destination before index 5. which is 3 & 4
 * @param {string} range - range of columns to move
 * @param {number} destination - destinations to move the columns to
 */
Bot.SheetDB.moveColumns("A1:B1", 5)


/**
 * moves row A1 and A2 to destination before index 5. which is 3 & 4
 * @param {string} range - range of rows to move
 * @param {number} destination - destinations to move the rows to
 */
Bot.SheetDB.moveRows("A1:A2", 5)


/**
 * Changes sheet name
 * @param {string} sheetName - change sheet name to
 */
Bot.SheetDB.setName("sheetA")



/**
 * sort the sheet by column 1 ascending
 * @param {number} colIndex - column index to sort on
 * @param {boolean} true|false - true for ascending, false for descending
 */
Bot.SheetDB.sortByColumn(1, true)


/**
 * Saves specific value
 * @param {string|number} value - value to save
 * @param {number} row - row to save on
 * @param {number} col - column to save on
 * @param {number} [howManyRow] - to how many rows save the value
 * @param {number} [howManyCol] - to how many columns save the value
*/
Bot.SheetDB.saveOne('1234:abcd', 1,2,...)

/**
 * Saves array index 0 at row 1, saves array index 1 at row 2
 * @param {string|number} value - value to save
 * @param {number} row - row to save on
 * @param {number} col - column to save on
 * @param {number} howManyRow - to how many rows save the value
 * @param {number} howManyCol - to how many columns save the value
*/
Bot.SheetDB.SaveMany(
    [['name', 'phone', 'id'], ['abdi', '09**', '16**']],
    1,1,2,3)

/**
 * get values at specific row and column
 * @param {number} row
 * @param {number} col
*/
Bot.SheetDB.getValue(1,1)

/**
 * get multiple values as array
 * @param {number} row
 * @param {number} col
 * @param {number} howManyRow - from how many rows to get the value
 * @param {number} howManyCol - from how many columns to get the value
 */
Bot.SheetDB.getValues(1, 1 ,2 ,2)
```
