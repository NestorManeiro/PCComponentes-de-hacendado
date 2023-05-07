import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import {auth} from './FirebaseAuth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getFirestore, collection, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

const usuario = document.getElementById("name");
const lastname = document.getElementById("lastname");
const direction = document.getElementById("direction");
const zip = document.getElementById("zip");
const email = document.getElementById("e-mail");
const pwd = document.getElementById("pwd");
const rpwd = document.getElementById("rpwd");
const form = document.getElementById("form");
const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{6,64}$/;
let ready = 0;

const firebaseConfig = {
  apiKey: "AIzaSyDXTTnbkjRFWa0D51FFIdVSaD2Dpex8r34",
    authDomain: "pccomponentes-de-hacendado.firebaseapp.com",
    projectId: "pccomponentes-de-hacendado",
    storageBucket: "pccomponentes-de-hacendado.appspot.com",
    messagingSenderId: "656373391571",
    appId: "1:656373391571:web:d9f9dd67edf29c80c17426"
}

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (pwd.value.match(passw)) {
    ready = 1;
    pwd.classList.remove("is-invalid");
  } else {
    ready = 0;
    pwd.classList.add("is-invalid");
  }

  if (pwd.value !== rpwd.value) {
    rpwd.classList.add("is-invalid");
  } else {
    if (ready === 1) {
      try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email.value, pwd.value);
        const { user } = userCredentials;
        const usuariosCollection = collection(firestore, 'Usuarios');

        // Crear documento en la colección "Usuarios"
        await setDoc(doc(usuariosCollection, user.uid), {
          LastName: lastname.value,
          name: usuario.value,
          usuario: usuario.value,
          direction: direction.value,
          postal: zip.value,
          imgProfile: ""
        });

        alert('Usuario creado correctamente: ' + usuario.value);
        window.location.href = "/";
      } catch (error) {
        console.log(error.message);
        console.log(error.code);

        if (error.code === 'auth/email-already-in-use') {
          alert('El email ya está en uso');
        } else if (error.code === 'auth/invalid-email') {
          alert('El email no es válido');
        } else {
          alert('Error al crear el usuario');
        }
      }
    }
  }
});
