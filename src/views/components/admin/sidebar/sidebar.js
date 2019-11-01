import React from "react";
import { useLocation } from "react-router-dom";
import { Routes } from "../../../../constants/routes";
import { MoviePlexLogo } from "../../../../constants/images";
import { faTachometerAlt, faFilm } from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "../sidebar-item";
import "./sidebar.scss";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar__container">
      <div className="sidebar-header">
        <img src={MoviePlexLogo} alt="MoviePlex Logo" className="logo" />
        <span>A Movie Plex</span>
      </div>
      <SidebarItem
        title="Dashboard"
        icon={faTachometerAlt}
        route={Routes.ADMIN_DASHBOARD()}
        active={location.pathname === Routes.ADMIN_DASHBOARD()}
      />
      <SidebarItem
        title="Movies"
        icon={faFilm}
        route={Routes.ADMIN_MOVIES()}
        active={location.pathname === Routes.ADMIN_MOVIES()}
      />
    </div>
  );
};

export default Sidebar;
