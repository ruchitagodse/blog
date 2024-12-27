// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXOe0hGQQibfUlsp4vsSDf3bCxzn5BpWk",
  authDomain: "fir-5c7a6.firebaseapp.com",
  projectId: "fir-5c7a6",
  storageBucket: "fir-5c7a6.appspot.com",
  messagingSenderId: "131540450508",
  appId: "1:131540450508:web:bd95dd947d4ce48e401669",
  measurementId: "G-MXPEY1PVN6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };

  