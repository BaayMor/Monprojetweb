import React from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "./AdminAuthContext";

const RequireAdmin = ({ children }) => {
  const { isAuthenticated } = useAdminAuth();
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default RequireAdmin;

