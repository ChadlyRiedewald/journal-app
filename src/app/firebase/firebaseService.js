import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from './config';
import { addUserToFirestore } from './firestoreService';

// Sign In
export function signInFirebase(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Sign Up
export async function signUpFirebase(email, password) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return await addUserToFirestore(result.user);
  } catch (error) {
    throw error;
  }
}

// Sign Out
export function signOutFirebase() {
  return auth.signOut();
}

// Update Password
export function updatePasswordFirebase(newPassword) {
  const user = auth.currentUser;
  return updatePassword(user, newPassword);
}

// Reset Password
export function resetPasswordFirebase(email) {
  return sendPasswordResetEmail(auth, email);
}
