import { writeDataToBD } from './firebaseConfig.js';

import fs from 'fs';

// Чтение файла data.json
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    
    jsonData.forEach(doc => {
      writeDataToBD("englishApp_tasks", doc.lv, doc.eng);
    });
  } catch (error) {
    console.error(error);
  }
});
