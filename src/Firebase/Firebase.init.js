// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdDk6BXhoK0QhBjRlOOszL7E8YWZm90WM",
    authDomain: "helpinghand-2cb9c.firebaseapp.com",
    projectId: "helpinghand-2cb9c",
    storageBucket: "helpinghand-2cb9c.appspot.com",
    messagingSenderId: "62879712131",
    appId: "1:62879712131:web:386892919da72af92cecb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app