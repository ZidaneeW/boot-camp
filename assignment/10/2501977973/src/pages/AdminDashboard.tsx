// src/pages/AdminDashboard.tsx
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Hello Admin, {auth.currentUser?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
