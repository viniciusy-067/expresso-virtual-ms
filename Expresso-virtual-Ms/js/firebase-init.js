import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBvaa6p0W1J1_rw0fWegh8Au4NkBBytVg8",
  authDomain: "expressoms.firebaseapp.com",
  projectId: "expressoms",
  storageBucket: "expressoms.firebasestorage.app",
  messagingSenderId: "676921976537",
  appId: "1:676921976537:web:2d5428f5e4756d2fb380c8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };