import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDf81ZN05D02gKe4y5Sp1VRFBzQkK4w1mQ",
    authDomain: "takimomo-7f0db.firebaseapp.com",
    projectId: "takimomo-7f0db",
    storageBucket: "takimomo-7f0db.appspot.com",
    messagingSenderId: "1009430013189",
    appId: "1:1009430013189:web:bffc81c968215757f4036c",
    measurementId: "G-J0DM0PFNR5"
  };

//initialize fbase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);