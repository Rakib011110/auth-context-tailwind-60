// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDrD1SVjXQJT4FgiqzDDL8-hunLTyeHY8",
    authDomain: "auth-firebase-context-ta-c1df1.firebaseapp.com",
    projectId: "auth-firebase-context-ta-c1df1",
    storageBucket: "auth-firebase-context-ta-c1df1.appspot.com",
    messagingSenderId: "826156069706",
    appId: "1:826156069706:web:a96750ce0bd0750b2507b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app