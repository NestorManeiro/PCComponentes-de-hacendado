import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './FirebaseAuth.js'

signInForm.addEventListener("submit", async e => {
  e.preventDefault()

  const email = document.getElementById("e-mail");
  const password = document.getElementById("pwd");

  try {
    const credentials = await signInWithEmailAndPassword(auth, email.value, password.value)
    alert('Bienvenido:  '+email.value)
    console.log(credentials)
  } catch (error) {
    console.log("error:", error)

    if (error.code === "auth/wrong-password") {

      alert('La contraseña no coincide')
    } else if (error.code === 'auth/user-not-found') {
      alert('No se encuentra el usuario')
    } else if (error.code === 'auth/too-many-requests') {
      alert('Demasiados intentos, intentelo más tarde')
    }
  }

});
