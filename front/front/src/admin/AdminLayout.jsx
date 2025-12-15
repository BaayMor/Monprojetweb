import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { useAdminAuth } from "./AdminAuthContext";
import "./admin.css";

const AdminLayout = () => {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="admin-shell">
      <AdminNavbar onLogout={handleLogout} />
      <div className="admin-body">
        <AdminSidebar onLogout={handleLogout} />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

