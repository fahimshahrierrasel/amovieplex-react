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
      <div className="sidebar-item__list">
        <SidebarItem
          title="Dashboard"
          icon={faTachometerAlt}
          route={Routes.ADMIN()}
          active={location.pathname === Routes.ADMIN()}
        />
        <SidebarItem
          title="Movies"
          icon={faFilm}
          active={location.pathname.includes("movies")}
        >
          <SidebarItem
            title="All Movies"
            route={Routes.ADMIN_MOVIES()}
            active={location.pathname === Routes.ADMIN_MOVIES()}
          />
          <SidebarItem
            title="New Movies"
            route={Routes.NEW_MOVIES()}
            active={location.pathname === Routes.NEW_MOVIES()}
          />
        </SidebarItem>
      </div>
    </div>
  );
};

export default Sidebar;
