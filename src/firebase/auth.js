import { getAuth } from "./firebase"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // Solo importa las funciones necesarias

const auth = getAuth(); 

const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Si el registro es exitoso, devuelve el usuario
      return userCredential.user;
    })
    .catch((error) => {
      // Captura y devuelve el error
      throw error;
    });
};

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Si el inicio de sesión es exitoso, devuelve el usuario
        return userCredential.user;
      })
      .catch((error) => {
        // Captura y devuelve el error
        throw error;
      });
  };

export { registerUser, loginUser };
  
