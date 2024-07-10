// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGoU3JfH-YLH3jLrcuhvRDytgbsVWPFEE",
  authDomain: "shalininetflix-f3b40.firebaseapp.com",
  projectId: "shalininetflix-f3b40",
  storageBucket: "shalininetflix-f3b40.appspot.com",
  messagingSenderId: "986330435524",
  appId: "1:986330435524:web:ee40b2a16fec36fb7dde91",
  measurementId: "G-HBX2FFPXJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
