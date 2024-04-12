// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0tWAF36L1zvjHE9sQaez94HGsxTOGElc",
    authDomain: "syncfusion-dashboard-00.firebaseapp.com",
    projectId: "syncfusion-dashboard-00",
    storageBucket: "syncfusion-dashboard-00.appspot.com",
    messagingSenderId: "536748339139",
    appId: "1:536748339139:web:366e8797e7e208e59d1776",
    measurementId: "G-DZKQ1C841D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
