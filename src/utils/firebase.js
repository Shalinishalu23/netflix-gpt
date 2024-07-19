// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyAmqnmjQoWvvXv2G5tzHGqnIium13iDw",
  authDomain: "shalinicinephile.firebaseapp.com",
  projectId: "shalinicinephile",
  storageBucket: "shalinicinephile.appspot.com",
  messagingSenderId: "67011342104",
  appId: "1:67011342104:web:503198182fdec39c4a386d",
  measurementId: "G-R04250DNBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
