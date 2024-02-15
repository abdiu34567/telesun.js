// Mock version of SpreadsheetApp and Sheet
var mockSpreadsheetApp = {
  getSheetByName: function (name) {
    // Return a mock sheet if the name matches or null otherwise
    return name === 'ValidSheetName' ? new MockSheet() : null;
  }
};

class MockSheet {
  constructor() {
    // You can add properties to track calls to sheet methods if needed
  }

  appendRow(arrayOfValues) {
    // Mock implementation of appendRow
    // console.log('appendRow called with:', arrayOfValues);
    return this; // Enable chaining if needed
  }

  clear() {
    // Mock implementation of clear
    // console.log('clear called');
    return this; // Enable chaining if needed
  }

  createTextFinder(query) {
    return {
      findNext() {
        return this;
      },
      findAll() {
        return this;
      }
    }
  }

  deleteColumn() {
    return this;
  }

  deleteColumns() {
    return this;
  }

  deleteRow() {
    return this
  }

  deleteRows() {
    return this
  }

  getDataRange() {
    return {
      getValues() {
        return this
      }

    }
  }

  // Add mock methods for other operations similarly...

  // Example for getRange used in several operations
  getRange(row, col, numRows = 1, numCols = 1) {
    // console.log(`getRange called with row: ${row}, col: ${col}, numRows: ${numRows}, numCols: ${numCols}`);
    return {
      // Mock clear for clearByRange and clearValue
      clear: function () {
        return this; // Enable chaining if needed
      },
      // Mock setValue for saveOne
      setValue: function (value) {
        return this; // Enable chaining if needed
      },

      setValues: function (arrayOfValues) {
        return this;
      },

      getValue: function () {
        return this;
      },

      getValues: function () {
        return this;
      }
      // Add mock methods for other range operations similarly...
    };
  }

  setName(name) {
    return this;
  }

  getLastColumn() {
    return this;
  }

  getLastRow() {
    return this;
  }

  insertColumnAfter(indexCol) {
    return this;
  }

  insertColumnBefore(indexCol) {
    return this;
  }

  insertColumns() {
    return this
  }

  insertColumnsAfter(afterPosition, howMany) {
    return this;
  }

  insertColumnsBefore() {
    return this;
  }

  insertRowAfter() {
    return this;
  }

  insertRowBefore() {
    return this;
  }

  insertRows() {
    return this;
  }

  insertRowsAfter() {
    return this;
  }

  insertRowsBefore() {
    return this;
  }

  moveColumns() {
    return this;
  }

  moveRows() {
    return this;
  }

  sort(columnPosition, sort) {
    return this;
  }

  // Add other methods as needed for your tests...
}


const TEST_SHEET_MANAGER = {
  run() {
    testSheetManager()
  }
}


function testSheetManager() {
  var sheetManager = new SheetManager(mockSpreadsheetApp);

  // Test getOperations with a valid sheet name
  var operations = sheetManager.getOperations('ValidSheetName');

  // Test appendRow operation
  operations.appendRow(['Value1', 'Value2']);

  // Test clear operation
  operations.clear();

  // Test clearByRange operation
  operations.clearByRange(1, 1);

  // Test findOne operation
  operations.findOne('Query');

  operations.clearValue(1, 1)

  operations.deleteColumn(1)

  operations.deleteColumns(1, 2)

  operations.deleteRow(1)

  operations.deleteRows(1, 2)

  operations.findAll("Query")

  operations.getLastColumn()

  operations.getLastRow()

  operations.getSheetData()

  operations.getValue()

  operations.getValues()

  operations.insertColumnAfter(4)

  operations.insertColumnBefore(3)

  operations.insertColumns(1, 2)

  operations.insertColumnsAfter(3, 3)

  operations.insertColumnsBefore(3, 3)

  operations.insertRowAfter(3)

  operations.insertRowBefore(4)

  operations.insertRows(2, 3)

  operations.insertRowsAfter(3, 3)

  operations.moveColumns("A1:B2", 3)

  operations.moveRows("A1:B2", 3)

  operations.saveMany(['1', '2', '3'], 3, 3, 4, 5)

  operations.saveOne("value", 3, 4, 2, 1)

  operations.setName("Name")

  operations.sortByColumn(2, true)

  Logger.log('✅ All tests for SheetManager passed!');
}



