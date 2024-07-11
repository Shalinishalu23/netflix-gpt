// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4ApQrxw5QgOyvKCAZqkupG5Jy9i2d_fo",
  authDomain: "reactnetflix-9e311.firebaseapp.com",
  projectId: "reactnetflix-9e311",
  storageBucket: "reactnetflix-9e311.appspot.com",
  messagingSenderId: "804703088038",
  appId: "1:804703088038:web:96e001a71d2183e1b2f367",
  measurementId: "G-YZV3JCCXX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
