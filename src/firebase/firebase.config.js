// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAKx2lRO4BZRU6eeqFfjG2MQtZXXle6q0",
  authDomain: "elegant-essence.firebaseapp.com",
  projectId: "elegant-essence",
  storageBucket: "elegant-essence.appspot.com",
  messagingSenderId: "846407504188",
  appId: "1:846407504188:web:8024de272d7042ac8bce39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app