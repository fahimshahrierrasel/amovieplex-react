import React from "react";
import "./sidebar-item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SidebarItem = ({ title, icon, route, active }) => {
  return (
    <Link
      to={route}
      className={`sidebar-item__container ${active ? "sidebar-active" : ""}`}
    >
      <div className="sidebar-item__content">
        <FontAwesomeIcon icon={icon} className="icon" />
        <span className={`title ${active ? "sidebar__title-active" : ""}`}>
          {title}
        </span>
      </div>
    </Link>
  );
};

export default SidebarItem;
