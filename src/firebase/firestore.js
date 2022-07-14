import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "../firebase/init"
import { db } from '../firebase/init';

export const savePersonName = () => {
    addDoc(collection(db, 'persons'), {name})
}