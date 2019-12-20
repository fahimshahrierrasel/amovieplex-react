import React from "react";
import "./sidebar-item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SidebarItem = ({ title, icon, route, active, children }) => {
  return (
    <div>
      <Link
        to={route ? route : "#"} // to is required props '#' means it will not link to any page
        className={`sidebar-item__container ${
          route ? "sidebar-item__link" : ""
        } ${icon && active ? "sidebar-active" : ""}`}
      >
        <div className="sidebar-item__content">
          {icon ? <FontAwesomeIcon icon={icon} className="icon" /> : null}
          <span
            className={`title ${icon ? "" : "sidebar__child-item"} ${
              active ? "sidebar__title-active" : ""
            }`}
          >
            {title}
          </span>
        </div>
      </Link>
      {children && <div className="sidebar-item__children">{children}</div>}
    </div>
  );
};

export default SidebarItem;
