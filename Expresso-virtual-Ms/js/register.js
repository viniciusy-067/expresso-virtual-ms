import { auth } from "./firebase-init.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

document.querySelector("#registerBtn").addEventListener("click", () => {
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      document.querySelector("#mensagem").textContent = "❌ " + error.message;
      document.querySelector("#mensagem").style.color = "#ff4444";
    });
});