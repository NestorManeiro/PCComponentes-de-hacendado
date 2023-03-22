 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD00MTDV_jBMKlUP8xRZMMOFr4RnW99ECo",
    authDomain: "pcordenadores-fbe78.firebaseapp.com",
    projectId: "pcordenadores-fbe78",
    storageBucket: "pcordenadores-fbe78.appspot.com",
    messagingSenderId: "155122140165",
    appId: "1:155122140165:web:b79ddadeeadac3980f086c",
    measurementId: "G-3XGF84NHDF"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

