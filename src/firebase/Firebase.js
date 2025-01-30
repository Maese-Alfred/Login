import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // No debes repetir esto en otros archivos
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBQEKaOOLD8COte2sYqCY76rJiI2CNpCPg",
  authDomain: "login-a5acb.firebaseapp.com",
  projectId: "login-a5acb",
  storageBucket: "login-a5acb.firebasestorage.app",
  messagingSenderId: "297626841017",
  appId: "1:297626841017:web:69b4f73be24e03cc311068",
  measurementId: "G-04PZ601FQ0"
};

// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporta los servicios para ser usados en otros archivos
export { app, getAuth, analytics };