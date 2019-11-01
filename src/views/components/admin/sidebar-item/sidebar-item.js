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
      <FontAwesomeIcon icon={icon} className="icon" />
      <span className={`title ${active ? "sidebar__title-active" : ""}`}>
        {title}
      </span>
    </Link>
  );
};

export default SidebarItem;
