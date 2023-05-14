// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArerBIS6x5EqzI3O_cZWGZ6hHqit_zfC8",
  authDomain: "hire-spot.firebaseapp.com",
  projectId: "hire-spot",
  storageBucket: "hire-spot.appspot.com",
  messagingSenderId: "295570436510",
  appId: "1:295570436510:web:4a3a757271b198e80ce68f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;