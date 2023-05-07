// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDXTTnbkjRFWa0D51FFIdVSaD2Dpex8r34",
  authDomain: "pccomponentes-de-hacendado.firebaseapp.com",
  projectId: "pccomponentes-de-hacendado",
  storageBucket: "pccomponentes-de-hacendado.appspot.com",
  messagingSenderId: "656373391571",
  appId: "1:656373391571:web:d9f9dd67edf29c80c17426"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

