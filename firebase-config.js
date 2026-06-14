// ----------------------------------------------------------------------
// FIREBASE CONFIGURATION
// ----------------------------------------------------------------------
// IMPORTANT: Paste your configuration object from the Firebase Console 
// right here. You can find this in your Firebase Project Settings under
// the "General" tab (scroll down to "Your apps").
// ----------------------------------------------------------------------

const firebaseConfig = {
  apiKey: "AIzaSyBmeeHNRXphXbV4mCBy_cVLYFZphDGTj_s",
  authDomain: "birthday-app-a1aaa.firebaseapp.com",
  projectId: "birthday-app-a1aaa",
  storageBucket: "birthday-app-a1aaa.firebasestorage.app",
  messagingSenderId: "553083600252",
  appId: "1:553083600252:web:6a20b6d8fda92b440cf8f9"
};

// Import the functions you need from the Firebase modular SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export them so other files (index.html, admin.html) can use them
export { db, auth, provider };
