import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCS7idb46NTfD6IFUReqaQGSIEBf70geMA",
  authDomain: "fir-155d3.firebaseapp.com",
  projectId: "fir-155d3",
  storageBucket: "fir-155d3.appspot.com",
  messagingSenderId: "195879143200",
  appId: "1:195879143200:web:66ba353a0a16ecbd917945"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app );

export { app , auth };
