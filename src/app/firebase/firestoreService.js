import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

/* Set User Profile Data in Firestore */
export function addUserToFirestore(user) {
  return setDoc(doc(db, 'users', user.uid), {
    name: user.email.split('@')[0],
    email: user.email,
    createdAt: serverTimestamp(),
  });
}
