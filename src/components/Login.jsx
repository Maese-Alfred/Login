import React from "react";
import { useState } from "react";
import { registerUser, loginUser } from "../firebase/auth";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "./Login.css";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(email, password);
      console.log(user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      console.log(user);
      navigate("/Dashboard"); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login--container">
      <h1>Login</h1>
      <form className="login--form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login--form__input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login--form__input"
        />
        <button className="register__button" onClick={handleRegister}>Register</button>
        <button className="login__button" onClick={handleLogin}>Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
