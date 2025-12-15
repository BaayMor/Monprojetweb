import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AdminAuthContext = createContext(null);
const STORAGE_KEY = "adminToken";

export const AdminAuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY) || "");

  useEffect(() => {
    if (token) {
      localStorage.setItem(STORAGE_KEY, token);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [token]);

  const value = useMemo(
    () => ({
      token,
      login: setToken,
      logout: () => setToken(""),
      isAuthenticated: Boolean(token),
    }),
    [token]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => useContext(AdminAuthContext);

