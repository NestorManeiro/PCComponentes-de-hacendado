import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './FirebaseAuth.js'
import { showToast } from './Toastify.js'

signInForm.addEventListener("submit", async e => {
    console.log("asdhashdashd")
    e.preventDefault()

    const email = document.getElementById("e-mail");
    const password = document.getElementById("pwd");

    try {
        const credentials = await signInWithEmailAndPassword(auth, email.value, password.value)
        showToast('Bienvenido:  '+email.value,'sucess')
        console.log(credentials)
    } catch (error) {
        console.log("test")
        if (error.code === "auth/wrong-password") {
            showToast('La contraseña no coincide', 'error')
        } else if (error.code === 'auth/user-not-found') {
            showToast('No se encuentra el usuario', 'error')
        } else if (error.code === 'auth/too-many-requests') {
            showToast('Demasiados intentos, intentelo más tarde', 'error')
        }
    }

});