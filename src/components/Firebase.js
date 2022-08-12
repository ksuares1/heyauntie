// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtZUSp8I7h_WSpUTkdRhHyFDAu-csiMzM",
  authDomain: "heyauntie-c1850.firebaseapp.com",
  databaseURL: "https://heyauntie-c1850-default-rtdb.firebaseio.com",
  projectId: "heyauntie-c1850",
  storageBucket: "heyauntie-c1850.appspot.com",
  messagingSenderId: "606307744470",
  appId: "1:606307744470:web:c2d43f53a6c6aa13226777",
  measurementId: "G-HYEH8567EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getDatabase(app);