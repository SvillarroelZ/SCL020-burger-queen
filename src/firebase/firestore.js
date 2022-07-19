import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  where,
  db,
} from '../firebase/init';

export const savePersonName = name => {
  addDoc(collection(db, 'persons'), { name });
};
