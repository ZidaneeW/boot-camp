// src/pages/Login.tsx
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/user/profile"); // atau redirect sesuai role
    } catch (error) {
      alert("Login gagal: " + (error as any).message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={login}>Login</button>

      {/* 👉 Link ke halaman Register */}
      <p>
        Belum punya akun? <Link to="/register">Register di sini</Link>
      </p>
    </div>
  );
}
