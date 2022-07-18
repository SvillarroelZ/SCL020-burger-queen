import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js'
import { getFirestore, collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js'

import { firebaseConfig } from '../firebase/config'

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

export { getFirestore, collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut }
