// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsYdRvhtRI7Y_7LNzw8n5pL6DVbLj7EQc",
  authDomain: "netflixgpt-dc888.firebaseapp.com",
  projectId: "netflixgpt-dc888",
  storageBucket: "netflixgpt-dc888.appspot.com",
  messagingSenderId: "1071801939360",
  appId: "1:1071801939360:web:20720c91d9814397b6e0c5",
  measurementId: "G-FGGP5N8N8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
