import { auth } from "./firebase-init.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "login.html";
  }
});

document.querySelector("#logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
});