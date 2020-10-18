import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from '../.config.prod.js';

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };