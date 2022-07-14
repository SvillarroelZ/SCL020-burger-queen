import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import { firebaseConfig } from "../firebase/config";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { getFirestore, collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where }
