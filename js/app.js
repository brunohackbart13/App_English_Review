// Confirma que app.js foi carregado
console.log("app.js foi carregado com sucesso");

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCVGdIWYIe6ciV3UeMSFR9c82WaQ3Rn9qY",
  authDomain: "english-app-review.firebaseapp.com",
  databaseURL: "https://english-app-review-default-rtdb.firebaseio.com",
  projectId: "english-app-review",
  storageBucket: "english-app-review.firebasestorage.app",
  messagingSenderId: "330130642018",
  appId: "1:330130642018:web:0f8feb21aedb098f08ad3b"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
console.log("Firebase foi inicializado com sucesso");
