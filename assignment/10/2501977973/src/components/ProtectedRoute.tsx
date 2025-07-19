// src/components/ProtectedRoute.tsx
import React, { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

interface Props {
  children: ReactNode;
  role: string;
}

const ProtectedRoute = ({ children, role }: Props) => {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkRole = async () => {
      const user = auth.currentUser;
      if (!user) return setAuthorized(false);
      const docRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(docRef);
      setAuthorized(userDoc.exists() && userDoc.data().role === role);
    };

    checkRole();
  }, []);

  if (authorized === null) return <p>Loading...</p>;
  return authorized ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
