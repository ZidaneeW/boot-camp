// src/pages/UserProfile.tsx
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Welcome, {auth.currentUser?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
