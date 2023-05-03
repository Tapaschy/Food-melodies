// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3YBVBMLwb7BWCOIzEdhH0FgK2XLi4LtY",
  authDomain: "food-melodies-b902a.firebaseapp.com",
  projectId: "food-melodies-b902a",
  storageBucket: "food-melodies-b902a.appspot.com",
  messagingSenderId: "356518097440",
  appId: "1:356518097440:web:855a495abc774ada384245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;