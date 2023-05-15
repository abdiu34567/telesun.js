/** 
 * @typedef {object} 
 * @property {*} Connect
 * @property {*} AppendRow()
 * @property {string} title
 * @property {boolean} completed
 */
var SheetDB = {
  connect: undefined,

  /**
   * Adds values from Array to the last row of the sheet
   * @param {object} ArrayOfValues - Array containing values
   */
  appendRow(ArrayofValues) {
    return this.connect.appendRow(ArrayofValues);
  },

  /**
   * Clear Full Sheet
   * @param {string} sheetId - sheetId from sheet url
   * @param {string} sheetName - unique sheet name
   * @returns
   */
  clearFullSheet() {
    return this.connect.clear();
  },

  /**
   * clears values between range specified
   * @param {string} Range - range to clear values
   * @returns
   */
  clearByRange(row, col, numCol = 1, numRow = 1) {
    return this.connect.getRange(row, col, numCol, numRow).clear();
  },

  /**
   * Clear single value at specific coordinates
   * @param {number} x - row
   * @param {number} y - col
   * @returns value
   */
  clearValue(row, col) {
    return this.connect.getRange(row, col).clear();
  },

  findOne(query) {
    return this.connect.createTextFinder(query).findNext();
  },

  findAll(query) {
    return this.connect.createTextFinder(query).findAll();
  },

  deleteColumn(colNum) {
    return this.connect.deleteColumn(colNum);
  },

  /**
   * Deletes column starting at given index , and how Many to delete
   */
  deleteColumns(colIndex, howMany) {
    return this.connect.deleteColumns(colIndex, howMany);
  },

  /**
   * Deletes a row at a specific position
   */
  deleteRow(rowNum) {
    return this.connect.deleteRow(rowNum);
  },

  deleteRows(rowIndex, howmany) {
    return this.connect.deleteRows(rowIndex, howmany);
  },

  /**
   * Gets All Data found on the sheet
   * @returns
   */
  getSheetData() {
    return this.connect.getDataRange().getValues();
  },

  getLastColumn() {
    return this.connect.getLastColumn();
  },

  getLastRow() {
    return this.connect.getLastRow();
  },

  insertColumnAfter(indexCol) {
    return this.connect.insertColumnAfter(indexCol);
  },
  insertColumnBefore(indexCol) {
    return this.connect.insertColumnBefore(indexCol);
  },
  /**
   * insert columns
   * @param {*} indexCol - index to insert a new column
   * @param {*} [numberOfColumn] - number of columns to be added
   * @returns
   */
  insertColumns(indexCol, howMany) {
    return this.connect.insertColumns(indexCol, howMany);
  },

  insertColumnsAfter(afterPosition, howMany) {
    return this.connect.insertColumnsAfter(afterPosition, howMany);
  },

  insertColumnsBefore(beforePosition, howMany) {
    return this.connect.insertColumnsBefore(beforePosition, howMany);
  },
  insertRowAfter(afterPosition) {
    return this.connect.insertRowAfter(afterPosition);
  },
  insertRowBefore(beforePosition) {
    return this.connect.insertRowBefore(beforePosition);
  },
  /**
   *
   * @param {*} rowIndex - index at wich rows will be inserted
   * @param {*} [numRows] - Number of rows to be added
   * @returns
   */
  insertRows(rowIndex, numRows) {
    return this.connect.insertRows(rowIndex, numRows);
  },

  insertRowsAfter(afterPosition, howMany) {
    return this.connect.insertRowsAfter(afterPosition, howMany);
  },

  insertRowsBefore(beforePosition, howMany) {
    return this.connect.insertRowsBefore(beforePosition, howMany);
  },

  /**
   * Moves Range of Columns
   * @param {string} Range - range 
   * @param {string} destinationIndex - move the columns before destinationIndex 
   */
  moveColumns(Range, destinationIndex) {
    let columnSpec = this.connect.getRange(Range)
    return this.connect.moveColumns(columnSpec, destinationIndex);
  },

  /**
   * Moves Range of Rows
   * @param {string} Range - range 
   * @param {string} destinationIndex - move the rows before destinationIndex 
   */
  moveRows(Range, destinationIndex) {
    let rowSpec = this.connect.getRange(Range)
    return this.connect.moveRows(rowSpec, destinationIndex);
  },
  /**
   * Update Sheet Name
   * @param {string} name
   * @returns
   */
  setName(name) {
    return this.connect.setName(name);
  },

  sortByColumn(columnPosition, sort = true) {
    return this.connect.sort(columnPosition, sort);
  },

  /**
   *
   * @param {number | string} value - value to be inserted
   * @param {number} row - row to insert
   * @param {number} col - column to insert
   * @param {number} numRow - number of rows to inserted in
   * @param {number} numCol - number of column to be inserted in
   * @returns
   */
  saveOne(value, row, col, numRow = 1, numCol = 1) {
    return this.connect.getRange(row, col, numRow, numCol).setValue(value);
  },

  /**
   *
   * @param {object} arrayOfvalues - Array of array like : [ [1,2,3],[4,5,6] ]
   * @param {number} row - row to insert
   * @param {number} col - column to insert
   * @param {number} numRow - number of rows to inserted in
   * @param {number} numCol - number of column to
   * @returns
   */
  saveMany(arrayOfvalues, row, col, numRow = 1, numCol = 1) {
    return this.connect.getRange(row, col, numRow, numCol).setValues(
      arrayOfvalues
    );
  },

  /**
    *
    * @param {number} row - row to insert
    * @param {number} col - column to insert
    * @returns value
    */
  getValue(row, col) {
    return this.connect.getRange(row, col).getValue()
  },

  /**
    *
    * @param {object} arrayOfvalues - Array of array like : [ [1,2,3],[4,5,6] ]
    * @param {number} row - row to insert
    * @param {number} col - column to insert
    * @param {number} numRow - number of rows to inserted in
    * @param {number} numCol - number of column to
    * @returns array of array
    */
  getValues(row, col, numRow = 1, numCol = 1) {
    return this.connect.getRange(row, col, numRow, numCol).getValues()
  }

};
