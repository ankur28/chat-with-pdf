import { getApp, getApps,initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAlNRAQkgz47GadrQyuTqDagWqYIabKaPk",
    authDomain: "chat-with-pdf-2d1aa.firebaseapp.com",
    projectId: "chat-with-pdf-2d1aa",
    storageBucket: "chat-with-pdf-2d1aa.appspot.com",
    messagingSenderId: "824279920751",
    appId: "1:824279920751:web:550d6eb3801140c9fe9d9a",
    measurementId: "G-CV1FHK85L6"
};  

const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

const storage = getStorage(app);

export { db ,storage};