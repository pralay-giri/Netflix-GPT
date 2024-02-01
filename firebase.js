// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAXcUVbNuDLID-9VKEKVPWL5q1SiUsqq0",
    authDomain: "netflix-gpt-b2967.firebaseapp.com",
    projectId: "netflix-gpt-b2967",
    storageBucket: "netflix-gpt-b2967.appspot.com",
    messagingSenderId: "355030567268",
    appId: "1:355030567268:web:b82e54b13cc3d60cea1271",
    measurementId: "G-C2XGPWZHDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
