import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User
} from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = initializeApp(firebaseConfig);
  private auth = getAuth(this.app);
  private db = getFirestore(this.app);

  constructor() {}
async saveUserData(uid: string, data: any): Promise<void> {
    const db = getFirestore();
    await setDoc(doc(db, 'users', uid), data, { merge: true });
  }
async updateUser(data: any) {
  const uid = this.getUserId();
  if (!uid) throw new Error('User not logged in');

  const userRef = doc(this.db, 'users', uid);

  return await setDoc(
    userRef,
    data,
    { merge: true } // مهم جدًا
  );
}
async getUserData(uid: string) {
  if (!uid) return null;

  const userRef = doc(this.db, 'users', uid);
  const snap = await getDoc(userRef);

  return snap.exists() ? snap.data() : null;
}

  // ✅ Register User
  async register(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    localStorage.setItem('uid', userCredential.user.uid);
    return userCredential;
  }

  // ✅ Login User
  async login(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    localStorage.setItem('uid', userCredential.user.uid);
    return userCredential;
  }

  // ✅ Google Login
  async googleLogin() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(this.auth, provider);
    localStorage.setItem('uid', result.user.uid);
    return result;
  }
   async addData(collectionName: string, data: any) {
    return await addDoc(collection(this.db, collectionName), data);
  }
getUserId() {
  return this.auth.currentUser?.uid || null;
}


  // ✅ Add or Update Data (باسم المستخدم)
  async setData(collectionName: string, docId: string, data: any) {
    return await setDoc(doc(this.db, collectionName, docId), data, { merge: true });
  }

  // ✅ Get Data
  async getData(collectionName: string) {
    const querySnapshot = await getDocs(collection(this.db, collectionName));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

// جيب يوزر بالـ username
async getUserByUsername(username: string) {
  const { getDocs, collection, query, where } = await import('firebase/firestore');
  const q = query(
    collection(this.db, 'users'),
    where('profile.username', '==', username)
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return snap.docs[0].data();
}


  // ✅ Logout
  logout() {
    localStorage.removeItem('uid');
    return signOut(this.auth);
  }
}
