class SheetManager {

    constructor(spreadSheetInstance) {
        this.spreadSheetInstance = spreadSheetInstance
    }

    getOperations(sheetName = "____SHEET____") {
        if (!this.spreadSheetInstance) {
            throw new Error(`Spreadsheet with this ID not found.`);
        }

        let sheet;
        if (sheetName !== '____SHEET____') {
            sheet = this.spreadSheetInstance.getSheetByName(sheetName);
        }

        // Return an object with all operations bound to the specific sheet
        return {
            appendRow: (arrayOfValues) => sheet.appendRow(arrayOfValues),
            clear: () => sheet.clear(),
            clearByRange: (row, col, numCol = 1, numRow = 1) => sheet.getRange(row, col, numCol, numRow).clear(),
            clearValue: (row, col) => sheet.getRange(row, col).clear(),
            findOne: (query) => sheet.createTextFinder(query).findNext(),
            findAll: (query) => sheet.createTextFinder(query).findAll(),
            deleteColumn: (colNum) => sheet.deleteColumn(colNum),
            deleteColumns: (colIndex, howMany) => sheet.deleteColumns(colIndex, howMany),
            deleteRow: (rowNum) => sheet.deleteRow(rowNum),
            deleteRows: (rowIndex, howMany) => sheet.deleteRows(rowIndex, howMany),
            getSheetData: () => sheet.getDataRange().getValues(),
            getLastColumn: () => sheet.getLastColumn(),
            getLastRow: () => sheet.getLastRow(),

            insertColumnAfter: (indexCol) => sheet.insertColumnAfter(indexCol),
            insertColumnBefore: (indexCol) => sheet.insertColumnBefore(indexCol),
            insertColumns: (indexCol, howMany) => sheet.insertColumns(indexCol, howMany),

            insertColumnsAfter: (afterPosition, howMany) => sheet.insertColumnsAfter(afterPosition, howMany),///////
            insertColumnsBefore: (beforePosition, howMany) => sheet.insertColumnsBefore(beforePosition, howMany),////

            insertRowAfter: (afterPosition) => sheet.insertRowAfter(afterPosition),
            insertRowBefore: (beforePosition) => sheet.insertRowBefore(beforePosition),
            insertRows: (rowIndex, numRows) => sheet.insertRows(rowIndex, numRows),

            insertRowsAfter: (afterPosition, howMany) => sheet.insertRowsAfter(afterPosition, howMany),///
            insertRowsBefore: (beforePosition, howMany) => sheet.insertRowsBefore(beforePosition, howMany),///

            moveColumns: (range, destinationIndex) => sheet.moveColumns(sheet.getRange(range), destinationIndex),
            moveRows: (range, destinationIndex) => sheet.moveRows(sheet.getRange(range), destinationIndex),
            setName: (name) => sheet.setName(name),
            sortByColumn: (columnPosition, sort = true) => sheet.sort(columnPosition, sort),
            saveOne: (value, row, col, numRow = 1, numCol = 1) => sheet.getRange(row, col, numRow, numCol).setValue(value),
            saveMany: (arrayOfRows, row, col, numRow = 1, numCol = 1) => sheet.getRange(row, col, numRow, numCol).setValues(arrayOfRows),
            getValue: (row, col) => sheet.getRange(row, col).getValue(),
            getValues: (row, col, numRow = 1, numCol = 1) => sheet.getRange(row, col, numRow, numCol).getValues(),
        };
    }

}
