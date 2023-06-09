// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAu-dqKjdMdaBwVN3neS_Pz1sBIn0Lasaw",
  authDomain: "travel---react-native.firebaseapp.com",
  projectId: "travel---react-native",
  storageBucket: "travel---react-native.appspot.com",
  messagingSenderId: "840170689459",
  appId: "1:840170689459:android:f0a94e9fd3009cd89af1c6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
