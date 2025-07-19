// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ STEP 1: Konfigurasi
const firebaseConfig = {
  apiKey: "AIzaSyDjK3C0COFI5qHfe05DsLWo2iE3QuZIHYA",
  authDomain: "assignment-11-2df27.firebaseapp.com",
  projectId: "assignment-11-2df27",
  storageBucket: "assignment-11-2df27.appspot.com", // sudah dibenerin
  messagingSenderId: "368651760191",
  appId: "1:368651760191:web:c027ef16fddc00d2737e8a",
  measurementId: "G-V6Y3DXKDSJ"
};

// ✅ STEP 2: Inisialisasi app
const app = initializeApp(firebaseConfig);

// ✅ STEP 3: Export variabel SESUDAH inisialisasi
export const auth = getAuth(app);
export const db = getFirestore(app);
