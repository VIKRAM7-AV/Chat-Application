import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCo6DIAN9eqtTOEPEwo_-8f1eM4C-nBNk",
  authDomain: "chat-5eb93.firebaseapp.com",
  projectId: "chat-5eb93",
  storageBucket: "chat-5eb93.appspot.com",
  messagingSenderId: "503109733578",
  appId: "1:503109733578:web:7a01538f845190b31a3833"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
