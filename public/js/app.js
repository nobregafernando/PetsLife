// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuração do Firebase para o seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyCzsQbaJffG1q-FB1emrH1GNlqoLrzqtkk",
  authDomain: "pet-s-life-7a402.firebaseapp.com",
  projectId: "pet-s-life-7a402",
  storageBucket: "pet-s-life-7a402.appspot.com",
  messagingSenderId: "714976810805",
  appId: "1:714976810805:web:6ceaa2a3fa157d166c1e7c",
  measurementId: "G-K6GPYMQXMB"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
