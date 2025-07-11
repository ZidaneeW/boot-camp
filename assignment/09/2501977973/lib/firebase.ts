import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "AUTH_DOMAIN_KAMU",
  projectId: "PROJECT_ID_KAMU",
  storageBucket: "STORAGE_BUCKET_KAMU",
  messagingSenderId: "MSG_ID_KAMU",
  appId: "APP_ID_KAMU"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };