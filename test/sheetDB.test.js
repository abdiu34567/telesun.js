const TEST_SHEETDB = {

  sheetConnect() {
    const sheetId = '1ii7iFU1UGr6VDiOZZFzSNv0peT3C-lOEcV9khdy61c';
    const sheetName = 'test_sheet'
    const sheet = sheetConnect(sheetId, sheetName);
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.sheetConnect)
  },

  appendRow() {
    const sheet = SheetDB.appendRow(['name', 'phone', 'age'])
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.appendRow)
  },

  clearFullSheet() {
    const sheet = SheetDB.clearFullSheet()
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.clearFullSheet)
  },

  clearByRange() {
    SheetDB.appendRow(['name', 'phone', 'age']);//append in order to test clear by range method
    const sheet = SheetDB.clearByRange(1, 1)
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.clearByRange)
  },

  clearValue() {
    const sheet = SheetDB.clearValue(1, 2)
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.clearValue)
  },

  findOne() {
    const sheet = SheetDB.findOne('age');
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.findOne)
  },

  findAll() {
    SheetDB.appendRow(['name', 'phone', 'age'])
    const sheet = SheetDB.findAll('age');
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.findAll);
  },

  deleteColumn() {
    const sheet = SheetDB.deleteColumn(1);
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.deleteColumn)
  },

  deleteColumns() {
    const sheet = SheetDB.deleteColumns(1, 2);
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.deleteColumns)
  },

  deleteRow() {
    SheetDB.appendRow(['name', 'phone', 'age'])
    SheetDB.appendRow(['name', 'phone', 'age'])
    const sheet = SheetDB.deleteRow(1)
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.deleteRow)
  },

  deleteRows() {
    SheetDB.appendRow(['name', 'phone', 'age'])
    SheetDB.appendRow(['name', 'phone', 'age'])
    const sheet = SheetDB.deleteRows(1, 2)
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.deleteRows)
  },

  getSheetData() {
    const sheet = SheetDB.getSheetData()
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.getSheetData)
  },

  getLastColumn() {
    const sheet = SheetDB.getLastColumn()
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.getLastColumn)
  },

  getLastRow() {
    const sheet = SheetDB.getLastRow()
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.getLastRow)
  },

  insertColumnAfter() {
    const sheet = SheetDB.insertColumnAfter(1)
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.insertColumnAfter)
  },

  insertColumnBefore() {
    const sheet = SheetDB.insertColumnBefore(1)
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.insertColumnBefore)
  },

  insertColumns() {
    SheetDB.insertColumns(1, 2)
    Logger.log(Test_Constants().TEST_TITLES.insertColumns)
  },

  insertColumnsBefore() {
    const sheet = SheetDB.insertColumnsBefore(1, 2)
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.insertColumnsBefore)
  },
  insertColumnsAfter() {
    const sheet = SheetDB.insertColumnsAfter(2, 2)
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.insertColumnsAfter)
  },

  insertRowAfter() {
    SheetDB.appendRow(['name', 'phone', 'age'])
    const sheet = SheetDB.insertRowAfter(1)
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.insertRowAfter)
  },
  insertRowBefore() {
    const sheet = SheetDB.insertRowBefore(1)
    if (sheet) Logger.log(Test_Constants().TEST_TITLES.insertRowBefore)
  },
  insertRows() {
    SheetDB.insertRows(1, 2)
    Logger.log(Test_Constants().TEST_TITLES.insertRows)
  },

  insertRowsAfter() {
    const sheet = SheetDB.insertRowsAfter(4, 2)
    if (sheet) { Logger.log(Test_Constants().TEST_TITLES.insertRowsAfter) }
  },

  insertRowsBefore() {
    const sheet = SheetDB.insertRowsBefore(4, 2)
    if (sheet) { Logger.log(Test_Constants().TEST_TITLES.insertRowsBefore) }
  },

  moveColumns() {
    SheetDB.moveColumns("H4:K4", 1)
    Logger.log(Test_Constants().TEST_TITLES.moveColumns)
  },

  moveRows() {
    const sheet = SheetDB.moveRows('A6:D6', 1)
    if (sheet) { Logger.log(Test_Constants().TEST_TITLES.moveRows) }
  },
  setName() {
    const sheet = SheetDB.setName('test_sheet')
    if (sheet) { Logger.log(Test_Constants().TEST_TITLES.setName) }
  },
  sortByColumn() {
    SheetDB.appendRow(['ahone', 'age', 'me'])
    const sheet = SheetDB.sortByColumn(1)
    if (sheet) { Logger.log(Test_Constants().TEST_TITLES.sortByColumn) }
  },
  saveOne() {
    const sheet = SheetDB.saveOne("Saving...", 2, 2)
    if (sheet) { Logger.log(Test_Constants().TEST_TITLES.saveOne) }
    debugger;
  },
  saveMany() {
    const sheet = SheetDB.saveMany([["on1", "on2", "on3"]], 1,1,1,3)
    if (sheet) { Logger.log(Test_Constants().TEST_TITLES.saveMany) }
    debugger;
  },
  getValue() {
    const sheet = SheetDB.getValue(2, 2)
    if (sheet) { Logger.log(Test_Constants().TEST_TITLES.getValue) }
    debugger;
  },
  getValues() {
    const sheet = SheetDB.getValues(1, 1, 2, 3)
    if (sheet) { Logger.log(Test_Constants().TEST_TITLES.getValues) }
    debugger;
  },
}



