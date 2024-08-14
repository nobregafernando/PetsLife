// public/js/firebaseConfig.js
const firebaseConfig = {
    apiKey: "AlzaSyCzsQbaJffG1q-FB1emrH1GNlqoLrzqtkK", // Insira a sua API key
    authDomain: "pet-s-life-7a402.firebaseapp.com", // Insira o seu auth domain
    projectId: "pet-s-life-7a402", // Insira o seu project ID
    storageBucket: "pet-s-life-7a402.appspot.com", // Insira o seu storage bucket
    messagingSenderId: "714976810805", // Insira o seu messaging sender ID
    appId: "1:714976810805:web:bdaf4d7d89dc7f61e6bff2" // Insira o seu app ID
};

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);

// Inicializando o Firestore
const db = firebase.firestore();

