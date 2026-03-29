// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB7QJXGXCSvncPz4wMzJtD44eUPzGwm1ls",
  authDomain: "portify-ca3c2.firebaseapp.com",
  projectId: "portify-ca3c2",
  storageBucket: "portify-ca3c2.appspot.com",
  messagingSenderId: "985242555552",
  appId: "1:985242555552:web:588f2cae92f91b6d38a5c5",
  measurementId: "G-91Y7H5DT8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);