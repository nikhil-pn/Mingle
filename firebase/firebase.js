import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbydK77ObP_RRof0THza3r9AXb8JvaAoI",
  authDomain: "mingle-chats.firebaseapp.com",
  projectId: "mingle-chats",
  storageBucket: "mingle-chats.appspot.com",
  messagingSenderId: "986730776157",
  appId: "1:986730776157:web:86ec460b0d58eefcdeefb4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
