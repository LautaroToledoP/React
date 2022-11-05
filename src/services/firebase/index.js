import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDaqVrDgQhgfbgNxCdNf5nLh2o_UKrU7Cw",
  authDomain: "proyectocoder-backend.firebaseapp.com",
  projectId: "proyectocoder-backend",
  storageBucket: "proyectocoder-backend.appspot.com",
  messagingSenderId: "532702806134",
  appId: "1:532702806134:web:a50040b265064ac9419f57"
};

const app = initializeApp(firebaseConfig);

export const reference = getFirestore(app)