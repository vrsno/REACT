import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDStg4oqYYWCqgXseXlPfOXhxG5krrdO0w",
    authDomain: "chat-react-b6747.firebaseapp.com",
    projectId: "chat-react-b6747",
    storageBucket: "chat-react-b6747.firebasestorage.app",
    messagingSenderId: "342545873624",
    appId: "1:342545873624:web:4bf8d50baa27dabf6d75ad"
  };

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)