import React from "react";
import { useLocation } from "react-router-dom";
import { Routes } from "../../../../constants/routes";
import { MoviePlexLogo } from "../../../../constants/images";
import { faTachometerAlt, faFilm } from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "../sidebar-item";
import "./sidebar.scss";

const Sidebar = () => {
  const location = useLocation();
  const items = [];
  for (let i = 0; i < 100; i++) {
    items.push(i);
  }
  return (
    <div className="sidebar__container">
      <div className="sidebar-header">
        <img src={MoviePlexLogo} alt="MoviePlex Logo" className="logo" />
        <span>A Movie Plex</span>
      </div>
      <div className="sidebar-item__list">
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
        {items.map(item => (
          <SidebarItem
            key={item}
            title={`Item ${item}`}
            icon={faFilm}
            route={Routes.ADMIN_MOVIES() + `/${item}`}
            active={location.pathname === Routes.ADMIN_MOVIES() + `/${item}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
