const ERRORS = {
  INVALID_BOT_TOKEN: "Invalid or missing bot token",
  INVALID_SPREADSHEET_ID: "Spreadsheet Id not found",

  TEMPORARY_MEMORY_INSTANCE_NULL:
    "Failed to access temporary memory. Ensure that the temporary memory instance is properly initialized. Consider using 'temporaryMemory(CacheService)' to initialize the memory instance",

  PERMANENT_MEMORY_INSTANCE_NULL:
    "Failed to access permanent memory. Ensure that the permanent memory instance is properly initialized. Consider using 'permanentMemory(PropertiesService)' to initialize the memory instance",

  FAILED_TO_GET_UPDATE:
    "Failed to retrieve update data. Please try sending a new message to your bot to initiate an update",

  INVALID_UPDATE_OBJECT:
    "Invalid update object: The provided update is either null, not an object",
  UNKNOWN_UPDATE_TYPE:
    "Unknown update type: The update object does not match any of the allowed update types",

  CHAT_NOT_FOUND:
    "Chat ID not found: The chat object is either null or missing an id",

  USER_NOT_FOUND:
    "User ID not found: The user object is either null or missing an id",
  MESSAGE_ID_NOT_FOUND:
    "Message ID not found: The message object is either null or missing a message_id",

  USER_ID_NOT_FOUND:
    "Unable to find user ID. User ID is required to retrieve session data",
  KEY_NOT_FOUND:
    "Failed to find specified key. The key is required to access session values",
  VALUE_NOT_FOUND:
    "Failed to find specified value for the given key. The value is required to set a session value",
  OBJECT_OF_KEY_VALUE_PAIRS_REQUIRED:
    "Failed to set multiple session data. An object containing key-value pairs is required",

  INVALID_REQUEST_PARAMETERS:
    "Failed to send request. Method parameter is required",

  MISSING_TEXT_PARAMETER:
    "Failed to reply with edited message. Text parameter is required",
  MESSAGE_ID_REQUIRED: "Message ID is required to edit a message",

  MIDDLEWARE_MUST_BE_FUNCTION: "Middleware must be a function",
  ACCESS_TOKEN_NOT_FOUND:
    "Failed to find access token. Please ensure your project is deployed",
  MIDDLEWARE_SERVER_NOT_FOUND:
    "Middleware server not found. Please create an issue in the Telesun GitHub repository:\nhttps://github.com/abdiu34567/telesun.js or contact the maintainer of Telesun (@Me_abd) on Telegram",

  UNABLE_TO_GET_SCRIPT_ID: "Failed to retrieve script ID. Please try again",

  USER_ID_REQUIRED:
    "unable to find userId, userId required to get temporary session",
  SESSION_VALUE_GET_PARAMS_REQUIRED:
    "Instance, userId, and key are required to get a session value",
  SESSION_VALUE_SET_PARAMS_REQUIRED:
    "Instance, userId, key, and value are required to set a session value",
  MULTIPLE_SESSION_VALUES_SET_PARAMS_REQUIRED:
    "Instance, userId, and keyObj (as an object) are required to set multiple session values",
  SESSION_VALUE_REMOVE_PARAMS_REQUIRED:
    "Instance, userId, and key are required to remove a session value",
  SESSION_DATA_NOT_FOUND: "Session data not found. Nothing to remove",
  SESSION_KEY_NOT_FOUND: "Key not found in session data", //param
  SESSION_DELETE_PARAMS_REQUIRED:
    "Instance and userId are required to delete a session",

  PERSISTENT_SESSION_GET_PARAMS_REQUIRED:
    "Instance and userId are required to get a persistent session",
  PERSISTENT_SESSION_VALUE_GET_PARAMS_REQUIRED:
    "Instance, userId, and key are required to get a persistent session value",
  PERSISTENT_SESSION_VALUE_SET_PARAMS_REQUIRED:
    "Instance, userId, key, and value are required to set a persistent session value",
  MULTIPLE_PERSISTENT_SESSION_VALUES_SET_PARAMS_REQUIRED:
    "Instance, userId, and keyObj (as an object) are required to set multiple persistent session values",
  PERSISTENT_SESSION_VALUE_REMOVE_PARAMS_REQUIRED:
    "Instance, userId, and key are required to remove a persistent session value",
  PERSISTENT_SESSION_DATA_NOT_FOUND:
    "Persistent session data not found. Nothing to remove",
  PERSISTENT_SESSION_KEY_NOT_FOUND: "Key not found in persistent session data",
  PERSISTENT_SESSION_DELETE_PARAMS_REQUIRED:
    "Instance and userId are required to delete a persistent session",
  KEY_TYPE_ERROR: "The key must be a number or a string",
  VALUE_TYPE_ERROR: "The value must be a number or a string",
  KEY_VALUE_TYPE_ERROR: "Both key and value must be a number or a string",
  ARRAY_OF_KEYS_TYPE_ERROR: "arrayOfKeys must be an array.",
  OBJECT_OF_KEYVALUEPAIRS_TYPE_ERROR:
    "objectOfKeyValuePairs must be an object (arrays are not supported)",
  INSTANCE_REQUIRED_FOR_PROPERTIES: "Instance is required to get properties",
  INSTANCE_REQUIRED_FOR_DELETION:
    "Instance is required to delete all properties",

  CACHE_SERVICE_INSTANCE_NULL: "CacheService instance cannot be null",
  PROPERTY_SERVICE_INSTANCE_NULL: "PropertiesService instance cannot be null",
};

class TelesunError extends Error {
  constructor(code, message, originalError = null) {
    super(message);
    this.code = code;
    this.originalError = originalError;
  }
}
