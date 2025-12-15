import React from "react";
import { useAdminAuth } from "./AdminAuthContext";

const AdminDashboard = () => {
  const { logout } = useAdminAuth();
  return (
    <div style={styles.container}>
      <h2>Dashboard admin</h2>
      <p>Zone protégée. Ajoutez vos écrans produits/commandes ici.</p>
      <button style={styles.button} onClick={logout}>
        Se déconnecter
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center",
    justifyContent: "center",
    background: "#f4f4f5",
    padding: "24px",
  },
  button: {
    background: "#111827",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 700,
  },
};

export default AdminDashboard;

