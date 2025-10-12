// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5i8Vt35c8oEdEUoJ_DtmeK_9CBrej4gA",
  authDomain: "quiz-2be4c.firebaseapp.com",
  databaseURL: "https://quiz-2be4c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quiz-2be4c",
  storageBucket: "quiz-2be4c.firebasestorage.app",
  messagingSenderId: "101981060936",
  appId: "1:101981060936:web:c0fe86a7f8aa90c6c1bd7d",
  measurementId: "G-QE3FEYD079"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);