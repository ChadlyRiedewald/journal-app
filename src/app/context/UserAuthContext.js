import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from 'app/firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';

import { doc, serverTimestamp, setDoc, onSnapshot } from 'firebase/firestore';

const userAuthContext = createContext(null);

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  // Log In
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Sign Up
  async function signUp(values) {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // Make new doc in firestore
      return await setDoc(doc(db, 'users', result.user.uid), {
        displayName: values.name,
        email: result.user.email,
        createdAt: serverTimestamp(),
        photoURL: '',
      });
    } catch (error) {
      throw error;
    }
  }

  // Sign Out
  function logOut() {
    return signOut(auth);
  }

  // Google sign in / up
  async function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      // Make new doc in firestore
      return await setDoc(doc(db, 'users', result.user.uid), {
        displayName: result.user.displayName,
        email: result.user.email,
        createdAt: serverTimestamp(),
        photoURL: result.user.photoURL || '',
      });
    } catch (error) {
      throw error;
    }
  }

  // Reset password
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  // Listener to check Auth, and if there is a user authenticated set the user Doc in context
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsubscribeUser = onSnapshot(
          doc(db, 'users', user.uid),
          (doc) => {
            setUser(doc.data());
          }
        );
        return () => {
          unsubscribeUser();
        };
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        resetPassword,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
