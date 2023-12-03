import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAWwO-y0UcgoURFhz2D7cEAbu50O5HFp7w",
  authDomain: "englishappdb-3c633.firebaseapp.com",
  projectId: "englishappdb-3c633",
  storageBucket: "englishappdb-3c633.appspot.com",
  messagingSenderId: "132672064717",
  appId: "1:132672064717:web:18ad7c8e387e6079af6d84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getList(whichCollection) {
  const tasksCol = collection(db, whichCollection);
  const taskSnapshot = await getDocs(tasksCol);
  const taskList = taskSnapshot.docs.map(doc => doc.data());
  return taskList;
}

export const writeDataToBD = async (collectionName, lv, eng) => {
  try{
    //firebase function to add new document to collection in DB
    const docRef = await addDoc(collection(db, collectionName), {
      lv: lv,
      eng: eng
    });
    console.log("New document added with ID: ", docRef.id);
  } catch (e) {
    console.log("Error when adding document: ", e)
  }

}

