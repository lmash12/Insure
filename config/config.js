// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLMBR2LWA8-BPI236b1VCOHyzS7WYvQnE",
  authDomain: "insure-dbf71.firebaseapp.com",
  projectId: "insure-dbf71",
  storageBucket: "insure-dbf71.appspot.com",
  messagingSenderId: "803757201692",
  appId: "1:803757201692:web:07e37b024996a33cf7c2d9",
  measurementId: "G-J0V34G6P7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
