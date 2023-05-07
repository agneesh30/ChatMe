// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQtJZZq3yluD2QUfDbzlI5ecd4AuB9NNY",
    authDomain: "chatme-6d818.firebaseapp.com",
    projectId: "chatme-6d818",
    storageBucket: "chatme-6d818.appspot.com",
    messagingSenderId: "777890607546",
    appId: "1:777890607546:web:9e9b3db58734596d0a6d83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// Create a root reference
export const storage = getStorage();
export const db = getFirestore();