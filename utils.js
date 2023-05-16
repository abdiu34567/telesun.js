"use strict";

function Main_(method, param) {
  // Check if data found and it is object
  let argObj = param || { method: method };
  if (typeof argObj !== "object") {
    throw new Error("Object expected");
  }

  // Modify object values
  for (let key in argObj) {
    if (typeof argObj[key] === "object") {
      argObj[key] = JSON.stringify(argObj[key]);
    }
  }

  if (argObj.chat_id) {
    argObj.chat_id = String(argObj.chat_id);
  }
  if (argObj.user_id) {
    argObj.user_id = String(argObj.user_id);
  }

  argObj.method = method;

  const options = {
    method: "post",
    payload: argObj
  };


  const response = UrlFetchApp.fetch(Constants.TELEGRAM_API_URL + "/", options);


  // Check if response is valid
  if (response.getResponseCode() !== 200) {
    throw new Error("Invalid response from API");
  }

  return JSON.parse(response.getContentText());
}



function rM_(Obj, Param) {
  if (Param) {
    return Object.assign(Param, Obj);
  }
  return Obj;
}


function Middleware_(Function) {
  let Next = false;
  Function(Context, (next) => (Next = true));
  if (!Next) { Constants.NEXT_MIDDLEWARE = 0 }
};



/**
 * Adds values from Array to the last row of the sheet
 * @param {string} sheetId - sheetId from sheet url
 * @param {string} sheetName - unique sheet name
 */
function sheetConnect(sheetId, sheetName) {
  return (SheetDB.connect =
    SpreadsheetApp.openById(sheetId).getSheetByName(sheetName));
};


function GetLatestUpdate_(botToken) {
  const updates = getUpdates(botToken);//returns JSON
  
  if (!updates) {
    return null;
  }

  if (!updates || !updates.result.length) {
    return null;
  }

  const newRequestUpdate = updates.result[0];
  return newRequestUpdate;
}

function Api_(botToken, data) {
  let Url;
  if (Constants.TELEGRAM_API_URL === 'https://api.telegram.org/bot') { Url = Constants.TELEGRAM_API_URL + botToken }
  else { Url = Constants.TELEGRAM_API_URL; }
  return JSON.parse(UrlFetchApp.fetch(Url + "/", data));
}