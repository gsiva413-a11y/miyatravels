import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-uTQVi0Mxk415aqdu7Ygvzvfd57SS-K0",
  authDomain: "miyatravels-ui.firebaseapp.com",
  projectId: "miyatravels-ui",
  storageBucket: "miyatravels-ui.firebasestorage.app",
  messagingSenderId: "794393267486",
  appId: "1:794393267486:web:bf06abc9a2f3aab97f0d0f",
  measurementId: "G-DJ4VSCCZHW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
