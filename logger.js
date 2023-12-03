//import { logger, fileAsyncTransport } from 'react-native-logs';

const saveLogToIndexedDB = async (logData) => {
  try {
    //creating database
    const db = await window.indexedDB.open('MyLogsDB', 1);

    db.onerror = function (event) {
      console.error('IndexedDB error:', event.target.errorCode);
    };
    //database creation handler
    db.onsuccess = function (event) {
      const database = event.target.result;
      const transaction = database.transaction(['logs'], 'readwrite');
      const objectStore = transaction.objectStore('logs');

      const request = objectStore.add(logData);

      request.onsuccess = function () {
        console.log('Log added to IndexedDB:', logData);
      };

      request.onerror = function (error) {
        console.error('Error adding log to IndexedDB:', error);
      };
    };
  } catch (error) {
    console.error('IndexedDB error:', error);
  }
};


export const log = (level, message) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log("LOG: " ,timestamp + "  |  ", "[ " + level + " ]   |  ", message);
  //saving logs to browser local DB
  saveLogToIndexedDB({ id: Date.now(), level, message, timestamp: new Date().toISOString() });
}


//react native logging library that may be implemented in the feature if I will need to store logs for mobile apps with expo platform I guess
/*const logging = logger.createLogger({
  
});*/