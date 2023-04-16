// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvauR-4Vh4YTElUg1IjY1oN17OkcKz9aQ",
  authDomain: "the-news-dragon.firebaseapp.com",
  projectId: "the-news-dragon",
  storageBucket: "the-news-dragon.appspot.com",
  messagingSenderId: "357597429349",
  appId: "1:357597429349:web:71a78403e279e8d8c4508c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;