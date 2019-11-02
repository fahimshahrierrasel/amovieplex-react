import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faCog } from "@fortawesome/free-solid-svg-icons";
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
    </div>
  );
};

export default AdminHeader;
