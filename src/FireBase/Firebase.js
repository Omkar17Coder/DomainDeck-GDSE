// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCylflnGb8gLfkwZMjgxVz9uRbdJuF9Oj0",
  authDomain: "domaindeck-8d96c.firebaseapp.com",
  projectId: "domaindeck-8d96c",
  storageBucket: "domaindeck-8d96c.appspot.com",
  messagingSenderId: "542483657188",
  appId: "1:542483657188:web:8ff249800242401bdad7f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
