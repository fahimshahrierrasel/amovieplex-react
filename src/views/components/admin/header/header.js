import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCog,
  faIdCard,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { UserAvatar } from "../../../../constants/images";

const AdminHeader = () => {
  return (
    <div className="admin-header">
      <FontAwesomeIcon icon={faSearch} className="header-icon__button" />
      <FontAwesomeIcon icon={faBell} className="header-icon__button" />
      <FontAwesomeIcon icon={faCog} className="header-icon__button" />
      <div className="user-info">
        <img className="avatar" src={UserAvatar} alt="User Avatar" />
        <span>Admin</span>
      </div>
      <div className="user-action__container">
        <div className="user-actions">
          <button>
            <FontAwesomeIcon icon={faIdCard} className="header-icon__button" />
            Profile
          </button>
          <button>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="header-icon__button"
            />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
