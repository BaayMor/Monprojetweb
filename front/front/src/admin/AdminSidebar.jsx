import React from "react";
import { NavLink } from "react-router-dom";
import addIcon from "../assets/frontend_assets/add_icon_green.png";
import parcelIcon from "../assets/frontend_assets/parcel_icon.png";
import bagIcon from "../assets/frontend_assets/bag_icon.png";

const AdminSidebar = ({ onLogout }) => {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__options">
        <NavLink className="admin-sidebar__option" to="/admin/products/new">
          <img src={addIcon} alt="" />
          <p>Ajouter</p>
        </NavLink>
        <NavLink className="admin-sidebar__option" to="/admin/products">
          <img src={bagIcon} alt="" />
          <p>Produits</p>
        </NavLink>
        <NavLink className="admin-sidebar__option" to="/admin/orders">
          <img src={parcelIcon} alt="" />
          <p>Commandes</p>
        </NavLink>
      </div>
      <button className="admin-sidebar__logout" onClick={onLogout}>
        Se déconnecter
      </button>
    </aside>
  );
};

export default AdminSidebar;

