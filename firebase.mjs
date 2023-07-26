// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAYdVEk6oaTKqbcxZsC8yMzjm0UeHGK0tw",
  authDomain: "user-9d4be.firebaseapp.com",
  projectId: "user-9d4be",
  storageBucket: "user-9d4be.appspot.com",
  messagingSenderId: "999250386518",
  appId: "1:999250386518:web:af204579fe0c34131ee5f7",
  measurementId: "G-VCP3ZRZR58"
};

  // Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export  const db = getFirestore(app);
export const analytics = getAnalytics(app);
